import { VercelRequest, VercelResponse } from "@vercel/node";
import { uploads } from "./const";
module.exports = (req: VercelRequest, res: VercelResponse) => {
    const { fileName, fileHash } = req.body;

    if (uploads.has(fileHash)) {
        return res.status(200).send({
            exist: true,
            url: `/files/${fileHash}/${fileName}`,
        });
    }

    const uploadId = crypto.randomUUID();

    uploads.set(uploadId, {
        fileName,
        chunks: new Set(),
    });
    res.status(200).send({
        exist: false,
        uploadId,
    });
};
