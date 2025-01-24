import Icon from "@/layout/dashboard/sider-menu/component/Icon";

// 递归生成菜单项
const generateMenuItems = (menuData, collapsed) => {
    return menuData
        .filter((item) => !item.hide) // 过滤掉隐藏的菜单项
        .map((item) => ({
            key: item.route,
            label: (
                <>
                    {item.icon && <Icon icon={item.icon} />}{" "}
                    {!collapsed && item.name}
                </>
            ),
            children: item.children
                ? generateMenuItems(item.children, collapsed)
                : undefined,
        }));
};

export default generateMenuItems;
