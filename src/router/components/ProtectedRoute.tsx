import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

import PageError from "@/pages/system/error/PageError";

type Props = {
    children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
    const navigate = useNavigate();
    const userToken = useSelector((state) => state.auth.userToken);

    const check = useCallback(() => {
        if (!userToken) {
            navigate("/login", { replace: true });
        }
    }, [navigate, userToken]);

    useEffect(() => {
        check();
    }, [check]);

    return <ErrorBoundary FallbackComponent={PageError}>{children}</ErrorBoundary>;
}
