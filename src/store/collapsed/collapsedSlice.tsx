import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    collapsed: false,
};

const collapsedSlice = createSlice({
    name: "collapsed",
    initialState,
    reducers: {
        toggleCollapsed: (state) => {
            state.collapsed = !state.collapsed;
        },
    },
});

export const { toggleCollapsed } = collapsedSlice.actions;
export default collapsedSlice.reducer;
