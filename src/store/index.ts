import { configureStore } from "@reduxjs/toolkit";
import collapseReducer from "./collapsed/collapsedSlice";
import authReducer from "./auth/authSlice";

const store = configureStore({
    reducer: {
        collapsed: collapseReducer,
        auth: authReducer,
    },
});

export default store;
