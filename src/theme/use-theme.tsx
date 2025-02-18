import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "./tokens/colors";
const useTheme = () => {
    const [themeStyles, setThemeStyles] = useState(lightTheme);

    const theme = useSelector((state) => state.theme.current);
    useEffect(() => {
        setThemeStyles(theme === "light" ? lightTheme : darkTheme);
    }, [theme]);

    return { themeStyles, theme };
};
export default useTheme;
