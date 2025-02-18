import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth/authSlice";
import { Avatar, Dropdown, Space, Divider } from "antd";
import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import useTheme from "@/theme/use-theme";

export default function Account() {
    const dispatch = useDispatch();
    const { themeStyles } = useTheme();
    const handleLogout = () => {
        dispatch(logout());
    };

    const contentStyle: React.CSSProperties = {
        color: themeStyles.color,
        backgroundColor: themeStyles.backgroundColor,
        borderRadius: "16px",
        boxShadow: themeStyles.account.boxShadow,
    };

    const menuStyle: React.CSSProperties = {
        boxShadow: "none",
        backgroundColor: themeStyles.backgroundColor,
    };

    const dropdownRender: DropdownProps["dropdownRender"] = (menu) => (
        <div style={contentStyle}>
            <div
                style={{
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div>Admin</div>
                <div>mrchimanchan@gmail.com</div>
            </div>
            <Divider style={{ margin: 0 }} />
            {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
        </div>
    );

    const items: MenuProps["items"] = [
        {
            key: "1",
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    1st menu item
                </a>
            ),
        },
        {
            key: "2",
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
            ),
        },
        { type: "divider" },
        {
            key: "3",
            label: <span style={{ color: "red" }}>LogOut</span>,
            onClick: handleLogout,
        },
    ];
    return (
        <Dropdown menu={{ items }} trigger={["click"]} dropdownRender={dropdownRender}>
            <Space>
                <Avatar style={{ marginLeft: "10px" }} icon={<UserOutlined />} />
            </Space>
        </Dropdown>
    );
}
