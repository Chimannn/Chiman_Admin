import { VercelRequest, VercelResponse } from "@vercel/node";
import { faker } from "@faker-js/faker";

module.exports = (req: VercelRequest, res: VercelResponse) => {
    const { username, password } = req.body;
    const DEFAULT_USER = {
        username: "admin",
        password: "admin",
    };

    if (DEFAULT_USER.username !== username || DEFAULT_USER.password !== password) {
        res.status(200).json({
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
};
