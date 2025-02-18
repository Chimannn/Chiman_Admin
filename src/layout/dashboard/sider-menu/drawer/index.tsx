import { Drawer } from "antd";
import SideMenu from "../index";
import useTheme from "@/theme/use-theme";

export default function DrawerSider({ onClose, openDrawer, menuData, collapsed, isMobileOpen }) {
    const { themeStyles } = useTheme();
    const drawerStyles = {
        body: { padding: "0px", backgroundColor: themeStyles.backgroundColor },
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
