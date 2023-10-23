import { ROOT_URL, CONTENT_TYPE, AUTH } from "../../config/ApiConstants";
import * as Types from "./Types";

/**
 * Fetch get data sample
 * @return {object}
 */

export const fetchLogin = async ( email: string, password: string): Promise<Types.ResFetchGetDataLogin> => {
    const url = ROOT_URL + AUTH.API_SIGN_IN.URL;
    const response = await fetch(url, {
        method: AUTH.API_SIGN_IN.METHOD,
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": CONTENT_TYPE,
        },
    });

    return await response.json();
};

export const fetchLogOut = async (idUser: number, refreshToken: string): Promise<Types.ResFetchLogOut> => {
    const url = ROOT_URL + AUTH.API_LOG_OUT.URL;
    const response = await fetch(url, {
        method: AUTH.API_LOG_OUT.METHOD,
        body: JSON.stringify({ idUser, refreshToken }),
        headers: {
            "Content-Type": CONTENT_TYPE,
        },
    });
    return await response.json();
};

