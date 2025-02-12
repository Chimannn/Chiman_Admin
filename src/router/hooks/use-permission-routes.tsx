import { generateRoutes } from "./index";
import { useMemo } from "react";

export const usePermissionRoutes = (permissions) => {
    return useMemo(() => {
        if (!permissions) return [];

        const routes = generateRoutes(permissions);
        return routes;
    }, [permissions]);
};
