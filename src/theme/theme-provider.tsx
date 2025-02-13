import React from "react";
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import { presetsColors, lightColorTokens, darkColorTokens } from "./tokens/colors";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const theme = useSelector((state) => state.theme.current);

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
