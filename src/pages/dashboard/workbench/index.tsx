import React, { useEffect } from "react";
import apiClient from "@/api/apiClient";
import { Typography } from "antd";

const Analysis = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiClient.get({ url: "/dashboard" });
                console.log("init接口成功返回：", response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return <Typography.Title>Hi, Welcome back!👋</Typography.Title>;
};
export default Analysis;
