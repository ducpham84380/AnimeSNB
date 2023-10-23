import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "src/redux/saga/RootSaga";

import commonReducer from "src/redux/reducer/common/CommonReducer";
import authReducer from "src/redux/reducer/auth/AuthReducer";
import enginesReducer from "src/redux/reducer/engines/EnginesReducer";
import userReducer from "src/redux/reducer/user/UserReducer";
import uploadReducer from "src/redux/reducer/upload/UploadReducer";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        authReducer,
        commonReducer,
        enginesReducer,
        userReducer,
        uploadReducer,
    },
    middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
