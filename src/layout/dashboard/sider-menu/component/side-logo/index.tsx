import src from "@/assets/react.svg";
import "./index.scss";
import { Typography } from "antd";

const SideLogo = (props) => {
    return (
        <div className="side-logo">
            <img src={src} alt="image" />
            {!props.collapsed && (
                <Typography.Title
                    className="side-title"
                    style={{
                        animation: !props.collapsed ? "fadeIn 1.4s ease" : "none",
                    }}
                >
                    Chiman Admin
                </Typography.Title>
            )}
        </div>
    );
};

export default SideLogo;
