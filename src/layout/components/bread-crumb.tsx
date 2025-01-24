import React from "react";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
const breadCrumb = () => (
    <Breadcrumb
        items={[
            {
                href: "/",
                title: <HomeOutlined />,
            },
            {
                href: "/dashboard",
                title: (
                    <>
                        <UserOutlined />
                        <span>Dashboard</span>
                    </>
                ),
            },
            {
                href: "/dashboard/workbench",
                title: "Workbench",
            },
        ]}
    />
);
export default breadCrumb;
