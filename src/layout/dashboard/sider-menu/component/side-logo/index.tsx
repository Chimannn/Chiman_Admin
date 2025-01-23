import src from "@/assets/react.svg";
import "./index.scss";

const SideLogo = (props) => {
    return (
        <div className="side-logo">
            <img src={src} alt="image" />
            {!props.collapsed && (
                <span
                    className="side-title"
                    style={{
                        animation: !props.collapsed
                            ? "fadeIn 1.4s ease"
                            : "none",
                    }}
                >
                    Chiman Admin
                </span>
            )}
        </div>
    );
};

export default SideLogo;
