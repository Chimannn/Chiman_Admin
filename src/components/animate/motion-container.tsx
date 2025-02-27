import { type MotionProps, motion } from "framer-motion";

import { varContainer } from "./variants/container";

interface Props extends MotionProps {
    className?: string;
}

export default function MotionContainer({ children, className }: Props) {
    return (
        <motion.div
            // 这里指定 initial、animate和exit的属性名后，子组件就不需要再重复指定
            initial="initial"
            animate="animate"
            exit="exit"
            variants={varContainer()}
            className={className}
        >
            {children}
        </motion.div>
    );
}
