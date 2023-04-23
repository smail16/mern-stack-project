import {combineReducers} from "redux"
import reducer from "./reducer"
import artcileReducer from "./productReducer"
import { storeReducer } from "./Slice/Slice"



const rootReducer= combineReducers({storeReducer, reducer, artcileReducer })


export default rootReducer