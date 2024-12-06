import { combineReducers } from "redux";
import { userReduser } from "./userReduser";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
    user: userReduser,
    todo: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>