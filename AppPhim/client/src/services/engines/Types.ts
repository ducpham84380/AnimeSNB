import type { Response } from "src/config/ApiConstants";
import { EnginesState } from "src/redux/reducer/engines/Types";
import { CommonState } from "src/redux/reducer/common/Types";

export type ResFetchGetCategory = Response<{
    category: EnginesState["category"];
    time_fail: CommonState["time_fail"];
    number_failed: CommonState["number_failed"];
    errMsg: CommonState["errMsg"];
}>;

export type ResFetchGetMedia= Response<{
    media: EnginesState["media"];
    time_fail: CommonState["time_fail"];
    number_failed: CommonState["number_failed"];
    errMsg: CommonState["errMsg"];
}>;

export type ResFetchCreateCategory= Response<{
    msg: EnginesState["msg"];
    time_fail: CommonState["time_fail"];
    number_failed: CommonState["number_failed"];
    errMsg: CommonState["errMsg"];
}>;

export type ResFetchGetFilm = Response<{
    film: EnginesState["film"];
    time_fail: CommonState["time_fail"];
    number_failed: CommonState["number_failed"];
    errMsg: CommonState["errMsg"];
}>;