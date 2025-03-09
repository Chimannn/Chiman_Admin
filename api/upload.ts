import { VercelRequest, VercelResponse } from "@vercel/node";
// import Busboy from "busboy";

const uploads = new Map();

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { method, query, body } = req;

    switch (query.type) {
        case "init": {
            const { fileName, fileHash } = req.body;

            if (uploads.has(fileHash)) {
                res.status(200).send({
                    exist: true,
                    url: `/files/${fileHash}/${fileName}`,
                });
            }
            const uploadId = crypto.randomUUID();

            uploads.set(uploadId, {
                fileName,
                chunks: new Set(),
            });

            console.log("uploads:", uploads);

            res.status(200).send({
                exist: false,
                uploadId,
            });
            break;
        }
        case "upload": {
            // const busboy = Busboy({ headers: req.headers });
            // const uploadId = query.uploadId;
            // const index = query.index;
            // vercel funcions 无法持久化存储，这里虚拟返回
            // const upload = uploads.get(uploadId);
            // if (!upload) {
            //     res.status(404).end();
            // }

            // upload.chunks.add(index);
            res.status(200).send({
                success: true,
            });
            // req.pipe(busboy);
            break;
        }
        case "complete": {
            const { uploadId } = body;

            res.status(200).send({ url: `/files/${uploadId}` });
            break;
        }
        case "chunks": {
            const uploadId = query.uploadId;
            const upload = uploads.get(uploadId);
            res.status(200).send(Array.from(upload?.chunks || []));
            break;
        }

        default:
            res.setHeader("Allow", ["POST", "GET"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
