import React, { useState, useEffect } from "react";
import { useNavigate, useMatches, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./index.scss";
import SideLogo from "./component/side-logo";

const { Sider } = Layout;
const SideMenu: React.FC = ({ menuData, collapsed }) => {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([
        "/dashboard/workbench",
    ]);
    const [openKeys, setOpenKeys] = useState<string[]>(["dashboard"]);
    const navigate = useNavigate();
    const matches = useMatches();
    const location = useLocation();

    useEffect(() => {
        if (!collapsed) {
            const keys = matches
                .filter(
                    (match) =>
                        match.pathname !== "/" &&
                        match.pathname !== location.pathname
                )
                .map((match) => match.pathname);
            setOpenKeys(keys);
        }
    }, [collapsed, matches, location]);

    const onClick = (e) => {
        setSelectedKeys([e.key]);
        navigate(e.key);
    };
    const handleOpenChange = (keys) => {
        setOpenKeys(keys);
    };

    return (
        <Sider width={260} trigger={null} collapsible collapsed={collapsed}>
            <SideLogo collapsed={collapsed} />
            <Menu
                theme="dark"
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
