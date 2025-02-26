import { Button, Col, Row, Switch, Typography } from "antd";
import "./index.scss";
import Card from "@/components/card";
import { toast } from "sonner";

export default function NotificationsTab() {
    const handleClick = () => {
        toast.error("Update success!");
    };
    return (
        <Card className="notifications">
            <Row gutter={[16, 16]}>
                <Col span={24} lg={8}>
                    <Typography.Title level={4}>Activity</Typography.Title>
                    <Typography.Text className="text1">
                        Donec mi odio, faucibus at, scelerisque quis
                    </Typography.Text>
                </Col>
                <Col span={24} lg={16} style={{ padding: 0 }}>
                    <div className="div1">
                        <div className="div2">
                            <div>Email me when someone answers on my form</div>
                            <Switch defaultChecked />
                        </div>
                        <div className="div2">
                            <div>Email me when someone comments onmy article</div>
                            <Switch />
                        </div>
                        <div className="div2">
                            <div>Email me hen someone follows me</div>
                            <Switch defaultChecked />
                        </div>
                    </div>
                </Col>

                <Col span={24} lg={8}>
                    <Typography.Title level={4}>Applications</Typography.Title>
                    <Typography.Text className="text1">
                        Donec mi odio, faucibus at, scelerisque quis
                    </Typography.Text>
                </Col>
                <Col span={24} lg={16} style={{ padding: 0 }}>
                    <div className="div1">
                        <div className="div2">
                            <div>News and announcements</div>
                            <Switch />
                        </div>
                        <div className="div2">
                            <div>Weekly product updates</div>
                            <Switch defaultChecked />
                        </div>
                        <div className="div2">
                            <div>Weekly blog digest</div>
                            <Switch />
                        </div>
                    </div>
                </Col>

                <div className="div3">
                    <Button type="primary" onClick={handleClick}>
                        Save Changes
                    </Button>
                </div>
            </Row>
        </Card>
    );
}
