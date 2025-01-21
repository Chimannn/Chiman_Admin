import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
    RightSquareTwoTone,
    LeftSquareTwoTone,
    SettingOutlined,
    HomeOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Breadcrumb from "../components/bread-crumb";
import SideLogo from "../components/side-logo";
import "./index.scss";
import { MenuItem } from "/types/sider";

const { Header, Sider, Content } = Layout;
const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [menuData, setMenuData] = useState<MenuItem[]>([]);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const mockData: MenuItem[] = [
        {
            key: "1",
            label: "Dashboard",
            path: "/dashboard",
            icon: <HomeOutlined />,
            children: [
                {
                    key: "1-1",
                    label: "Workbench",
                    path: "/dashboard/workbench",
                },
                { key: "1-2", label: "Analysis", path: "/dashboard/analysis" },
            ],
        },
        {
            key: "2",
            label: "Settings",
            path: "/settings",
            icon: <SettingOutlined />,
            children: [
                { key: "2-1", label: "Profile", path: "/settings/profile" },
                { key: "2-2", label: "Security", path: "/settings/security" },
            ],
        },
    ];

    useEffect(() => {
        setMenuData(mockData);
    }, []);

    return (
        <Layout style={{ height: "100%" }}>
            <Sider width={260} trigger={null} collapsible collapsed={collapsed}>
                <SideLogo collapsed={collapsed} />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1-1"]}
                    defaultOpenKeys={["1"]}
                    items={menuData}
                />
            </Sider>
            <Layout>
                <Header
                    className="Header"
                    style={{ background: colorBgContainer }}
                >
                    <Breadcrumb
                        items={[
                            {
                                href: "",
                                title: <HomeOutlined />,
                            },
                            {
                                href: "",
                                title: (
                                    <>
                                        <UserOutlined />
                                        <span>Application List</span>
                                    </>
                                ),
                            },
                            {
                                title: "Application",
                            },
                        ]}
                    />
                    <Button
                        className="collapse-btn"
                        type="text"
                        icon={
                            collapsed ? (
                                <RightSquareTwoTone
                                    className="collapse-icon"
                                    twoToneColor="#5ac6f7"
                                />
                            ) : (
                                <LeftSquareTwoTone
                                    className="collapse-icon"
                                    twoToneColor="#5ac6f7"
                                />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                    />
                </Header>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
