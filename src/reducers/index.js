import counterReducer from "./counter";
import loggerReducer from "./isLogged";
import { combineReducers } from 'redux'

const allReducer = combineReducers({
    counter : counterReducer,
    isLogged : loggerReducer
})


export default allReducer