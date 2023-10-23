import type { Response } from "src/config/ApiConstants";
import { UploadState } from "src/redux/reducer/upload/Types";
import { CommonState } from "src/redux/reducer/common/Types";

export type ResFetchGetDataUpload = Response<{
    time_fail: CommonState["time_fail"];
    number_failed: CommonState["number_failed"];
    errMsg: CommonState["errMsg"];
    filename: UploadState["filename"];
}>;
