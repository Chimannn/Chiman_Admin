import { Row, Col } from "antd";
import Card from "@/components/card";
import { FileUploader } from "@/components/upload";

export default function UploadPage() {
    return (
        <Card style={{ justifyContent: "center" }}>
            <Row>
                <Col>
                    <FileUploader />
                </Col>
            </Row>
        </Card>
    );
}
