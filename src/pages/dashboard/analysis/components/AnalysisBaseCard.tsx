import { Card } from "antd";
import useTheme from "@/theme/use-theme";
const BaseCard = ({ style, ...rest }) => {
    const { themeStyles } = useTheme();
    return (
        <Card
            {...rest}
            style={{
                boxShadow: themeStyles.card.boxShadow,
                transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                borderRadius: "6px",
                ...style,
            }}
        ></Card>
    );
};

export default BaseCard;
