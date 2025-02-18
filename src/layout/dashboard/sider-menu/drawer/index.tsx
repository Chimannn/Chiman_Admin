import { Drawer } from "antd";
import SideMenu from "../index";
import { useSelector } from "react-redux";

export default function DrawerSider({ onClose, openDrawer, menuData, collapsed, isMobileOpen }) {
    const theme = useSelector((state) => state.theme.current);
    const drawerStyles = {
        body: { padding: "0px", backgroundColor: theme === "dark" ? "#161c24" : "#fff" },
    };
    return (
        <Drawer
            closable={false}
            open={openDrawer}
            onClose={onClose}
            placement="left"
            width={260}
            styles={drawerStyles}
        >
            <SideMenu menuData={menuData} collapsed={collapsed} isMobileOpen={isMobileOpen} />
        </Drawer>
    );
}
