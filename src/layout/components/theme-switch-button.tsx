import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/theme/themeSlice";
import { Switch } from "antd";
import "../styles/switch.scss";
import useTheme from "@/theme/use-theme";

const ThemeSwitchButton = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.current);
    const { themeStyles } = useTheme();
    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };
    const style = {
        backgroundColor: themeStyles.switch.color,
    };

    return (
        <>
            <span className={`icon ${theme}`}>{theme === "light" ? "🌙" : "🌞"}</span>
            <Switch onChange={handleToggleTheme} style={style} />
        </>
    );
};

export default ThemeSwitchButton;
