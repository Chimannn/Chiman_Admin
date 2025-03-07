import { VercelRequest, VercelResponse } from "@vercel/node";

const uploads = new Map();

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { method, query, body } = req;

    switch (method) {
        case "POST":
            if (req.url?.includes("/api/upload/init")) {
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
                return res.status(200).send({
                    exist: false,
                    uploadId,
                });
            } else if (req.url?.match(/\/api\/upload\/[a-zA-Z0-9]+$/)) {
                const uploadId = query.uploadId;
                const formData = await body.formData();
                const index = parseInt(formData.get("index"));

                const upload = uploads.get(uploadId);
                if (!upload) {
                    return res.status(404).end();
                }

                upload.chunks.add(index);
                return res.status(200).end();
            } else if (req.url?.includes("/api/upload/complete")) {
                const { uploadId } = body;

                res.status(200).send({ url: `/files/${uploadId}` });
            }
            break;

        case "GET":
            if (req.url?.match(/\/api\/upload\/chunks\/[a-zA-Z0-9]+$/)) {
                const uploadId = query.uploadId;
                const upload = uploads.get(uploadId);
                return res.status(200).send(Array.from(upload?.chunks || []));
            }
            break;

        default:
            res.setHeader("Allow", ["POST", "GET"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
