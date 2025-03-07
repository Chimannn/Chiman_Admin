import { VercelRequest, VercelResponse } from "@vercel/node";
import { faker } from "@faker-js/faker";
export default function handler(req: VercelRequest, res: VercelResponse) {
    const { username, password } = req.query;
    const user = { username: "admin", password: "admin" };

    if (!user || user.username !== username || user.password !== password) {
        return res.status(200).json({
            code: -1,
            message: "Incorrect username or password.",
        });
    }
    res.status(200).send({
        code: 0,
        message: "success",
        data: {
            user,
            token: faker.string.uuid(),
        },
    });
}
