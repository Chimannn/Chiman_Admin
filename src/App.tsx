import { Suspense } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { AppRouter } from "./router";
import { PersistGate } from "redux-persist/integration/react";
import { CircleLoading } from "@/components/loading";

function App() {
    return (
        <Suspense fallback={<CircleLoading />}>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={<CircleLoading />}>
                    <AppRouter />
                </PersistGate>
            </Provider>
        </Suspense>
    );
}

export default App;
