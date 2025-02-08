import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/api/apiClient";

// 创建异步Thunk用于登录操作
export const login = createAsyncThunk(
    "auth/login",
    async ({
        username,
        password,
        remember,
    }: {
        username: string;
        password: string;
        remember: boolean;
    }) => {
        const response = await apiClient.post({
            url: "/auth/login",
            data: {
                username,
                password,
                remember,
            },
        });
        return response;
    }
);

interface AuthState {
    token: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to login.";
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
