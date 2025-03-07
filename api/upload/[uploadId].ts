import { VercelRequest, VercelResponse } from "@vercel/node";
import { uploads } from "./const";
module.exports = (req: VercelRequest, res: VercelResponse) => {
    const { uploadId } = req.body;
    const formData = await req.formData();
    const index = parseInt(formData.get("index"));

    const upload = uploads.get(uploadId);
    if (!upload) {
        res.status(404).end();
    }

    upload.chunks.add(index);
    res.status(200).end();
};
