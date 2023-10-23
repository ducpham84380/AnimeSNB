import { createSlice } from "@reduxjs/toolkit";
import * as AuthTypes from "src/redux/reducer/user/Types";

const initialState: AuthTypes.UserState = {
    accessTokenNew: "",
    isLoading: false,
    user: {
        Id_User: 0,
        Email: "",
        Name: "",
        Avatar: "",
    },
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        reqDataUser: (state, action: AuthTypes.ActionReqUser): void => {
            state.isLoading = true;
        },

        resDataUser: (state, action: AuthTypes.ActionResUser): void => {
            const { user } = action.payload;
            const { accessTokenNew } = action.payload;
            state.isLoading = false;
            state.user = user;
            state.accessTokenNew = accessTokenNew;
        },

        setLogout: (state, action: AuthTypes.ActionSetLogout) => {
            const user = { Id_User: 0,
                Email: "",
                Name: "",
                Avatar:""};
            const accessTokenNew  = "";
            state.isLoading = false;
            state.user = user;
            state.accessTokenNew = accessTokenNew;
        },

    },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
