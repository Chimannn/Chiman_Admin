import { Grid } from "antd";

const { useBreakpoint } = Grid;

export const useResponsive = () => {
    const screens = useBreakpoint();

    return {
        isMobile: !screens.md,
        isDesktop: screens.md,
        currentBreakpoint: Object.keys(screens).find((key) => screens[key]) || "xs",
    };
};
