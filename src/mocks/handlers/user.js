import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import { USER_LIST } from "../assets";

const init = http.get("/api/dashboard", () => {
    const data = {
        users: Array.from({ length: 5 }, () => ({
            id: faker.string.uuid(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
        })),
    };
    return HttpResponse.json({
        code: 0,
        data: data,
    });
});

const signIn = http.post("/api/auth/login", async ({ request }) => {
    const { username, password } = await request.json();

    const user = USER_LIST.find((user) => user.username == username);

    if (!user || user.password !== password) {
        return HttpResponse.json({
            code: -1,
            message: "Incorrect username or password.",
        });
    }

    return HttpResponse.json({
        code: 0,
        message: "success",
        data: {
            user,
            token: faker.string.uuid(),
        },
    });
});

export default [signIn, init];
