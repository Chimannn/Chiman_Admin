import { VercelRequest, VercelResponse } from "@vercel/node";
import { faker } from "@faker-js/faker";

export default function handler(req: VercelRequest, res: VercelResponse) {
    const data = {
        users: Array.from({ length: 5 }, () => ({
            id: faker.string.uuid(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
        })),
    };
    // 返回模拟数据
    return res.status(200).json({
        code: 0,
        data: data,
    });
}
