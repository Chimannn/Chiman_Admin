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
    userToken: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    userToken: localStorage.getItem("userToken") || null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.userToken = null;
            localStorage.removeItem("userToken");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                //区分返回状态
                if (action.payload.message === "success") {
                    state.userToken = action.payload.token;
                    localStorage.setItem("userToken", action.payload.token);
                } else {
                    localStorage.removeItem("userToken");
                    state.error = action.payload.message || "Failed to login.";
                }
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.error.message || "Failed to login.";
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
