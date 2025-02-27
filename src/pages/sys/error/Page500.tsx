import ProtectedRoute from "@/router/components/protectedRoute";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { varBounce } from "@/components/animate/variants/bounce";
import MotionContainer from "@/components/animate/motion-container";
import { Typography } from "antd";
import Character_4 from "@/assets/images/characters/character_4.png";
import useTheme from "@/theme/use-theme";
import { Link } from "react-router-dom";

import "./style/index.scss";

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

function Page500() {
    const { themeStyles } = useTheme();
    const style = {
        color: "#fff",
        backgroundColor: themeStyles.btnBgColor,
    };
    return (
        <ProtectedRoute>
            <Helmet>
                <title>500 Internal Server Error</title>
            </Helmet>

            <div className="error-div1">
                <MotionContainer className="container">
                    <motion.div variants={varBounce().in}>
                        <Typography.Title level={3} className="title">
                            500 Internal Server Error!
                        </Typography.Title>
                    </motion.div>

                    <motion.div variants={varBounce().in}>
                        <Typography.Paragraph type="secondary" className="paragraph">
                            There was an error, please try again later.
                        </Typography.Paragraph>
                    </motion.div>

                    <motion.div variants={varBounce().in}>
                        <img src={Character_4} className="character2" />
                    </motion.div>

                    <Link to={HOMEPAGE} className="go-btn" style={style}>
                        Go to Home
                    </Link>
                </MotionContainer>
            </div>
        </ProtectedRoute>
    );
}

export default Page500;
