import { setupWorker } from "msw/browser";
import userApi from "./handlers/user";
import demoApi from "./handlers/demo";

const worker = setupWorker(...userApi, ...demoApi);

export default worker;
