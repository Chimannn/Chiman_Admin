import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeMode } from "./types";

const initialState: { current: ThemeMode } = {
    current: "light",
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeMode>) => {
            state.current = action.payload;
        },
        toggleTheme: (state) => {
            state.current = state.current === "light" ? "dark" : "light";
        },
    },
});

export const { setTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
