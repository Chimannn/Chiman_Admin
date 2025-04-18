import { Row, Col, Typography } from "antd";
import Character_1 from "@/assets/images/characters/character_1.png";
import "../styles/banner-card.scss";
import Card from "@/components/card";
import useTheme from "@/theme/use-theme";
function BannerCard() {
    const { themeStyles } = useTheme();
    return (
        <>
            <Card style={{ padding: 0, borderRadius: themeStyles.baseTheme.borderRadius.xl }}>
                <Row gutter={[16, 16]} justify="space-between" className="BannerCard-Row_1">
                    <Col span={24} md={12} xl={16} className="Col_1">
                        <Typography.Title className="title">Hi, Welcome back!👋</Typography.Title>
                    </Col>
                    <Col span={24} md={12} xl={8} className="Col_2">
                        <img src={Character_1} className="Character_1" />
                    </Col>
                </Row>
            </Card>
        </>
    );
}

export default BannerCard;
