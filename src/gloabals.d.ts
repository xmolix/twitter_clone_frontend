import {compose} from "redux";

declare module '*.css';
declare module '*.scss';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}