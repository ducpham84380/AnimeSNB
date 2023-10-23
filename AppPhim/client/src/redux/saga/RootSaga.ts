import { all, fork } from "redux-saga/effects";
import * as authSaga from "src/redux/saga/auth/AuthSaga";
import * as enginesSaga from "src/redux/saga/engines/EnginesSaga";
import * as userSaga from "src/redux/saga/user/UserSaga";
import * as uploadSaga from "src/redux/saga/upload/UploadSaga";


/**
 * Root saga
 * @return {void}
 */
export default function* rootSaga() {
    yield all([fork(authSaga.watchFetchToken)]);
    yield all([fork(enginesSaga.watchFetchDataEngines)]);
    yield all([fork(userSaga.watchFetchDataUser)]);
    yield all([fork(uploadSaga.watchFetchDataUser)]);
}
