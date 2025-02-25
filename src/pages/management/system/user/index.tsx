import { Button, Card, Popconfirm, Tag, Table, type TableColumnsType } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { USER_LIST } from "@/mocks/assets";
import Iconify from "@/components/icon/iconify";
import IconButton from "@/components/icon/icon-button";

import type { Role, UserInfo } from "@/types/entity";
import { BasicStatus } from "@/types/enum";
import "./index.scss";

const USERS: UserInfo[] = USER_LIST as UserInfo[];

export default function RolePage() {
    const columns: TableColumnsType<UserInfo> = [
        {
            title: "Name",
            dataIndex: "name",
            width: 300,
            render: (_, record) => {
                return (
                    <div className="name">
                        <img alt="" src={record.avatar} />
                        <div>
                            <span className="span1">{record.username}</span>
                            <span className="span2">{record.email}</span>
                        </div>
                    </div>
                );
            },
        },
        {
            title: "Role",
            dataIndex: "role",
            align: "center",
            width: 120,
            render: (role: Role) => <Tag color="cyan">{role.name}</Tag>,
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
        {
            title: "Action",
            key: "operation",
            align: "center",
            width: 100,
            render: () => (
                <div className="action">
                    <IconButton>
                        <Iconify icon="mdi:card-account-details" size={18} />
                    </IconButton>
                    <IconButton onClick={() => {}}>
                        <Iconify icon="solar:pen-bold-duotone" size={18} />
                    </IconButton>
                    <Popconfirm
                        title="Delete the User"
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

    return (
        <Card
            title="User List"
            extra={
                <Button type="primary" onClick={() => {}}>
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
                dataSource={USERS}
            />
        </Card>
    );
}
