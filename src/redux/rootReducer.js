import {combineReducers} from "redux"
import reducer from "./reducer"
import { storeReducer } from "./Slice/Slice"



const rootReducer= combineReducers({storeReducer, reducer })


export default rootReducer