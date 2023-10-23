import { call, put, takeLatest } from "redux-saga/effects";
import HttpHandler from "src/util/HttpHandler";
import type { ActionReqGetDataCategory, ActionReqGetDataMedia ,ActionReqCreateCategory,ActionReqGetDataFilm} from "src/redux/reducer/engines/Types";
import { commonAction } from "../../reducer/common/CommonReducer";
import { enginesAction } from "src/redux/reducer/engines/EnginesReducer";
import * as enginesService from "src/services/engines/EnginesService";
import { ResFetchGetCategory, ResFetchGetMedia, ResFetchCreateCategory, ResFetchGetFilm } from "src/services/engines/Types";

interface Payload {
    idMedia:number;
    nameCategory:string;
    idCategory:number;
}

/**
 * Get data item tag
 * @param {object} action
 * @return {void}
 */
function* getCreateCategory(action: ActionReqCreateCategory) {
    try {
        const { idMedia} = action.payload as Payload;
        const { nameCategory} = action.payload as Payload;
        const response: ResFetchCreateCategory = yield call(enginesService.fetchCreateCategory,idMedia,nameCategory);
        switch (response.code) {
            case HttpHandler.SUCCESS: {
                const { msg } = response.data;
                yield put(enginesAction.resCreateOrUpdateOrDeleteCategory({ msg }));
                break;
            }
            case HttpHandler.FAIL:
                yield put(commonAction.displayErrorFail({ errorMsg: response.message, time_fail: response.data.time_fail, errMsg: response.data.errMsg }));
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

function* getUpdateCategory(action: ActionReqCreateCategory) {
    try {
        const { idMedia} = action.payload as Payload;
        const { nameCategory} = action.payload as Payload;
        const { idCategory} = action.payload as Payload;
        const response: ResFetchCreateCategory = yield call(enginesService.fetchUpdateCategory,idMedia,nameCategory,idCategory);
        switch (response.code) {
            case HttpHandler.SUCCESS: {
                const { msg } = response.data;
                yield put(enginesAction.resCreateOrUpdateOrDeleteCategory({ msg }));
                break;
            }
            case HttpHandler.FAIL:
                yield put(commonAction.displayErrorFail({ errorMsg: response.message, time_fail: response.data.time_fail, errMsg: response.data.errMsg }));
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

function* getDeleteCategory(action: ActionReqCreateCategory) {
    try {
 
        const { idCategory} = action.payload as Payload;
        const response: ResFetchCreateCategory = yield call(enginesService.fetchDeleteCategory,idCategory);
        switch (response.code) {
            case HttpHandler.SUCCESS: {
                const { msg } = response.data;
                yield put(enginesAction.resCreateOrUpdateOrDeleteCategory({ msg }));
                break;
            }
            case HttpHandler.FAIL:
                yield put(commonAction.displayErrorFail({ errorMsg: response.message, time_fail: response.data.time_fail, errMsg: response.data.errMsg }));
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

function* getDataCategory(action: ActionReqGetDataCategory) {
    try {
        const { idMedia } = action.payload as Payload;
        const response: ResFetchGetCategory = yield call(enginesService.fetchGetCategory, idMedia);
        switch (response.code) {
            case HttpHandler.SUCCESS: {
                const { category } = response.data;
                yield put(enginesAction.resGetCategory({ category }));
                break;
            }
            case HttpHandler.FAIL:
                yield put(commonAction.displayErrorFail({ errorMsg: response.message, time_fail: response.data.time_fail, errMsg: response.data.errMsg }));
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

function* getDataCategoryAll(action: ActionReqGetDataMedia) {
    try {
        const response: ResFetchGetCategory = yield call(enginesService.fetchGetCategoryAll);
        switch (response.code) {
            case HttpHandler.SUCCESS: {
                const { category } = response.data;
                yield put(enginesAction.resGetCategoryAll({ category }));
                break;
            }
            case HttpHandler.FAIL:
                yield put(commonAction.displayErrorFail({ errorMsg: response.message, time_fail: response.data.time_fail, errMsg: response.data.errMsg }));
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


function* getDataMediaAll(action: ActionReqGetDataMedia) {
    try {
        const response: ResFetchGetMedia = yield call(enginesService.fetchGetMediaAll);
        switch (response.code) {
            case HttpHandler.SUCCESS: {
                const { media } = response.data;
                yield put(enginesAction.resGetMediaAll({ media }));
                break;
            }
            case HttpHandler.FAIL:
                yield put(commonAction.displayErrorFail({ errorMsg: response.message, time_fail: response.data.time_fail, errMsg: response.data.errMsg }));
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

function* getDataFilmAll(action: ActionReqGetDataFilm) {
    try {
        const response: ResFetchGetFilm = yield call(enginesService.fetchGetFilmAll);
        switch (response.code) {
            case HttpHandler.SUCCESS: {
                const { film } = response.data;
                yield put(enginesAction.resGetFilm({ film }));
                break;
            }
            case HttpHandler.FAIL:
                yield put(commonAction.displayErrorFail({ errorMsg: response.message, time_fail: response.data.time_fail, errMsg: response.data.errMsg }));
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
export function* watchFetchDataEngines() {
    yield takeLatest(enginesAction.reqGetCategory.type, getDataCategory);
    yield takeLatest(enginesAction.reqGetCategoryAll.type, getDataCategoryAll);
    yield takeLatest(enginesAction.reqGetMediaAll.type, getDataMediaAll);
    yield takeLatest(enginesAction.reqCreateCategory.type, getCreateCategory);
    yield takeLatest(enginesAction.reqUpdateCategory.type, getUpdateCategory);
    yield takeLatest(enginesAction.reqDeleteCategory.type, getDeleteCategory);
    yield takeLatest(enginesAction.reqGetFilm.type, getDataFilmAll);
}
