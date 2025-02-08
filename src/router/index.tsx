import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import Layout from "@/Layout/dashboard";
import { CircleLoading } from "@/components/loading";
import Permissions from "./tempPermissionJson";
import type { AppRouteObject } from "@/types/router";
import { ErrorBoundary } from "react-error-boundary";
import PageError from "@/pages/system/error/PageError";
import Page404 from "@/pages/system/error/Page404";
import Login from "@/pages/system/login/Login";

const ENTRY_PATH = "/src/pages";
const PAGES = import.meta.glob("/src/pages/**/*.tsx");
const loadComponentFromPath = (path: string) => PAGES[`${ENTRY_PATH}${path}`];

const PUBLIC_ROUTE: AppRouteObject = {
    path: "/login",
    element: (
        <ErrorBoundary FallbackComponent={PageError}>
            <Login />
        </ErrorBoundary>
    ),
};

const NO_MATCHED_ROUTE: AppRouteObject = {
    path: "*",
    element: <Page404 />,
};

// 动态加载组件
const loadComponent = (componentPath: string) => {
    try {
        const Component = lazy(loadComponentFromPath(componentPath));

        return (
            <Suspense fallback={<CircleLoading />}>
                <Component />
            </Suspense>
        );
    } catch (error) {
        console.error(`Component ${componentPath} not found`, error);
        return () => <div>404 Not Found!</div>;
    }
};

const generateRoutes = (menuData) => {
    return menuData
        .filter((item) => !item.hide) // 过滤掉隐藏的路由
        .map((item) => {
            const defaultRoute =
                item.children && item.children.length > 0
                    ? {
                          index: true,
                          element: (
                              <Navigate to={item.children[0].route} replace />
                          ),
                      }
                    : null;

            return {
                path: item.route,
                name: item.name,
                icon: item.icon,
                hide: item.hide || false,
                element:
                    item.children && item.children.length > 0 ? (
                        <Outlet />
                    ) : (
                        loadComponent(item.component || "")
                    ),
                children:
                    item.children && item.children.length > 0
                        ? [defaultRoute, ...generateRoutes(item.children)]
                        : undefined,
            };
        });
};
const subRoutes = generateRoutes(Permissions);

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to={"/dashboard"} replace />,
            },
            ...subRoutes,
        ],
    },
    PUBLIC_ROUTE,
    NO_MATCHED_ROUTE,
];

const router = createBrowserRouter(routes);
export { subRoutes };
export default router;
