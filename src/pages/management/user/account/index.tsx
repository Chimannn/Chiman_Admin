import { Tabs, type TabsProps } from "antd";

import Iconify from "@/components/icon/iconify";

import GeneralTab from "./general-tab";
import NotificationsTab from "./notifications-tab";
import SecurityTab from "./security-tab";
import "./index.scss";

function UserAccount() {
    const items: TabsProps["items"] = [
        {
            key: "1",
            label: (
                <div className="div1">
                    <Iconify icon="solar:user-id-bold" size={24} className="icon" />
                    <span>General</span>
                </div>
            ),
            children: <GeneralTab />,
        },
        {
            key: "2",
            label: (
                <div className="div1">
                    <Iconify icon="solar:bell-bing-bold-duotone" size={24} className="icon" />
                    <span>Notifications</span>
                </div>
            ),
            children: <NotificationsTab />,
        },
        {
            key: "3",
            label: (
                <div className="div1">
                    <Iconify
                        icon="solar:key-minimalistic-square-3-bold-duotone"
                        size={24}
                        className="icon"
                    />
                    <span>Security</span>
                </div>
            ),
            children: <SecurityTab />,
        },
    ];

    return <Tabs defaultActiveKey="1" items={items} />;
}

export default UserAccount;
