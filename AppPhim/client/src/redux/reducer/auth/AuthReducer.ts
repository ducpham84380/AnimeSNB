import { createSlice } from "@reduxjs/toolkit";
import * as Types from "src/redux/reducer/auth/Types";

const initialState: Types.AuthState = {
    isLoading: false,
    isAdmin:false,
    isLogin: false,
    isLoggedOut:false,
    msg: "",
    accessToken: "",
    refreshToken: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reqGetDataLogin: (state, action: Types.ActionReqGetDataLogin) => {
            state.isLoading = true;
        },

        resGetDataLogin: (state, action: Types.ActionResGetDataLogin) => {
            const { accessToken } = action.payload;
            const { refreshToken } = action.payload;
            const { isAdmin } = action.payload;
            state.isLoading = false;
            state.isLogin = true;
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
            state.isAdmin = isAdmin;
        },


        setLogout: (state, action: Types.ActionSetLogout) => {
            state.isLoggedOut = false;
            state.isLoading = false;
            state.isLogin = false;
            state.accessToken = "";
            state.refreshToken = "";
            state.isAdmin = false;
        },

        reqDataLogOut: (state, action: Types.ActionReqGetDataLogout): void => {
            state.isLoggedOut = false;
        },

        resDataLogOut: (state, action: Types.ActionResLogOut): void => {
            const { msg } = action.payload;
            state.isLoading = false;
            state.msg = msg;
            state.isLoggedOut = true;
        },

    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
