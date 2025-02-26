import { Suspense } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { AppRouter } from "./router";
import { PersistGate } from "redux-persist/integration/react";
import { CircleLoading } from "@/components/loading";
import ThemeSync from "@/components/themesync";
import { ThemeProvider } from "./theme/theme-provider";
import { Toaster } from "sonner";

function App() {
    return (
        <Suspense fallback={<CircleLoading />}>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={<CircleLoading />}>
                    <ThemeSync />
                    <ThemeProvider>
                        <AppRouter />
                        <Toaster richColors />
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </Suspense>
    );
}

export default App;
