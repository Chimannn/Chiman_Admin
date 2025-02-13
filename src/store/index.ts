import { configureStore } from "@reduxjs/toolkit";
import collapseReducer from "./collapsed/collapsedSlice";
import authReducer from "./auth/authSlice";
import themeReducer from "./theme/themeSlice";

import { persistStore } from "redux-persist";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const store = configureStore({
    reducer: {
        collapsed: collapseReducer,
        auth: authReducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                //禁用特殊动作的序列化检查
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };
