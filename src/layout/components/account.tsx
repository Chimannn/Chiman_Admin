import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/store/auth/authSlice";
import { Avatar, Dropdown, Space, Divider } from "antd";
import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

export default function Account() {
    const dispatch = useDispatch();
    const theme = useSelector((state: any) => state.theme.current);
    const handleLogout = () => {
        dispatch(logout());
    };

    const contentStyle: React.CSSProperties = {
        color: theme === "dark" ? "#fff" : "#000",
        backgroundColor: theme === "dark" ? "#161c24" : "#fff",
        borderRadius: "16px",
        boxShadow: `0 12px 24px 0 ${theme === "dark" ? "rgb(40 40 41)" : "#919EAB"}`,
    };

    const menuStyle: React.CSSProperties = {
        boxShadow: "none",
        backgroundColor: theme === "dark" ? "#161c24" : "#fff",
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
