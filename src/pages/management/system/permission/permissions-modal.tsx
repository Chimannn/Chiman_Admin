import { AutoComplete, Form, Input, InputNumber, Modal, Radio } from "antd";
import { useEffect } from "react";

import type { Permission } from "@/types/entity";
import { BasicStatus, PermissionType } from "@/types/enum";

// Constants
const ENTRY_PATH = "/src/pages";
const PAGES = import.meta.glob("/src/pages/**/*.tsx");
const PAGE_SELECT_OPTIONS = Object.entries(PAGES).map(([path]) => {
    const pagePath = path.replace(ENTRY_PATH, "");
    return {
        label: pagePath,
        value: pagePath,
    };
});

export type PermissionModalProps = {
    formValue: Permission;
    title: string;
    show: boolean;
    onOk: VoidFunction;
    onCancel: VoidFunction;
};

export default function PermissionModal({
    title,
    show,
    formValue,
    onOk,
    onCancel,
}: PermissionModalProps) {
    const [form] = Form.useForm();
    const compOptions = PAGE_SELECT_OPTIONS;

    useEffect(() => {
        form.setFieldsValue({ ...formValue });
    }, [formValue, form]);

    return (
        <Modal title={title} open={show} onOk={onOk} onCancel={onCancel} forceRender={true}>
            <Form
                form={form}
                initialValues={formValue}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                layout="horizontal"
            >
                <Form.Item<Permission> label="Type" name="type" required>
                    <Radio.Group optionType="button" buttonStyle="solid">
                        <Radio value={PermissionType.CATALOGUE}>CATALOGUE</Radio>
                        <Radio value={PermissionType.MENU}>MENU</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item<Permission> label="Name" name="name" required>
                    <Input />
                </Form.Item>

                <Form.Item<Permission>
                    label="label"
                    name="name"
                    required
                    tooltip="internationalization config"
                >
                    <Input />
                </Form.Item>

                <Form.Item<Permission> label="Route" name="route" required>
                    <Input />
                </Form.Item>

                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) =>
                        prevValues.type !== currentValues.type
                    }
                >
                    {({ getFieldValue }) => {
                        if (getFieldValue("type") === PermissionType.MENU) {
                            return (
                                <Form.Item<Permission>
                                    label="Component"
                                    name="component"
                                    required={getFieldValue("type") === PermissionType.MENU}
                                >
                                    <AutoComplete
                                        options={compOptions}
                                        filterOption={(input, option) =>
                                            ((option?.label || "") as string)
                                                .toLowerCase()
                                                .includes(input.toLowerCase())
                                        }
                                    />
                                </Form.Item>
                            );
                        }
                        return null;
                    }}
                </Form.Item>

                <Form.Item<Permission>
                    label="Icon"
                    name="icon"
                    tooltip="local icon should start with ic"
                >
                    <Input />
                </Form.Item>

                <Form.Item<Permission> label="Hide" name="hide" tooltip="hide in menu">
                    <Radio.Group optionType="button" buttonStyle="solid">
                        <Radio value={false}>Show</Radio>
                        <Radio value>Hide</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item<Permission> label="Order" name="order">
                    <InputNumber style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item<Permission> label="Status" name="status" required>
                    <Radio.Group optionType="button" buttonStyle="solid">
                        <Radio value={BasicStatus.ENABLE}> Enable </Radio>
                        <Radio value={BasicStatus.DISABLE}> Disable </Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
    );
}
