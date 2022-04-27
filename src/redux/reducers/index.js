import { combineReducers } from "redux";
import {latestReducer,searchReducer,recipeReducer, detailReducer} from "./recipe";


const rootReducers = combineReducers({
    latest : latestReducer,
    search : searchReducer,
    recipe : recipeReducer,
    detail : detailReducer
})

export default rootReducers