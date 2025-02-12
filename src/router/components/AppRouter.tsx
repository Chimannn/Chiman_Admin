import React from "react";
import { useSelector } from "react-redux";
import { createBrowserRouter, Navigate, RouterProvider, Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Layout from "@/Layout/dashboard";
import type { AppRouteObject } from "@/types/router";
import PageError from "@/pages/system/error/PageError";
import Page404 from "@/pages/system/error/Page404";
import Login from "@/pages/system/login/Login";
import ProtectedRoute from "./protectedRoute";
import { usePermissionRoutes, useNProgressOnRouteChange } from "../hooks";

const RootListener = () => {
    useNProgressOnRouteChange();
    return <Outlet />;
};

export const AppRouter = () => {
    const user = useSelector((state) => state.auth.user);
    const dynamicRoutes = usePermissionRoutes(user?.permissions || null);

    const PUBLIC_ROUTE: AppRouteObject = {
        path: "/login",
        element: (
            <ErrorBoundary FallbackComponent={PageError}>
                <Login />
            </ErrorBoundary>
        ),
    };

    const ERROR_PAGE_ROUTE: AppRouteObject = {
        path: "*",
        element: <Page404 />,
    };

    const PROTECTED_ROUTE: AppRouteObject = {
        path: "/",
        element: (
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <Navigate to={"/dashboard"} replace /> },
            ...dynamicRoutes,
        ],
    };

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <RootListener />, // 使用 RootListener 作为根路由的 element
            children: [PUBLIC_ROUTE, PROTECTED_ROUTE, ERROR_PAGE_ROUTE],
        },
    ]);

    return <RouterProvider router={routes} />;
};
