import { actionsEnum } from "./actions-types";


// the issue here come out, when you click increment button, and then click immediately on result button
export const storeResult = (payload)=> {
    return (dispatch, getState) => {
        setTimeout(()=> {
            debugger;
            const counter = getState().ctr.counter;
            dispatch({
                         type: actionsEnum.STORE_RESULT,
                         payload: {
                             ...payload,
                             counter
                         }
                     })
        },2000)
    };
};


export const deleteResult = (payload)=> {
    return {
        type: actionsEnum.DELETE_RESULT,
        payload: {
            ...payload
        }
    }
};
