import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Link, Navigate, Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Icon from "@/layout/dashboard/sider-menu/component/Icon";
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
            <ErrorBoundary fallback={<div>404 Not Found!</div>}>
                <Suspense fallback={<CircleLoading />}>
                    <Component />
                </Suspense>
            </ErrorBoundary>
        );
    } catch (error) {
        console.error(`Component ${componentPath} not found`, error);
        return () => <div>404 Not Found!</div>;
    }
};

// 递归生成菜单项
const generateMenuItems = (menuData) => {
    return menuData
        .filter((item) => !item.hide) // 过滤掉隐藏的菜单项
        .map((item) => ({
            key: item.route,
            label: (
                <Link to={item.route}>
                    {item.icon && <Icon icon={item.icon} />} {item.name}
                </Link>
            ),
            children: item.children
                ? generateMenuItems(item.children)
                : undefined,
        }));
};

const generateRoutes = (menuData) => {
    return menuData
        .filter((item) => !item.hide) // 过滤掉隐藏的路由
        .map((item) => ({
            path: item.route,
            element: !item.parentId ? (
                <Outlet />
            ) : (
                loadComponent(item.component || "")
            ),
            children: item.children ? generateRoutes(item.children) : undefined,
        }));
};

const subRoutes = generateRoutes(Permissions);

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
const menuData = generateMenuItems(Permissions);
export default router;
export { menuData };
