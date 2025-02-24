import { useState } from "react";
import type { ButtonProps } from "antd";
import type { CSSProperties, ReactNode } from "react";
import useTheme from "@/theme/use-theme";

type Props = {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
} & ButtonProps;
export default function IconButton({ children, className, style, onClick }: Props) {
    const [isHovered, setIsHovered] = useState(false);
    const { themeStyles } = useTheme();
    return (
        <button
            type="button"
            style={{
                display: "flex",
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "9999px",
                padding: "8px",
                backgroundColor: isHovered ? "#f0f1f2" : "transparent",
                border: "none",
                color: themeStyles.color,
                ...style,
            }}
            className={className}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </button>
    );
}
