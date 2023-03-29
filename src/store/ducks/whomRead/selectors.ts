import {AppStateType} from "../../store";
import {WhomReadType} from "./contacts/state";

const selectWhomRead = (state: AppStateType): WhomReadType => state.whomRead

export const selectWhomReadItems = (state: AppStateType): WhomReadType["items"] => selectWhomRead(state).items