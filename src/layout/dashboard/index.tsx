import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { RightSquareTwoTone, LeftSquareTwoTone } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import { ErrorBoundary } from "react-error-boundary";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleCollapsed } from "@/store/collapsed/collapsedSlice";

import Breadcrumb from "../components/bread-crumb";
import Account from "../components/account";
import ThemeSwitchButton from "../components/theme-switch-button";
import SideMenu from "./sider-menu";
import generateMenuItems from "./sider-menu/component/hooks/useRenderMenuData";
import Permissions from "@/router/tempPermissionJson";
import { useResponsive } from "@/utils/responsive";

const { Header, Content } = Layout;
const App: React.FC = () => {
    const collapsed = useSelector((state: object) => state.collapsed.collapsed);
    const dispatch = useDispatch();
    const location = useLocation();
    const { isDesktop } = useResponsive();

    const menuData = generateMenuItems(Permissions, collapsed);

    const {
        token: { borderRadiusLG, colorBgLayout },
    } = theme.useToken();

    const clickCollapse = () => {
        dispatch(toggleCollapsed());
    };

    return (
        <Layout style={{ height: "100%" }}>
            <SideMenu className="the-Sider" menuData={menuData} collapsed={collapsed} />
            <Layout>
                <Header className="Header" style={{ background: colorBgLayout }}>
                    {isDesktop && (
                        <>
                            <Breadcrumb />
                            <Button
                                className="collapse-btn"
                                type="text"
                                icon={
                                    collapsed ? (
                                        <RightSquareTwoTone
                                            className="collapse-icon"
                                            twoToneColor="#9d93e6"
                                        />
                                    ) : (
                                        <LeftSquareTwoTone
                                            className="collapse-icon"
                                            twoToneColor="#9d93e6"
                                        />
                                    )
                                }
                                onClick={clickCollapse}
                            />
                        </>
                    )}
                    <div className="Header-right">
                        <ThemeSwitchButton />
                        <Account />
                    </div>
                </Header>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgLayout,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <ErrorBoundary fallback={<div>404 Not Found !!!</div>} resetKeys={[location]}>
                        <Outlet />
                    </ErrorBoundary>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
