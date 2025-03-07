import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs } from "antd";
import Iconify from "@/components/icon/iconify";
import GeneralTab from "./general-tab";
import NotificationsTab from "./notifications-tab";
import SecurityTab from "./security-tab";
import "./index.scss";
function UserAccount() {
    const items = [
        {
            key: "1",
            label: (_jsxs("div", { className: "account-div1", children: [_jsx(Iconify, { icon: "solar:user-id-bold", size: 24, className: "icon" }), _jsx("span", { children: "General" })] })),
            children: _jsx(GeneralTab, {}),
        },
        {
            key: "2",
            label: (_jsxs("div", { className: "account-div1", children: [_jsx(Iconify, { icon: "solar:bell-bing-bold-duotone", size: 24, className: "icon" }), _jsx("span", { children: "Notifications" })] })),
            children: _jsx(NotificationsTab, {}),
        },
        {
            key: "3",
            label: (_jsxs("div", { className: "account-div1", children: [_jsx(Iconify, { icon: "solar:key-minimalistic-square-3-bold-duotone", size: 24, className: "icon" }), _jsx("span", { children: "Security" })] })),
            children: _jsx(SecurityTab, {}),
        },
    ];
    return _jsx(Tabs, { defaultActiveKey: "1", items: items });
}
export default UserAccount;
