import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import Layout from "@/Layout/dashboard";
import { CircleLoading } from "@/components/loading";
import Permissions from "./tempPermissionJson";

const ENTRY_PATH = "/src/pages";
const PAGES = import.meta.glob("/src/pages/**/*.tsx");
const loadComponentFromPath = (path: string) => PAGES[`${ENTRY_PATH}${path}`];

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
        .map((item) => ({
            path: item.route,
            element:
                item.children && item.children.length > 0 ? (
                    <Outlet />
                ) : (
                    loadComponent(item.component || "")
                ),
            children: item.children ? generateRoutes(item.children) : undefined,
        }));
};

const addDefaultRoutes = (routes) => {
    return routes.map((item) => {
        const defaultRoute =
            item.children && item.children.length > 0
                ? {
                      index: true, // 使用 index 属性作为默认子路由
                      element: <Navigate to={item.children[0].path} replace />,
                  }
                : null;

        return {
            ...item,
            children: item.children
                ? [defaultRoute, ...addDefaultRoutes(item.children)].filter(
                      Boolean
                  )
                : undefined,
        };
    });
};
const subRoutes = generateRoutes(Permissions);

console.log(subRoutes);

console.log(addDefaultRoutes(subRoutes));

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to={"/dashboard/workbench"} replace />,
            },
            ...subRoutes,
        ],
    },
    {
        path: "*",
        element: <div>404 !</div>,
    },
];

const router = createBrowserRouter(routes);
export default router;
