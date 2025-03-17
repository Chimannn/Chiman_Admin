import { Router } from "express";
import { randomUUID } from "crypto";
import multer from "multer";
import fs from "fs/promises";
import path from "path";
import { mergeChunks } from "../utils/mergeChunks";

const router = Router();
// 分片上传任务表（内存或临时存储）
const uploads = new Map<string, { fileHash: string; fileName: string; chunks: Array<{}> }>();
// 文件注册表（持久化存储，如数据库）
const fileRegistry = new Map<string, { fileName: string; url: string }>();

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
    const { fileName, fileHash, uploadId } = req.body;
    // 秒传验证
    if (fileRegistry.has(fileHash)) {
        res.status(200).json({
            exist: true,
            url: fileRegistry.get(fileHash)?.url,
        });
    } else if (uploadId && uploads.has(uploadId)) {
        res.status(200).json({
            exist: false,
            uploadId,
        });
    } else {
        const newUploadId = randomUUID();
        uploads.set(newUploadId, { fileHash, fileName, chunks: [] });
        res.status(200).json({
            exist: false,
            uploadId: newUploadId,
        });
    }
});

router.post("/upload/:uploadId", upload.single("file"), async (req, res) => {
    const { uploadId } = req.params;

    const index = parseInt(req.body.index);
    const chunkHash = req.body.hash; // 前端单个分片哈希
    const upload = uploads.get(uploadId);

    if (!upload) {
        res.status(400).end();
    } else {
        upload.chunks.push({ index, chunkHash });
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
        const { result, data } = await mergeChunks(
            uploadId,
            upload.fileName,
            upload.fileHash,
            upload.chunks
        );
        if (result === "success") {
            fileRegistry.set(data.resultHash || "", {
                fileName: upload.fileName,
                url: `localFiles/${path.basename(data.finalPath || "")}`,
            });
            res.status(200).json({
                code: 0,
                url: `localFiles/${path.basename(data.finalPath || "")}`,
            });
        } else {
            res.status(500).json({
                error: "分片传递不完整",
                corruptedChunks: data.corruptedChunks,
            });
        }
    } catch (err) {
        res.status(500).json({ error: "合并文件失败" });
    }
});

export default router;
