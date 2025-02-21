import glass_bag from "@/assets/images/glass/ic_glass_bag.png";
import glass_buy from "@/assets/images/glass/ic_glass_buy.png";
import glass_message from "@/assets/images/glass/ic_glass_message.png";
import glass_users from "@/assets/images/glass/ic_glass_users.png";
import { Row, Col, Typography } from "antd";
import useTheme from "@/theme/use-theme";

import BaseCard from "./components/AnalysisBaseCard";
import Iconify from "@/components/icon/iconify";

import AnalysisCard from "./components/analysis-card";
import ChartMixed from "@/pages/components/charts/chart-mixed";
import ChartPie from "@/pages/components/charts/chart-pie";
import ChartBar from "@/pages/components/charts/chart-bar";
import ChartRadar from "@/pages/components/charts/chart-radar";
import AnalysisTrafficCard from "@/pages/components/charts/analysis-traffic-card";
import AnalysisTasks from "@/pages/components/charts/analysis-tasks";
import "./index.scss";
const Analysis = () => {
    const { themeStyles } = useTheme();
    return (
        <>
            <Typography.Title level={2}>Hi, Welcome back 👋</Typography.Title>

            <Row gutter={[16, 16]} justify="center">
                <Col lg={6} md={12} span={24}>
                    <AnalysisCard
                        cover={glass_bag}
                        title="714k"
                        subtitle="Weekly Sales"
                        style={{
                            color: themeStyles.analysisCard.success.color,
                            backgroundColor: themeStyles.analysisCard.success.backgroundColor,
                        }}
                    />
                </Col>
                <Col lg={6} md={12} span={24}>
                    <AnalysisCard
                        cover={glass_users}
                        title="1.35m"
                        subtitle="New Users"
                        style={{
                            color: themeStyles.analysisCard.info.color,
                            backgroundColor: themeStyles.analysisCard.info.backgroundColor,
                        }}
                    />
                </Col>
                <Col lg={6} md={12} span={24}>
                    <AnalysisCard
                        cover={glass_buy}
                        title="1.72m"
                        subtitle="New Orders"
                        style={{
                            color: themeStyles.analysisCard.warning.color,
                            backgroundColor: themeStyles.analysisCard.warning.backgroundColor,
                        }}
                    />
                </Col>
                <Col lg={6} md={12} span={24}>
                    <AnalysisCard
                        cover={glass_message}
                        title="234"
                        subtitle="Bug Reports"
                        style={{
                            color: themeStyles.analysisCard.error.color,
                            backgroundColor: themeStyles.analysisCard.error.backgroundColor,
                        }}
                    />
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="Row2" justify="center">
                <Col span={24} lg={12} xl={16}>
                    <BaseCard title="Website Visits">
                        <ChartMixed />
                    </BaseCard>
                </Col>
                <Col span={24} lg={12} xl={8}>
                    <BaseCard title="Current Visits" style={{ height: "100%" }}>
                        <ChartPie />
                    </BaseCard>
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="Row3" justify="center">
                <Col span={24} lg={12} xl={16}>
                    <BaseCard title="Conversion Rates">
                        <ChartBar />
                    </BaseCard>
                </Col>
                <Col span={24} lg={12} xl={8}>
                    <BaseCard title="Current Subject">
                        <ChartRadar />
                    </BaseCard>
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="Row4">
                <Col span={24} lg={12} xl={8}>
                    <BaseCard title="Traffic by Site" style={{ height: "100%" }}>
                        <Row gutter={[16, 16]} className="Row4-1">
                            <Col span={12}>
                                <BaseCard className="TrafficCardItem">
                                    <AnalysisTrafficCard
                                        icon={
                                            <Iconify
                                                icon="bxl:facebook"
                                                size={32}
                                                color="#1877f2"
                                            />
                                        }
                                        title="1.95k"
                                        subtitle="FaceBook"
                                    />
                                </BaseCard>
                            </Col>
                            <Col span={12}>
                                <BaseCard className="TrafficCardItem">
                                    <AnalysisTrafficCard
                                        icon={
                                            <Iconify
                                                icon="ant-design:google-outlined"
                                                size={32}
                                                color="#df3e30"
                                            />
                                        }
                                        title="9.12k"
                                        subtitle="Google"
                                    />
                                </BaseCard>
                            </Col>
                            <Col span={12}>
                                <BaseCard className="TrafficCardItem">
                                    <AnalysisTrafficCard
                                        icon={
                                            <Iconify
                                                icon="eva:linkedin-fill"
                                                size={32}
                                                color="#006097"
                                            />
                                        }
                                        title="6.98k"
                                        subtitle="Linkedin"
                                    />
                                </BaseCard>
                            </Col>
                            <Col span={12}>
                                <BaseCard className="TrafficCardItem">
                                    <AnalysisTrafficCard
                                        icon={
                                            <Iconify
                                                icon="eva:twitter-fill"
                                                size={32}
                                                color="#1c9cea"
                                            />
                                        }
                                        title="8.49k"
                                        subtitle="Twitter"
                                    />
                                </BaseCard>
                            </Col>
                        </Row>
                    </BaseCard>
                </Col>

                <Col span={24} lg={12} xl={16}>
                    <BaseCard title="Tasks">
                        <AnalysisTasks />
                    </BaseCard>
                </Col>
            </Row>
        </>
    );
};
export default Analysis;
