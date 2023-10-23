import { PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
    isLoading: boolean;
    isLogin: boolean;
    isAdmin:boolean;
    accessToken: string;
    refreshToken: string;
    msg: string;
    isLoggedOut:boolean;
};

export type ActionReqGetDataLogin = PayloadAction<{}>;
export type ActionReqGetDataLogout = PayloadAction<{}>;
export type ActionSetLogout = PayloadAction<{}>;
export type ActionResGetDataLogin = PayloadAction<{
    msg: AuthState["msg"];
    isAdmin: AuthState["isAdmin"];
    accessToken: AuthState["accessToken"];
    refreshToken: AuthState["refreshToken"];
}>;

export type ActionResLogOut = PayloadAction<{
    msg: AuthState["msg"];
}>;


