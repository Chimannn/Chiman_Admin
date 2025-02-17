import { Row, Col, Typography } from "antd";
import Character_1 from "@/assets/images/characters/character_1.png";
import "../styles/banner-card.scss";

function BannerCard() {
    return (
        <Row gutter={[16, 16]} justify="space-between" className="Row_1">
            <Col span={24} md={12} xl={16} className="Col_1">
                <Typography.Title className="title">Hi, Welcome back!👋</Typography.Title>
            </Col>
            <Col span={24} md={12} xl={8} className="Col_2">
                <img src={Character_1} className="Character_1" />
            </Col>
        </Row>
    );
}

export default BannerCard;
