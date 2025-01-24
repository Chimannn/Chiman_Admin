import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
    RightSquareTwoTone,
    LeftSquareTwoTone,
    HomeOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import { ErrorBoundary } from "react-error-boundary";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleCollapsed } from "@/store/collapsed/collapsedSlice";

import Breadcrumb from "../components/bread-crumb";
import SideMenu from "./sider-menu";
import generateMenuItems from "./sider-menu/component/hooks/useRenderMenuData";
import Permissions from "@/router/tempPermissionJson";

const { Header, Content } = Layout;
const App: React.FC = () => {
    const collapsed = useSelector((state: object) => state.collapsed.collapsed);
    const dispatch = useDispatch();
    const location = useLocation();

    const menuData = generateMenuItems(Permissions, collapsed);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const clickCollapse = () => {
        dispatch(toggleCollapsed());
    };

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
                        onClick={clickCollapse}
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
                    <ErrorBoundary
                        fallback={<div>404 Not Found !!!</div>}
                        resetKeys={[location]}
                    >
                        <Outlet />
                    </ErrorBoundary>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
