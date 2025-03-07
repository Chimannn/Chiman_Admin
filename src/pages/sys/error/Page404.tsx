import ProtectedRoute from "@/router/components/ProtectedRoute";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { varBounce } from "@/components/animate/variants/bounce";
import MotionContainer from "@/components/animate/motion-container";
import { Typography } from "antd";
import Character_2 from "@/assets/images/characters/character_2.png";
import useTheme from "@/theme/use-theme";
import { Link } from "react-router-dom";

import "./style/index.scss";

const { VITE_APP_HOMEPAGE: HOMEPAGE } = import.meta.env;

function Page404() {
    const { themeStyles } = useTheme();
    const style = {
        color: "#fff",
        backgroundColor: themeStyles.btnBgColor,
    };
    return (
        <ProtectedRoute>
            <Helmet>
                <title>404 Page Not Found!</title>
            </Helmet>

            <div className="error-div1">
                <MotionContainer className="container">
                    <motion.div variants={varBounce().in}>
                        <Typography.Title level={3} className="title">
                            Sorry, Page Not Found!
                        </Typography.Title>
                    </motion.div>

                    <motion.div variants={varBounce().in}>
                        <Typography.Paragraph type="secondary" className="paragraph">
                            TSorry, we couldn’t find the page you’re looking for. Perhaps you’ve
                            mistyped the URL? Be sure to check your spelling.
                        </Typography.Paragraph>
                    </motion.div>

                    <motion.div variants={varBounce().in}>
                        <img src={Character_2} className="character2" />
                    </motion.div>

                    <Link to={HOMEPAGE} className="go-btn" style={style}>
                        Go to Home
                    </Link>
                </MotionContainer>
            </div>
        </ProtectedRoute>
    );
}

export default Page404;
