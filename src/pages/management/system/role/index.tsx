import { Button, Card, Popconfirm, Tag, Table, type TableColumnsType } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";

import { ROLE_LIST } from "@/mocks/assets";
import Iconify from "@/components/icon/iconify";
import IconButton from "@/components/icon/icon-button";

import { RoleModal, type RoleModalProps } from "./role-modal";

import type { Role } from "@/types/entity";
import { BasicStatus } from "@/types/enum";
import "./index.scss";

const ROLES: Role[] = ROLE_LIST as Role[];

const DEFAULE_ROLE_VALUE: Role = {
    id: "",
    name: "",
    label: "",
    status: BasicStatus.ENABLE,
    permission: [],
};
export default function RolePage() {
    const [roleModalPros, setRoleModalProps] = useState<RoleModalProps>({
        formValue: { ...DEFAULE_ROLE_VALUE },
        title: "New",
        show: false,
        onOk: () => {
            setRoleModalProps((prev) => ({ ...prev, show: false }));
        },
        onCancel: () => {
            setRoleModalProps((prev) => ({ ...prev, show: false }));
        },
    });
    const columns: TableColumnsType<Role> = [
        {
            title: "Name",
            dataIndex: "name",
            width: 300,
        },
        {
            title: "Label",
            dataIndex: "label",
        },
        { title: "Order", dataIndex: "order", width: 60 },
        {
            title: "Status",
            dataIndex: "status",
            align: "center",
            width: 120,
            render: (status) => (
                <Tag color={status === BasicStatus.DISABLE ? "error" : "success"}>
                    {status === BasicStatus.DISABLE ? "Disable" : "Enable"}
                </Tag>
            ),
        },
        { title: "Desc", dataIndex: "desc" },
        {
            title: "Action",
            key: "operation",
            align: "center",
            width: 100,
            render: (_, record) => (
                <div className="action">
                    <IconButton onClick={() => onEdit(record)}>
                        <Iconify icon="solar:pen-bold-duotone" size={18} />
                    </IconButton>
                    <Popconfirm
                        title="Delete the Role"
                        okText="Yes"
                        cancelText="No"
                        placement="left"
                    >
                        <button className="delete-btn">
                            <DeleteOutlined className="delete-icon" />
                        </button>
                    </Popconfirm>
                </div>
            ),
        },
    ];

    const onCreate = () => {
        setRoleModalProps((prev) => ({
            ...prev,
            show: true,
            title: "Create New",
            formValue: {
                ...prev.formValue,
                ...DEFAULE_ROLE_VALUE,
            },
        }));
    };

    const onEdit = (formValue: Role) => {
        setRoleModalProps((prev) => ({
            ...prev,
            show: true,
            title: "Edit",
            formValue,
        }));
    };

    return (
        <Card
            title="Role List"
            extra={
                <Button type="primary" onClick={onCreate}>
                    New
                </Button>
            }
        >
            <Table
                rowKey="id"
                size="small"
                scroll={{ x: "max-content" }}
                pagination={false}
                columns={columns}
                dataSource={ROLES}
            />

            <RoleModal {...roleModalPros} />
        </Card>
    );
}
