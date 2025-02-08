import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";

export const handlers = [
    http.get("https://example.com/user", () => {
        return HttpResponse.json({
            id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
            firstName: "Chiman",
            lastName: "Chan",
        });
    }),
    http.get("/api/dashboard", () => {
        const data = {
            users: Array.from({ length: 5 }, () => ({
                id: faker.string.uuid(),
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                email: faker.internet.email(),
            })),
        };
        return HttpResponse.json({
            status: 0,
            data: data,
        });
    }),
    http.post("/api/auth/login", async ({ request }) => {
        const req = await request.json();
        const { username, password } = req;

        if (username === "admin" && password === "admin") {
            const data = {
                message: "success",
                username: username,
                token: faker.string.uuid(),
            };
            return HttpResponse.json({
                status: 0,
                data: data,
            });
        } else {
            return HttpResponse.json({
                status: 0,
                data: { message: "Invalid username or password" },
            });
        }
    }),
];
