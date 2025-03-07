import ProtectedRoute from "@/router/components/ProtectedRoute";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { varBounce } from "@/components/animate/variants/bounce";
import MotionContainer from "@/components/animate/motion-container";
import { Typography } from "antd";
import Character_3 from "@/assets/images/characters/character_3.png";
import useTheme from "@/theme/use-theme";
import { Link } from "react-router-dom";

import "./style/index.scss";

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

function Page403() {
    const { themeStyles } = useTheme();
    const style = {
        color: "#fff",
        backgroundColor: themeStyles.btnBgColor,
    };
    return (
        <ProtectedRoute>
            <Helmet>
                <title>403 No Permission!</title>
            </Helmet>

            <div className="error-div1">
                <MotionContainer className="container">
                    <motion.div variants={varBounce().in}>
                        <Typography.Title level={3} className="title">
                            No permission!
                        </Typography.Title>
                    </motion.div>

                    <motion.div variants={varBounce().in}>
                        <Typography.Paragraph type="secondary" className="paragraph">
                            The page you are trying access has restricted access. Please refer to
                            your system administrator
                        </Typography.Paragraph>
                    </motion.div>

                    <motion.div variants={varBounce().in}>
                        <img src={Character_3} className="character2" />
                    </motion.div>

                    <Link to={HOMEPAGE} className="go-btn" style={style}>
                        Go to Home
                    </Link>
                </MotionContainer>
            </div>
        </ProtectedRoute>
    );
}

export default Page403;
