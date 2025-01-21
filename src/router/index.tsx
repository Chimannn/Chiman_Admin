import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import Layout from "../Layout/dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "dashboard",
                element: (
                    <div>
                        Home <Outlet />
                    </div>
                ),
                children: [
                    {
                        index: true,
                        element: <Navigate to="workbench" replace />,
                    },
                    {
                        path: "workbench",
                        element: <div>workbench</div>,
                    },
                    {
                        path: "analysis",
                        element: <div>analysis</div>,
                    },
                ],
            },
        ],
    },
    {
        path: "/login",
        element: <div>Login</div>,
    },
]);

export default router;
