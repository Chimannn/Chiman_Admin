import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NProgressStart, NProgressDone } from "@/components/progress-bar";

export function useNProgressOnRouteChange() {
    const location = useLocation();

    useEffect(() => {
        NProgressStart();
        const timer = setTimeout(() => NProgressDone(), 200);

        return () => {
            clearTimeout(timer);
            NProgressDone();
        };
    }, [location]);
}
