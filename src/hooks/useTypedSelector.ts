import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch