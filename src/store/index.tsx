import { configureStore } from "@reduxjs/toolkit";
import collapseReducer from "./collapsed/collapsedSlice";

const store = configureStore({
    reducer: {
        collapsed: collapseReducer,
    },
});

export default store;
