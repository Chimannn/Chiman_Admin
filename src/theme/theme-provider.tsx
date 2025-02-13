import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { presetsColors } from "./tokens/colors";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const theme = useSelector((state) => state.theme.current);
    const [themeBgBaseColor, setThemeBgBaseColor] = useState("#fff");
    const [colorTextBase, setColorTextBase] = useState("#fff");

    const primaryColorToken = presetsColors.default;

    useEffect(() => {
        setThemeBgBaseColor(theme === "dark" ? "#161c24" : "#fff");
        setColorTextBase(theme === "dark" ? "#fff" : "#000");
    }, [theme]);

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: primaryColorToken.default,
                    colorBgLayout: themeBgBaseColor,
                    colorTextBase: colorTextBase,
                },
                components: {
                    Layout: {
                        siderBg: themeBgBaseColor,
                    },
                    Menu: {
                        darkItemBg: themeBgBaseColor,
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
};
