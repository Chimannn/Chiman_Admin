export type Props = {
    staggerIn?: number;
    delayIn?: number;
    staggerOut?: number;
};

export const varContainer = (props?: Props) => {
    const staggerIn = props?.staggerIn || 0.05;
    const delayIn = props?.staggerIn || 0.05;
    const staggerOut = props?.staggerIn || 0.05;

    return {
        animate: {
            transition: {
                staggerChildren: staggerIn, //子元素开启动画的时间间隔
                delayChildren: delayIn, //父元素开启动画后，到子元素开启动画前的时间间隔
            },
        },
        exit: {
            transition: {
                staggerChildren: staggerOut,
                staggerDirection: -1,
            },
        },
    };
};
