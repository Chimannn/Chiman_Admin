import { Suspense } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { AppRouter } from "./router";
import { PersistGate } from "redux-persist/integration/react";

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
                    <AppRouter />
                </PersistGate>
            </Provider>
        </Suspense>
    );
}

export default App;
