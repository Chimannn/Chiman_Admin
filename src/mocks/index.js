import { setupWorker } from "msw/browser";
import userApi from "./handlers/user";
import demoApi from "./handlers/demo";
import uploadFileApi from "./handlers/uploadFile";

const worker = setupWorker(...userApi, ...demoApi, ...uploadFileApi);

export default worker;
