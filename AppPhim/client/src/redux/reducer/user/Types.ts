import { PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
    isLoading: boolean;
    accessTokenNew: string;
    user: {
        Id_User: number,
        Email: string,
        Name: string,
        Avatar: string,
    };
};

export type ActionReqUser = PayloadAction<{}>;
export type ActionSetLogout = PayloadAction<{}>;
export type ActionResUser = PayloadAction<{
    user: UserState["user"];
    accessTokenNew: UserState["accessTokenNew"];
}>;
