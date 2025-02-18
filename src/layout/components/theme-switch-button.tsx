import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/theme/themeSlice";
import { Switch } from "antd";
import "../styles/switch.scss";

const ThemeSwitchButton = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.current);
    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };
    const style = {
        backgroundColor: theme === "dark" ? "#6d5ee1" : "#9d93e6",
    };

    return (
        <>
            <span className={`icon ${theme}`}>{theme === "light" ? "🌙" : "🌞"}</span>
            <Switch onChange={handleToggleTheme} style={style} />
        </>
    );
};

export default ThemeSwitchButton;
