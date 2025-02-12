import ProtectedRoute from "@/router/components/protectedRoute";

function Page404() {
    return (
        <ProtectedRoute>
            <div>404. --- Page404.</div>
        </ProtectedRoute>
    );
}

export default Page404;
