import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "@/api/apiClient";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const persistConfig = {
    key: "auth",
    storage,
};

interface AuthState {
    userToken: string | null;
    user: Obejct | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    userToken: localStorage.getItem("userToken") || null,
    user: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.userToken = null;
            state.user = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                //区分返回状态
                if (action.payload.code === 0) {
                    state.userToken = action.payload.data.token;
                    state.user = action.payload.data.user;
                } else {
                    state.userToken = null;
                    state.user = null;
                    state.error = action.payload.message || "Failed to login.";
                }
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.error.message || "Failed to login.";
            });
    },
});

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const { logout } = authSlice.actions;

export default persistedReducer;
