import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
    },
    {
        path: "/login",
        element: <div>Login</div>,
    },
]);

export default router;
