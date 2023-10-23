import { ROOT_URL, CONTENT_TYPE, ENGINES } from "src/config/ApiConstants";
import * as Types from "./Types";

/**
 * Fetch get data sample
 * @return {object}
 */

export const fetchGetCategory = async (idMedia: number): Promise<Types.ResFetchGetCategory> => {
    const url = ROOT_URL + ENGINES.API_ENGINES_CATEGORY.URL;
    const response = await fetch(url, {
        method: ENGINES.API_ENGINES_CATEGORY.METHOD,
        body: JSON.stringify({ idMedia}),
        headers: {
            "Content-Type": CONTENT_TYPE,
        },
    });
    return await response.json();
};

export const fetchGetCategoryAll = async (): Promise<Types.ResFetchGetCategory> => {
    const url = ROOT_URL + ENGINES.API_ENGINES_CATEGORY_ALL.URL;
    const response = await fetch(url, {
        method: ENGINES.API_ENGINES_CATEGORY.METHOD,
        body: JSON.stringify({}),
        headers: {
            "Content-Type": CONTENT_TYPE,
        },
    });
    return await response.json();
};

export const fetchGetMediaAll = async (): Promise<Types.ResFetchGetMedia> => {
    const url = ROOT_URL + ENGINES.API_ENGINES_MEDIA_ALL.URL;
    const response = await fetch(url, {
        method: ENGINES.API_ENGINES_MEDIA_ALL.METHOD,
        body: JSON.stringify({}),
        headers: {
            "Content-Type": CONTENT_TYPE,
        },
    });
    return await response.json();
};

export const fetchCreateCategory = async (idMedia:number, nameCategory:string): Promise<Types.ResFetchCreateCategory> => {
    const url = ROOT_URL + ENGINES.API_ENGINES_CREATE_CATEGORY.URL;
    const response = await fetch(url, {
        method: ENGINES.API_ENGINES_CREATE_CATEGORY.METHOD,
        body: JSON.stringify({idMedia, nameCategory}),
        headers: {
            "Content-Type": CONTENT_TYPE,
        },
    });
    return await response.json();
};

export const fetchUpdateCategory = async (idMedia:number, nameCategory:string,idCategory:number): Promise<Types.ResFetchCreateCategory> => {
    const url = ROOT_URL + ENGINES.API_ENGINES_UPDATE_CATEGORY.URL;
    const response = await fetch(url, {
        method: ENGINES.API_ENGINES_UPDATE_CATEGORY.METHOD,
        body: JSON.stringify({idMedia, nameCategory,idCategory}),
        headers: {
            "Content-Type": CONTENT_TYPE,
        },
    });
    return await response.json();
};

export const fetchDeleteCategory = async (idCategory:number): Promise<Types.ResFetchCreateCategory> => {
    const url = ROOT_URL + ENGINES.API_ENGINES_DELETE_CATEGORY.URL;
    const response = await fetch(url, {
        method: ENGINES.API_ENGINES_DELETE_CATEGORY.METHOD,
        body: JSON.stringify({idCategory}),
        headers: {
            "Content-Type": CONTENT_TYPE,
        },
    });
    return await response.json();
};

export const fetchGetFilmAll = async (): Promise<Types.ResFetchGetMedia> => {
    const url = ROOT_URL + ENGINES.API_ENGINES_FILM_ALL.URL;
    const response = await fetch(url, {
        method: ENGINES.API_ENGINES_FILM_ALL.METHOD,
        body: JSON.stringify({}),
        headers: {
            "Content-Type": CONTENT_TYPE,
        },
    });
    return await response.json();
};
