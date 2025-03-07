import { useSelector } from "react-redux";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import { generateRoutes } from "@/router/hooks";

const BreadCrumb = () => {
    const location = useLocation();
    const user = useSelector((state: any) => state.auth.user);
    const permissions = user?.permissions || [];
    const breadcrumbs = generateBreadcrumbs(location.pathname, permissions);
    return (
        <Breadcrumb
            items={[
                {
                    title: (
                        <Link to={"/"}>
                            <HomeOutlined />
                        </Link>
                    ),
                },
                ...breadcrumbs,
            ]}
        />
    );
};

const generateBreadcrumbs = (pathname: string, permissions: array) => {
    const routerMap = generateRoutes(permissions);
    const paths = pathname.split("/").filter((path) => path !== "");
    let currentPath = "";
    return paths.map((path) => {
        currentPath += `/${path}`;
        const breadcrumb = findRouteItem(routerMap, currentPath);

        const b = {
            path: currentPath,
            breadcrumbName: breadcrumb
                ? breadcrumb.name
                : path.charAt(0).toUpperCase() + path.slice(1),
        };
        return {
            title: <Link to={b.path}>{b.breadcrumbName}</Link>,
        };
    });
};

const findRouteItem = (routes: [], path: string) => {
    //递归遍历找到对应的route
    for (const route of routes) {
        if (route.path === path) {
            return route;
        }
        if (route.children && route.children.length > 0) {
            const foundIt = findRouteItem(route.children, path);
            if (foundIt) {
                return foundIt;
            }
        }
    }
    return null;
};

export default BreadCrumb;
