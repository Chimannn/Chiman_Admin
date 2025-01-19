import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello World!</div>,
    },
    {
        path: "/login",
        element: <div>Login</div>,
    },
]);

export default router;
