import React, { useEffect } from "react";
import apiClient from "@/api/apiClient";
import { Row, Col, Space } from "antd";
import BannerCard from "./components/banner-card";
import { Conversion, Application } from "./components/second-banner-card";
import "./index.scss";
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

    return (
        <Row gutter={[16, 16]} justify="center">
            <Col span={24} lg={16}>
                <BannerCard />
            </Col>
            <Col span={24} lg={8} className="second-banner-card">
                <Space direction="vertical" size="small" className="space">
                    <Conversion />
                    <Application />
                </Space>
            </Col>
        </Row>
    );
};
export default Analysis;
