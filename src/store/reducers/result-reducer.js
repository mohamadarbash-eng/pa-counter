import actionsEnum from "../actions";
import shortid from 'shortid';

const initialState = {
    results: []
};

const resultReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionsEnum.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: shortid.generate(), value: action.result})
            }
        case actionsEnum.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)
            const updatedArray = state.results.filter(result => result.id !== action.resultId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default resultReducer;
