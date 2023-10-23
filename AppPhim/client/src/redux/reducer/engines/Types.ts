import { PayloadAction } from "@reduxjs/toolkit";

export type EnginesState = {
    isLoading: boolean;
    category: [
        {
            id: number;
            title: string;
            media: string;
        }
    ];
    media: [
        {
            id: number;
            title: string;
        }
    ];
    film: [
        {
            id: number;
            categories: string;
            title: string;
            title_image: string;
            image: string;
            language: string;
            year: string;
            reviews: string;
            views: number;
        }
    ];
    msg: string;
};

export type ActionReqGetDataCategory = PayloadAction<{}>;
export type ActionResGetDataCategory = PayloadAction<{
    category: EnginesState["category"];
}>;

export type ActionReqGetDataMedia = PayloadAction<{}>;
export type ActionResGetDataMedia = PayloadAction<{
    media: EnginesState["media"];
}>;

export type ActionReqCreateCategory = PayloadAction<{}>;
export type ActionResCreateCategory = PayloadAction<{
    msg: EnginesState["msg"];
}>;

export type ActionReqGetDataFilm = PayloadAction<{}>;
export type ActionResGetDataFilm = PayloadAction<{
    film: EnginesState["film"];
}>;
