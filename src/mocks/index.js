import { setupWorker } from "msw/browser";
import userApi from "./handlers/user";

const worker = setupWorker(...userApi);

export default worker;
