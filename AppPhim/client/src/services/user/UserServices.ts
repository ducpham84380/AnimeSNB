import { ROOT_URL, USER, CONTENT_TYPE } from "src/config/ApiConstants";
import { ResFetchGetDataUser } from "src/services/user/Types";

/**
 * Get data chart, grid
@return {object}
 */
export const fetchGetDataUser = async (token: string, refreshToken: string): Promise<ResFetchGetDataUser> => {
    const url = ROOT_URL + USER.API_USER_PROFILE.URL;
    const response = await fetch(url, {
        method: USER.API_USER_PROFILE.METHOD,
        body: JSON.stringify({ token, refreshToken }),
        headers: {
            "Content-Type": CONTENT_TYPE,
        },
    });
    return await response.json();
};