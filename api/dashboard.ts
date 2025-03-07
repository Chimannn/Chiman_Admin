import { VercelRequest, VercelResponse } from "@vercel/node";
import { faker } from "@faker-js/faker";

module.exports = async (req: VercelRequest, res: VercelResponse) => {
    const data = {
        users: Array.from({ length: 5 }, () => ({
            id: faker.string.uuid(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
        })),
    };
    res.status(200).json({
        code: 0,
        data: data,
    });
};
