export const ROOT_URL = process.env.REACT_APP_NODEJS_HOST + ":" + process.env.REACT_APP_NODEJS_PORT;
export const ROOT_URL_UPLOAD = process.env.REACT_APP_NODEJS_HOST + ":" + process.env.REACT_APP_NODEJS_PORT+"/"+process.env.REACT_APP_NODEJS_PORT_UPLOAD+"/";
export const CONTENT_TYPE = "application/json; charset=UTF-8";

export type Response<Data> = {
    message: string;
    code: number;
    data: Data;
};

export const AUTH = {
    API_SIGN_IN: {
        URL: "/auth/api-user-login",
        METHOD: "POST",
    },

    API_LOG_OUT: {
        URL: "/auth/api-user-logout",
        METHOD: "POST",
    },

};

export const ENGINES = {
    API_ENGINES_CATEGORY: {
        URL: "/engines/api-category",
        METHOD: "POST",
    },
    
    API_ENGINES_CATEGORY_ALL: {
        URL: "/engines/api-category-all",
        METHOD: "POST",
    },

    API_ENGINES_CREATE_CATEGORY: {
        URL: "/engines/api-create-category",
        METHOD: "POST",
    },

    API_ENGINES_UPDATE_CATEGORY: {
        URL: "/engines/api-update-category",
        METHOD: "POST",
    },

    API_ENGINES_DELETE_CATEGORY: {
        URL: "/engines/api-delete-category",
        METHOD: "POST",
    },

    API_ENGINES_MEDIA_ALL: {
        URL: "/engines/api-media-all",
        METHOD: "POST",
    },

    API_ENGINES_FILM_ALL: {
        URL: "/engines/api-film-all",
        METHOD: "POST",
    }, 

    API_ENGINES_FILM_SHOW: {
        URL: "/engines/api-film-show",
        METHOD: "POST",
    },
    
};

export const USER = {

    API_USER_PROFILE: {
        URL: "/user/api-profile",
        METHOD: "POST",
    },

    API_UPDATE_PASSWORD: {
        URL: "/user/api-update-password",
        METHOD: "POST",
    }
};

export const UPLOAD = {

    API_UPLOAD_FILE_IMAGES: {
        URL: "/upload/api-upload-images",
        METHOD: "POST",
    }
    
};