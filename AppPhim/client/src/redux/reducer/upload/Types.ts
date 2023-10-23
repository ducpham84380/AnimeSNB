import { PayloadAction } from "@reduxjs/toolkit";

export type UploadState = {
    isLoading: boolean;
    filename:string;
};

export type ActionReqUploadFile= PayloadAction<{}>;
export type ActionResUploadFile = PayloadAction<{
    filename: UploadState["filename"];
}>;