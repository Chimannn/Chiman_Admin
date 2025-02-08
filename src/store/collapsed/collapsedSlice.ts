import { createSlice } from "@reduxjs/toolkit";

interface CollapsedState {
    collapsed: boolean;
}

const initialState: CollapsedState = {
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
