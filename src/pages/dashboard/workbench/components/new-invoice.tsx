import { Space, Tag, Typography } from "antd";
import Table, { type ColumnsType } from "antd/es/table";
import Card from "@/components/card";
import useTheme from "@/theme/use-theme";
import "../styles/new-invoice.scss";
// import { IconButton, Iconify } from "@/components/icon";
// import Scrollbar from "@/components/scrollbar";

interface DataType {
    key: string;
    id: string;
    category: string;
    price: string;
    status: string;
}

export default function NewInvoice() {
    const { theme } = useTheme();
    const columns: ColumnsType<DataType> = [
        {
            title: "InvoiceId",
            dataIndex: "id",
            key: "id",
            render: (text) => <span>{text}</span>,
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            minWidth: 100,
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (text) => <span>{text}</span>,
        },
        {
            title: "Status",
            key: "status",
            dataIndex: "status",
            render: (_status) => {
                const status = _status as string;
                let color = "success";
                if (status === "Progress") color = "gold";
                if (status === "Out of Date") color = "red";
                return <Tag color={color}>{status}</Tag>;
            },
        },
        {
            title: "Action",
            key: "action",
            minWidth: 80,
            render: () => (
                <Space size="middle">
                    {theme === "dark" ? (
                        <svg
                            t="1740023011656"
                            viewBox="0 0 1088 1024"
                            className="icon"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="2653"
                            width="20"
                            height="20"
                        >
                            <path
                                d="M64.557535 441.48446h707.521915a134.36261 134.36261 0 1 1 3.865261 129.038277H64.557535a64.531937 64.531937 0 1 1 0-129.038277z m102.391015-371.16743h297.369106a137.357547 137.357547 0 0 1 239.748562 0h294.374169a64.557535 64.557535 0 0 1 0 129.11507H703.349481a137.43434 137.43434 0 0 1-238.443077 0H166.871757a64.557535 64.557535 0 1 1 0-129.11507z m93.431802 685.277467a136.589614 136.589614 0 0 1 121.486939 73.209575h642.273241a64.531937 64.531937 0 1 1 0 129.063875H378.00203a136.717603 136.717603 0 0 1-117.519287 66.118998 134.209023 134.209023 0 1 1 0-268.392448z"
                                p-id="2654"
                                fill="#dbdbdb"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            t="1740023011656"
                            viewBox="0 0 1088 1024"
                            className="icon"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="2653"
                            width="20"
                            height="20"
                        >
                            <path
                                d="M64.557535 441.48446h707.521915a134.36261 134.36261 0 1 1 3.865261 129.038277H64.557535a64.531937 64.531937 0 1 1 0-129.038277z m102.391015-371.16743h297.369106a137.357547 137.357547 0 0 1 239.748562 0h294.374169a64.557535 64.557535 0 0 1 0 129.11507H703.349481a137.43434 137.43434 0 0 1-238.443077 0H166.871757a64.557535 64.557535 0 1 1 0-129.11507z m93.431802 685.277467a136.589614 136.589614 0 0 1 121.486939 73.209575h642.273241a64.531937 64.531937 0 1 1 0 129.063875H378.00203a136.717603 136.717603 0 0 1-117.519287 66.118998 134.209023 134.209023 0 1 1 0-268.392448z"
                                p-id="2654"
                                fill="#2c2c2c"
                            ></path>
                        </svg>
                    )}
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: "1",
            id: "INV-1990",
            category: "Android",
            price: "$83.74",
            status: "Paid",
        },
        {
            key: "2",
            id: "INV-1991",
            category: "Mac",
            price: "$97.14",
            status: "Out of Date",
        },
        {
            key: "3",
            id: "INV-1992",
            category: "Windows",
            price: "$68.71",
            status: "Progress",
        },
        {
            key: "4",
            id: "INV-1993",
            category: "Android",
            price: "$85.21",
            status: "Paid",
        },
        {
            key: "5",
            id: "INV-1994",
            category: "Mac",
            price: "$53.17",
            status: "Paid",
        },
        {
            key: "6",
            id: "INV-1992",
            category: "Windows",
            price: "$68.71",
            status: "Progress",
        },
        {
            key: "7",
            id: "INV-1993",
            category: "Android",
            price: "$85.21",
            status: "Paid",
        },
        {
            key: "8",
            id: "INV-1994",
            category: "Mac",
            price: "$53.17",
            status: "Paid",
        },
    ];

    return (
        <Card className="new-invoice">
            <header>
                <Typography.Title level={5}>New Invoice</Typography.Title>
            </header>
            <main>
                {/* <Scrollbar> */}
                <Table
                    tableLayout="auto"
                    columns={columns}
                    dataSource={data}
                    scroll={{ x: "max-content", y: 55 * 5 }}
                />
                {/* </Scrollbar> */}
            </main>
        </Card>
    );
}
