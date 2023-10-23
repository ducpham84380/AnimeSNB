import { createSlice } from "@reduxjs/toolkit";
import * as UploadTypes from "src/redux/reducer/upload/Types";

const initialState: UploadTypes.UploadState = {
    filename: "",
    isLoading: false,
};

export const uploadSlice = createSlice({
    name: "upload",
    initialState,
    reducers: {
        reqDataUpload: (state, action: UploadTypes.ActionReqUploadFile): void => {
            state.isLoading = true;
        },

        resDataUpload: (state, action: UploadTypes.ActionResUploadFile): void => {
            const { filename } = action.payload;
            state.isLoading = false;
            state.filename = filename;
        },

    },
});

export const uploadActions = uploadSlice.actions;
export default uploadSlice.reducer;
