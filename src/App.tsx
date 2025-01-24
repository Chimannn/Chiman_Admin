import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store";
function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Provider store={store}>
                <RouterProvider router={router}></RouterProvider>
            </Provider>
        </Suspense>
    );
}

export default App;
