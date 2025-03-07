import { VercelRequest, VercelResponse } from "@vercel/node";
import { faker } from "@faker-js/faker";
import { USER_LIST } from "../mock";

module.exports = (req: VercelRequest, res: VercelResponse) => {
    const { username, password } = req.body;
    const user = USER_LIST.find((user) => user.username == username);

    if (!user || user.password !== password) {
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
