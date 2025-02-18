import useTheme from "@/theme/use-theme";

type Props = {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
};
const Card = ({ children, style, className }: Props) => {
    const { themeStyles } = useTheme();
    return (
        <div
            style={{
                backgroundColor: themeStyles.card.backgroundColor,
                boxShadow: themeStyles.card.boxShadow,
                transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                borderRadius: themeStyles.baseTheme.borderRadius.md,
                padding: themeStyles.baseTheme.spacing[6],
                overflow: "hidden",
                position: "relative",
                // display: "flex",
                alignItems: "center",
                ...style,
            }}
            className={className}
        >
            {children}
        </div>
    );
};

export default Card;
