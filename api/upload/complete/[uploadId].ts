import { VercelRequest, VercelResponse } from "@vercel/node";
module.exports = (req: VercelRequest, res: VercelResponse) => {
    const { uploadId } = req.body;

    res.status(200).send({ url: `/files/${uploadId}` });
};
