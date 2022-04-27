import { createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import promiseMiddleware from 'redux-promise-middleware'

import rootReducers from "./reducers/index";

const middleware = applyMiddleware(logger, promiseMiddleware)
const store = createStore(rootReducers, middleware)

export default store