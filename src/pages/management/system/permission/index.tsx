import { useState } from "react";
import { Popconfirm, Button, Card, Tag, Table, type TableColumnsType } from "antd";
import IconButton from "@/components/icon/icon-button";
import Iconify from "@/components/icon/iconify";
import type { Permission } from "@/types/entity";
import { BasicStatus, PermissionType } from "@/types/enum";
import Permissions from "@/router/tempPermissionJson";
import PermissionModal from "./permissions-modal";
import { DeleteOutlined } from "@ant-design/icons";
import "./index.scss";

const defaultPermissionValue: Permission = {
    id: "",
    parentId: "",
    name: "",
    label: "",
    route: "",
    component: "",
    icon: "",
    hide: false,
    status: BasicStatus.ENABLE,
    type: PermissionType.CATALOGUE,
};

export default function PermissionPage() {
    const [permissionModalProps, setPermissionModalProps] = useState<PermissionModalProps>({
        formValue: { ...defaultPermissionValue },
        title: "New",
        show: false,
        onOk: () => {
            setPermissionModalProps((prev) => ({ ...prev, show: false }));
        },
        onCancel: () => {
            setPermissionModalProps((prev) => ({ ...prev, show: false }));
        },
    });
    const columns: TableColumnsType<Permission> = [
        {
            title: "Name",
            dataIndex: "name",
            width: 300,
            render: (_, record) => <div>{record.name}</div>,
        },
        {
            title: "Type",
            dataIndex: "type",
            width: 60,
            render: (_, record) => <Tag color="processing">{PermissionType[record.type]}</Tag>,
        },
        {
            title: "Component",
            dataIndex: "component",
        },
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
        { title: "Order", dataIndex: "order", width: 60 },
        {
            title: "Action",
            key: "operation",
            align: "center",
            width: 100,
            render: (_, record) => (
                <div className="action">
                    {record?.type === PermissionType.CATALOGUE && (
                        <IconButton onClick={() => onCreate(record.id)}>
                            <Iconify icon="gridicons:add-outline" size={18} />
                        </IconButton>
                    )}
                    <IconButton onClick={() => onEdit(record)}>
                        <Iconify icon="solar:pen-bold-duotone" size={18} />
                    </IconButton>
                    <Popconfirm
                        title="Delete the Permission"
                        okText="Yes"
                        cancelText="No"
                        placement="left"
                    >
                        <button className="delete-btn">
                            <DeleteOutlined className="delete-icon" />
                        </button>
                        {/* <IconButton>
                            <Iconify
                                icon="mingcute:delete-2-fill"
                                size={18}
                                style={{ color: "#fe5631" }}
                            />
                        </IconButton> */}
                    </Popconfirm>
                </div>
            ),
        },
    ];

    const onCreate = (parentId?: string) => {
        setPermissionModalProps((prev) => ({
            ...prev,
            show: true,
            ...defaultPermissionValue,
            title: "New",
            formValue: { ...defaultPermissionValue, parentId: parentId ?? "" },
        }));
    };

    const onEdit = (formValue: Permission) => {
        setPermissionModalProps((prev) => ({
            ...prev,
            show: true,
            title: "Edit",
            formValue,
        }));
    };

    return (
        <Card
            title="Permission List"
            extra={
                <Button type="primary" onClick={() => onCreate()}>
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
                dataSource={Permissions}
            />

            <PermissionModal {...permissionModalProps} />
        </Card>
    );
}
