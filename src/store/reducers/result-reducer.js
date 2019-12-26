import { actionsEnum } from "../actions/actions-types";
import shortId from "shortid";

const initialState = {
    results: []
};

export const resultReducer = (state = initialState, action) => {
    const {payload} = action;
    switch (action.type) {
        case actionsEnum.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: shortId.generate(), value: payload.result})
            }
        case actionsEnum.DELETE_RESULT:
            // 1:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            // 2:
            const updatedArray = state.results.filter(result => result.id !== payload.resultId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};

