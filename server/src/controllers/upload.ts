import { Router } from "express";
import { randomUUID } from "crypto";
import multer from "multer";
import fs from "fs/promises";
import path from "path";
import { mergeChunks } from "../utils/mergeChunks";

const router = Router();
const uploads = new Map<string, { fileName: string; chunks: Set<number> }>();

// 配置分片存储到本地
const storage = multer.diskStorage({
    destination: async (req, _, cb) => {
        const { uploadId } = req.params;
        const tempDir = path.join(__dirname, `../../../localFiles/temp`, uploadId);

        await fs.mkdir(tempDir, { recursive: true });
        cb(null, tempDir);
    },
    filename: (req, file, cb) => {
        const { index } = req.body;
        cb(null, `${index}.chunk`);
    },
});
const upload = multer({ storage });

// api:
router.post("/upload/init", (req, res) => {
    const { fileName, fileHash } = req.body;
    // 秒传验证
    if (uploads.has(fileHash)) {
        res.status(200).json({
            exist: true,
            url: `/localFiles/${fileHash}/${fileName}`,
        });
    } else {
        const uploadId = randomUUID();
        uploads.set(uploadId, { fileName, chunks: new Set() });
        res.status(200).json({
            exist: false,
            uploadId,
        });
    }
});

router.post("/upload/:uploadId", upload.single("file"), async (req, res) => {
    const { uploadId } = req.params;

    const index = parseInt(req.body.index);
    const upload = uploads.get(uploadId);

    if (!upload) {
        res.status(400).end();
    } else {
        upload.chunks.add(index);
        // 模拟保存失败;
        if (Math.random() < 0.5) {
            res.status(500).end();
        }
        res.status(200).end();
    }
});

router.get("/upload/chunks/:uploadId", (req, res) => {
    const { uploadId } = req.params;
    const upload = uploads.get(uploadId);
    res.status(200).json((upload && Array.from(upload?.chunks)) || []);
});

router.post("/upload/complete/:uploadId", async (req, res) => {
    const { uploadId } = req.params;
    const upload = uploads.get(uploadId);
    if (!upload) {
        res.status(404).end();
        return;
    }

    try {
        const finalPath = await mergeChunks(uploadId, upload.fileName);
        res.json({ url: `localFiles/${path.basename(finalPath)}` });
    } catch (err) {
        res.status(500).json({ error: "合并文件失败" });
    }
});

export default router;
