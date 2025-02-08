// const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;
// import { Navigate } from "react-router-dom";
// const token = useUserToken();

// // 判断用户是否有权限
// if (token.accessToken) {
//     // 如果有授权，则跳转到首页
//     return <Navigate to={HOMEPAGE} replace />;
// }

// src/components/Login.tsx
import React from "react";
import { useDispatch } from "react-redux";
// import { useAppDispatch } from "../app/hooks";
import { login } from "@/store/auth/authSlice";
import "./login.scss";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login: React.FC = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
        try {
            await dispatch(login(values)).unwrap();
            console.log("Login successful");
        } catch (error) {
            console.error("Failed to login:", error);
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
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit" block>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
