import { actionsEnum } from "./actions-types";

export const increment = ()=> {
    // thunk ;)
    return (dispatch, getState) => {
        // simulate network
        setTimeout(() => {
            dispatch({
                type: actionsEnum.INCREMENT
            });
        }, 2000);
    };
};

export const decrement = ()=> {
    return {
        type: actionsEnum.DECREMENT
    }
};

export const add = (payload)=> {
    return {
        type: actionsEnum.ADD,
        payload: {
            ...payload
        }
    }
};

export const sub = (payload)=> {
    return {
        type: actionsEnum.SUBTRACT,
        payload: {
            ...payload
        }
    }
};
