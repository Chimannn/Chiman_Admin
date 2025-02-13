import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "@/store/theme/themeSlice";
import { Button } from "antd";

const ThemeSwitchButton = () => {
    const dispatch = useDispatch();
    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    return (
        <Button type="primary" onClick={handleToggleTheme}>
            Toggle Theme
        </Button>
    );
};

export default ThemeSwitchButton;
