import { useState, type ChangeEvent } from "react";
import { Card, Row, Col, Typography, Input, Tooltip } from "antd";
import Iconify from "@/components/icon/iconify";
import { faker } from "@faker-js/faker";
import "./index.scss";

import useCopyToClipboard from "./use-copy-fn";

export default function ClipboardPage() {
    const [input, setInput] = useState("Hello, my friend!");
    const textOnClick = faker.lorem.paragraphs({ min: 3, max: 5 });
    const { copyFn } = useCopyToClipboard();
    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const CopyButton = (
        <Tooltip title="Copy">
            <button className="clipboard-btn" onClick={() => copyFn(input)}>
                <Iconify icon="eva:copy-fill" size={20} />
            </button>
        </Tooltip>
    );
    return (
        <Card className="clipboard-page">
            <Row gutter={[16, 16]}>
                <Col span={24} md={12}>
                    <Typography.Title level={5}>ON CHANGE</Typography.Title>
                    <Input suffix={CopyButton} value={input} onChange={inputChange} />
                </Col>
                <Col span={24} md={12}>
                    <Typography.Title level={5}>ON DOUBLE CLICK</Typography.Title>
                    <Typography onDoubleClick={() => copyFn(textOnClick)}>{textOnClick}</Typography>
                </Col>
            </Row>
        </Card>
    );
}
