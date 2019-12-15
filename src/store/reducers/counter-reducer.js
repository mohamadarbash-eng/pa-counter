import actionsEnum from "../actions";

const initialState = {
    counter: 0
};


const counterReducer = (state = initialState, action) => {
    let currentState;
    switch (action.type) {
        case actionsEnum.INCREMENT:
            currentState = {
                ...state,
                counter: state.counter + 1
            };
            break;
        case actionsEnum.DECREMENT:
            currentState = {
                ...state,
                counter: state.counter - 1
            };
            break;
        case actionsEnum.SUBTRACT:
            currentState = {
                ...state,
                counter: state.counter - action.value
            };
            break;
        case actionsEnum.ADD:
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

export default counterReducer;
