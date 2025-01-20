import src from "../../assets/react.svg";
import "./slider-logo.scss";

const sliderLogo = (props) => {
    return (
        <div className="slider-logo">
            <img src={src} alt="image" />
            {!props.collapsed && (
                <span
                    className="slider-title"
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

export default sliderLogo;
