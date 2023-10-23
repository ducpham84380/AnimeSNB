import { ROOT_URL, UPLOAD } from "src/config/ApiConstants";
import { ResFetchGetDataUpload } from "src/services/upload/Types";

/**
 * Get data chart, grid
@return {object}
 */
export const fetchGetDataUpload = async (file:File): Promise<ResFetchGetDataUpload> => {
    const url = ROOT_URL + UPLOAD.API_UPLOAD_FILE_IMAGES.URL;
      const formData = new FormData();
        formData.append('file', file);
    const response = await fetch(url, {
        method: UPLOAD.API_UPLOAD_FILE_IMAGES.METHOD,
        body: formData,
        headers: {
            // "Content-Type": CONTENT_TYPE,
        },
    });
    return await response.json();
};