const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;
import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "@/store/auth/authSlice";
import "./login.scss";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input, message } from "antd";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userToken = useSelector((state) => state.auth.userToken);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    if (userToken) {
        return <Navigate to={HOMEPAGE} replace />;
    }

    const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
        try {
            setLoading(true);
            const res = await dispatch(login(values)).unwrap();
            setLoading(false);
            if (res?.message === "success") {
                message.success("Success");
                navigate("/dashboard");
            } else {
                message.error(`Failed：${res?.message || "unknown error."}`);
            }
        } catch (error) {
            message.error("Failed to login:", error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <Form
                    form={form}
                    name="basic"
                    style={{ width: 300 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <h2>Login</h2>
                    <Form.Item<FieldType>
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input placeholder="username" />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password placeholder="password" />
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                        style={{ display: "flex" }}
                        label={null}
                    >
                        <Checkbox>remember me</Checkbox>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            loading={loading}
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
