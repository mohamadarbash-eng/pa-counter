const redux = require('redux');
const createStore = redux.createStore;

// initialState
const initialState = {
    counter: 0
};

// reducers
const rootReducer = (state = initialState, action) => {
    let currentState;
    switch (action.type) {
        case 'INC_COUNTER':
            currentState = {
                ...state,
                counter: state.counter + 1
            };
        break;
        case 'DEC_COUNTER':
            currentState = {
                ...state,
                counter: state.counter - 1
            };
            break;
        case 'SUB_COUNTER':
            currentState = {
                ...state,
                counter: state.counter - action.value
            };
            break;
        case 'ADD_COUNTER':
            currentState = {
                ...state,
                counter: state.counter + action.value
            };
        break;
        default:
            currentState = {...state};
    }
    return currentState;
};

// store
const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// Dispatching
store.dispatch({type: 'INC_COUNTER'});

store.dispatch({type: 'ADD_COUNTER', value: 5});

