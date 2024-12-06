import { bindActionCreators } from "redux"
import { useAppDispatch } from "./useTypedSelector"
import  ActionCreators from "../store/action-creators/index"

export const useActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}