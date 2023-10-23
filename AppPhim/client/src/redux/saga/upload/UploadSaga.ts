import { call, put, takeLatest } from "redux-saga/effects";
import HttpHandler from "src/util/HttpHandler";
import type { ActionReqUploadFile } from "src/redux/reducer/upload/Types";
import { commonAction } from "src/redux/reducer/common/CommonReducer";
import { uploadActions } from "src/redux/reducer/upload/UploadReducer";
import * as uploadService from "src/services/upload/UploadService";
import {  ResFetchGetDataUpload } from "src/services/upload/Types";

interface Payload {
    file:File;
}

/**
 * Get data item tag
 * @param {object} action
 * @return {void}
 */
function* uploadFile(action: ActionReqUploadFile) {
    try {
        const {file} = action.payload as Payload;
        const response: ResFetchGetDataUpload = yield call(uploadService.fetchGetDataUpload, file);
        switch (response.code) {
            case HttpHandler.SUCCESS: {
                const {filename } = response.data;
                yield put(uploadActions.resDataUpload({ filename }));
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
    yield takeLatest(uploadActions.reqDataUpload.type, uploadFile);
}
