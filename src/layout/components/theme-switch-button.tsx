import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/theme/themeSlice";
import { Button } from "antd";

const ThemeSwitchButton = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.current);
    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <Button type="primary" onClick={handleToggleTheme}>
            {theme === "light" ? "🌙 黑夜模式" : "🌞 白天模式"}
        </Button>
    );
};

export default ThemeSwitchButton;
