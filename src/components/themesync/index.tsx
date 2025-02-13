import { useEffect } from "react";
import { useSelector } from "react-redux";

const ThemeSync = () => {
    const theme = useSelector((state) => state.theme.current);

    useEffect(() => {
        const root = document.documentElement;
        root.className = theme; // 通过类名切换主题变量
        localStorage.setItem("theme", theme); // 持久化存储
    }, [theme]);

    return null;
};

export default ThemeSync;
