import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import * as reducers  from "./store/reducers/index";

import reduxThunk from 'redux-thunk';

const combinedReducers = combineReducers({
    res: reducers.resultReducer,
    ctr: reducers.counterReducer
});

// redux dev tool ;)
const logger = store => {
    return next => {
        return action => {
            console.log("Middleware Dispatching", action);
            const result = next(action);
            console.log("Middleware store", store.getState());
            return result;
        }
    }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combinedReducers, composeEnhancers(applyMiddleware(logger, reduxThunk)));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));
registerServiceWorker();
