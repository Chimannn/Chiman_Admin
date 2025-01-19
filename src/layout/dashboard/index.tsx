import React, { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    VideoCameraOutlined,
    HomeOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import Breadcrumb from "../components/bread-crumb";
import SliderLogo from "../components/slider-logo";

const { Header, Sider, Content } = Layout;
const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ height: "100%" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <SliderLogo />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={[
                        {
                            key: "1",
                            icon: <UserOutlined />,
                            label: "nav 1",
                        },
                        {
                            key: "2",
                            icon: <VideoCameraOutlined />,
                            label: "nav 2",
                        },
                        {
                            key: "3",
                            icon: <UploadOutlined />,
                            label: "nav 3",
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
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
                        type="text"
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
