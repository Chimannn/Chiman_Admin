import React, { useEffect } from "react";
import apiClient from "@/api/apiClient";
import { Row, Col, Space } from "antd";

import BannerCard from "./components/banner-card";
import { Conversion, Application } from "./components/second-banner-card";
import TotalCard from "./components/total-card";
import CurrentDownload from "./components/current-download";
import AreaDownload from "./components/area-download";
import NewInvoice from "./components/new-invoice";
import TopRelated from "./components/top-related";
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
        <>
            <Row gutter={[16, 16]} justify="center">
                <Col span={24} lg={16} className="banner-card">
                    <BannerCard />
                </Col>
                <Col span={24} lg={8} className="second-banner-card">
                    <Space direction="vertical" size="small" className="space">
                        <Conversion />
                        <Application />
                    </Space>
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="Row2" justify="center">
                <Col span={24} md={8}>
                    <TotalCard
                        title="Total Active Users"
                        increase
                        count="18,765"
                        percent="2.6%"
                        chartData={[22, 8, 35, 50, 82, 84, 77, 12, 87]}
                    />
                </Col>
                <Col span={24} md={8}>
                    <TotalCard
                        title="Total Installed"
                        increase
                        count="4,876"
                        percent="0.2%"
                        chartData={[45, 52, 38, 24, 33, 26, 21, 20, 6]}
                    />
                </Col>
                <Col span={24} md={8}>
                    <TotalCard
                        title="Total Downloads"
                        increase={false}
                        count="678"
                        percent="0.1%"
                        chartData={[35, 41, 62, 42, 13, 18, 29, 37, 36]}
                    />
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="Row3" justify="center">
                <Col span={24} md={12} lg={8}>
                    <CurrentDownload />
                </Col>
                <Col span={24} md={12} lg={16}>
                    <AreaDownload />
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="Row4" justify="center">
                <Col span={24} md={12} lg={16}>
                    <NewInvoice />
                </Col>
                <Col span={24} md={12} lg={8}>
                    <TopRelated />
                </Col>
            </Row>
        </>
    );
};
export default Analysis;
