import type { Response } from "src/config/ApiConstants";
import { AuthState } from "src/redux/reducer/auth/Types";
import { CommonState } from "src/redux/reducer/common/Types";

export type ResFetchGetDataLogin = Response<{
    msg: AuthState["msg"];
    isAdmin: AuthState["isAdmin"];
    accessToken: AuthState["accessToken"];
    refreshToken: AuthState["refreshToken"];
    time_fail: CommonState["time_fail"];
    number_failed: CommonState["number_failed"];
    errMsg: CommonState["errMsg"];
}>;

export type ResFetchLogOut = Response<{
    msg: AuthState["msg"];
    time_fail: CommonState["time_fail"];
    number_failed: CommonState["number_failed"];
    errMsg: CommonState["errMsg"];
}>;