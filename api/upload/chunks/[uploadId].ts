import { VercelRequest, VercelResponse } from "@vercel/node";
import { uploads } from "./const";
module.exports = (req: VercelRequest, res: VercelResponse) => {
    const { uploadId } = req.body;
    const upload = uploads.get(uploadId);

    res.status(200).send(Array.from(upload.chunks));
};
