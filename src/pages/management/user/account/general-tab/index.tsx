import React, { useState } from "react";
import Card from "@/components/card";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Row, Col, message, Upload, Space, Switch, Button, Form, Input } from "antd";
import type { GetProp, UploadProps } from "antd";
import useTheme from "@/theme/use-theme";
import { useSelector } from "react-redux";
import { faker } from "@faker-js/faker";

import "./index.scss";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
};
const GeneralTab = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const { theme, themeStyles } = useTheme();
    const { username, email } = useSelector((state) => state.auth.user);

    const initFormValues = {
        name: username,
        email,
        phone: faker.phone.number(),
        address: faker.location.county(),
        city: faker.location.city(),
        code: faker.location.zipCode(),
        about: faker.lorem.paragraphs(),
    };
    const handleChange: UploadProps["onChange"] = (info) => {
        if (info.file.status === "uploading") {
            setLoading(true);
            return;
        }
        if (info.file.status === "done") {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as FileType, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <button
            style={{ border: 0, background: "none", cursor: "pointer", color: themeStyles.color }}
            type="button"
        >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>{"Upload"}</div>
        </button>
    );

    const handleClick = () => {
        message.success("Update success!");
    };

    return (
        <Row gutter={[16.16]}>
            <Col span={24} lg={8}>
                <Card className="upload-card">
                    <Upload
                        name="avatar"
                        listType="picture-circle"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                    >
                        {imageUrl ? (
                            <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                        ) : (
                            uploadButton
                        )}
                    </Upload>
                    <Space
                        className="tips"
                        style={{
                            color:
                                theme === "dark"
                                    ? "rgba(255, 255, 255, 0.45)"
                                    : "rgba(0, 0, 0, 0.45)",
                        }}
                    >
                        Allowed *.jpeg, *.jpg, *.png, *.gif max size of 2 MB
                    </Space>
                    <Space className="switch">
                        <div>Public Profile</div>
                        <Switch size="small" />
                    </Space>
                    <Button style={{ boxShadow: "none" }} type="primary" danger>
                        Delete User
                    </Button>
                </Card>
            </Col>
            <Col span={24} lg={16}>
                <Card>
                    <Form
                        layout="vertical"
                        initialValues={initFormValues}
                        labelCol={{ span: 8 }}
                        style={{ width: "100%" }}
                    >
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item<FieldType> label="Username" name="name">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item<FieldType> label="Email" name="email">
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item<FieldType> label="Phone" name="phone">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item<FieldType> label="Address" name="address">
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item<FieldType> label="City" name="city">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item<FieldType> label="Code" name="code">
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item<FieldType> label="About" name="about">
                            <Input.TextArea />
                        </Form.Item>

                        <div className="upload-form-btn">
                            <Button type="primary" onClick={handleClick}>
                                Save Changes
                            </Button>
                        </div>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

export default GeneralTab;
