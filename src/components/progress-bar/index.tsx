import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
    showSpinner: false,
    minimum: 0.1,
    trickleSpeed: 200,
});

export const NProgressStart = () => {
    NProgress.start();
};

export const NProgressDone = () => {
    NProgress.done();
};
