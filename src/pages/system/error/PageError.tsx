import ProtectedRoute from "@/router/components/protectedRoute";

function PageError() {
    return (
        <ProtectedRoute>
            <div>404 Not Found.</div>
        </ProtectedRoute>
    );
}

export default PageError;
