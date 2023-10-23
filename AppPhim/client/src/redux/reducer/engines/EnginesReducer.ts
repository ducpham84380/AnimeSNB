import { createSlice } from "@reduxjs/toolkit";
import * as Types from "src/redux/reducer/engines/Types";

const initialState: Types.EnginesState = {
    isLoading: false,
    category:[{
        id:0,
        title:"",
        media: ""
    }],
    media:[{
        id:0,
        title:"",
    }],
    film:[{
        id:0,
        categories:"",
        title: "",
        title_image:"",
        image:"",
        language: "",
        year:"",
        reviews:"",
        views: 0,
    }],
    msg:""
};

const enginesSlice = createSlice({
    name: "engines",
    initialState,
    reducers: {
        reqGetFilm: (state, action: Types.ActionReqGetDataFilm) => {
            state.isLoading = true;
        },

        resGetFilm: (state, action: Types.ActionResGetDataFilm) => {
            const { film } = action.payload;
            state.isLoading = false;
            state.film = film;
        },

        reqCreateCategory: (state, action: Types.ActionReqCreateCategory) => {
            state.isLoading = true;
        },

        resCreateOrUpdateOrDeleteCategory: (state, action: Types.ActionResCreateCategory) => {
            const { msg } = action.payload;
            state.isLoading = false;
            state.msg = msg;
        },

        reqUpdateCategory: (state, action: Types.ActionReqCreateCategory) => {
            state.isLoading = true;
        },


        reqDeleteCategory: (state, action: Types.ActionReqCreateCategory) => {
            state.isLoading = true;
        },

        reqGetCategory: (state, action: Types.ActionReqGetDataCategory) => {
            state.isLoading = true;
        },

        resGetCategory: (state, action: Types.ActionResGetDataCategory) => {
            const { category } = action.payload;
            state.isLoading = false;
            state.category = category;
        },

        reqGetCategoryAll: (state, action: Types.ActionReqGetDataCategory) => {
            state.isLoading = true;
        },

        resGetCategoryAll: (state, action: Types.ActionResGetDataCategory) => {
            const { category } = action.payload;
            state.isLoading = false;
            state.category = category;
        },

        reqGetMediaAll: (state, action: Types.ActionReqGetDataMedia) => {
            state.isLoading = true;
        },

        resGetMediaAll: (state, action: Types.ActionResGetDataMedia) => {
            const { media } = action.payload;
            state.isLoading = false;
            state.media = media;
        },

    },
});

export const enginesAction = enginesSlice.actions;
export default enginesSlice.reducer;
