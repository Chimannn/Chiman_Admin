import React from "react";
import { ConfigProvider } from "antd";
import { presetsColors, lightColorTokens, darkColorTokens } from "./tokens/colors";
import useTheme from "@/theme/use-theme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();

    const primaryColorToken = presetsColors.default;
    const colorTokens = theme === "dark" ? darkColorTokens : lightColorTokens;

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: primaryColorToken.default,
                    colorBgLayout: colorTokens.background,
                    colorTextBase: colorTokens.text,
                },
                components: {
                    Layout: {
                        siderBg: colorTokens.background,
                    },
                    Menu: {
                        darkItemBg: colorTokens.background,
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
};
