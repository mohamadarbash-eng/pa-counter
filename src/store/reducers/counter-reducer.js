import {actionsEnum} from "../actions/actions-types";
import { objectCreator } from "./utility";

const initialState = {
    counter: 0
};


export const counterReducer = (state = initialState, action) => {
    let currentState;
    const {payload} = action;
    switch (action.type) {
        case actionsEnum.INCREMENT:
            currentState = objectCreator(state, { counter: state.counter + 1 });
            break;
        case actionsEnum.DECREMENT:
            currentState = objectCreator(state, { counter: state.counter - 1 });
            break;
        case actionsEnum.SUBTRACT:
            currentState = objectCreator(state, { counter: state.counter - payload.value });
            break;
        case actionsEnum.ADD:
            // there is possibility to use utility function to make switch case leaner ;) but I leave it for comparable purposes
            currentState = {
                ...state,
                counter: state.counter + payload.value
            };
            break;
        default:
            currentState = {...state};
    }
    return currentState;
};

