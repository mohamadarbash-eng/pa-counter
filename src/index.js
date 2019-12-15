import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import resultReducer from "./store/reducers/result-reducer";
import counterReducer from "./store/reducers/counter-reducer";

const combinedReducers = combineReducers({
    res: resultReducer,
    ctr: counterReducer
});

const store = createStore(combinedReducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
