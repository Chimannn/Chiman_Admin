import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
    RightSquareTwoTone,
    LeftSquareTwoTone,
    HomeOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import Breadcrumb from "../components/bread-crumb";
import "./index.scss";
import SideMenu from "./sider-menu";
import { menuData } from "@/router";

const { Header, Content } = Layout;
const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ height: "100%" }}>
            <SideMenu menuData={menuData} collapsed={collapsed} />
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
