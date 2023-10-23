import { call, put, takeLatest } from "redux-saga/effects";
import HttpHandler from "src/util/HttpHandler";
import type { ActionReqUser } from "src/redux/reducer/user/Types";
import { commonAction } from "src/redux/reducer/common/CommonReducer";
import { userActions } from "src/redux/reducer/user/UserReducer";
import * as userService from "src/services/user/UserServices";
import {  ResFetchGetDataUser } from "src/services/user/Types";

interface Payload {
    username: string;
    token: string;
    accountId: string;
    account: string;
    msg: string;
    password: string;
    passwordNew: string;
    passwordCheckNew: string;
    refreshToken: string;
}

/**
 * Get data item tag
 * @param {object} action
 * @return {void}
 */
function* getUser(action: ActionReqUser) {
    try {
        const { token, refreshToken } = action.payload as Payload;
        const response: ResFetchGetDataUser = yield call(userService.fetchGetDataUser, token, refreshToken);
        switch (response.code) {
            case HttpHandler.SUCCESS: {
                const { user, accessTokenNew } = response.data;
                yield put(userActions.resDataUser({ user, accessTokenNew }));
                break;
            }
            case HttpHandler.FAIL:
                yield put(commonAction.displayErrorFailToken({ errorMsg: response.message, time_fail: response.data.time_fail, errMsg: response.data.errMsg }));
                break;
            case HttpHandler.UNAUTHORIZED:
                yield put(commonAction.displayErrorUnauthorized({ errorMsg: response.message, time_fail: response.data.time_fail, errMsg: response.data.errMsg }));
                break;
            default:
                yield put(commonAction.displayErrorServer({ errorMsg: response.message }));
                break;
        }
    } catch (error) {
        console.log(error);
    }
}




/**
 * Watch login action
 * @return {void}
 */
export function* watchFetchDataUser() {
    yield takeLatest(userActions.reqDataUser.type, getUser);
}
