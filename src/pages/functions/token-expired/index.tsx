import { useMutation } from "@tanstack/react-query";
import demoService from "@/api/demoService";
import { Card, Row, Col, Button, Typography } from "antd";

export default function TokenExpired() {
    const tokenExpiredMutation = useMutation({
        mutationFn: demoService,
        onError: (error) => {
            console.log(error);
        },
        onSuccess: (data) => {
            console.log(data);
        },
    });

    const handleTokenExpired = () => {
        tokenExpiredMutation.mutate();
    };
    return (
        <Card>
            <Row gutter={[16, 16]}>
                <Col span={24} md={12}>
                    <Typography.Text>
                        Clicking a button to simulate a token expiration scenario.
                    </Typography.Text>
                </Col>
                <Col span={24} md={12}>
                    <Button type="primary" onClick={handleTokenExpired}>
                        Simulate Token Expired
                    </Button>
                </Col>
            </Row>
        </Card>
    );
}
