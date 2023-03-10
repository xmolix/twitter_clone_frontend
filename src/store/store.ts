import {applyMiddleware, compose, legacy_createStore} from "redux";
import {rootReducer} from "./rootReducer";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./rootSaga";

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

const sagaMiddleware = createSagaMiddleware()

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>