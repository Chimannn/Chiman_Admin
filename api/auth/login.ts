import { VercelRequest, VercelResponse } from "@vercel/node";
import { faker } from "@faker-js/faker";

module.exports = (req: VercelRequest, res: VercelResponse) => {
    const { username, password } = req.body;
    const DEFAULT_USER = {
        id: "b34719e1-ce46-457e-9575-99505ecee828",
        username: "admin",
        email: faker.internet.email(),
        avatar: faker.image.avatarGitHub(),
        createdAt: faker.date.anytime(),
        updatedAt: faker.date.recent(),
        password: "admin",
        role: ADMIN_ROLE,
        permissions: ADMIN_ROLE.permission,
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
