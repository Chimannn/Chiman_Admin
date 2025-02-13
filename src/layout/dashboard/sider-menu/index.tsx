import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useMatches, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout, Menu } from "antd";
import "./index.scss";
import SideLogo from "./component/side-logo";

const { Sider } = Layout;
const SideMenu: React.FC = ({ menuData, collapsed }) => {
    const [openKeys, setOpenKeys] = useState<string[]>(["dashboard"]);
    const currentTheme = useSelector((state) => state.theme.current);

    const navigate = useNavigate();
    const matches = useMatches();
    const location = useLocation();
    const pathname = location.pathname;
    const selectedKeys = useMemo(() => [pathname], [pathname]);

    useEffect(() => {
        if (!collapsed) {
            const keys = matches
                .filter((match) => match.pathname !== "/" && match.pathname !== location.pathname)
                .map((match) => match.pathname);
            setOpenKeys(keys);
        }
    }, [collapsed, matches, location]);

    const onClick = (e) => {
        navigate(e.key);
    };
    const handleOpenChange = (keys) => {
        setOpenKeys(keys);
    };

    return (
        <Sider
            theme={currentTheme}
            collapsedWidth={80}
            width={260}
            trigger={null}
            collapsible
            collapsed={collapsed}
        >
            <SideLogo collapsed={collapsed} />
            <Menu
                theme={currentTheme}
                mode="inline"
                onClick={onClick}
                items={menuData}
                selectedKeys={selectedKeys}
                openKeys={openKeys}
                onOpenChange={handleOpenChange}
            />
        </Sider>
    );
};

export default SideMenu;
