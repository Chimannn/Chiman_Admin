import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import worker from "./mocks";

createRoot(document.getElementById("root")!).render(<App />);

if (process.env.NODE_ENV === "development") {
    worker.start({
        onUnhandledRequest: "bypass",
    });
}
