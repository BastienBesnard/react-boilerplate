import { ADD_COUNTER, RECEIVE_NAME_INFORMATION } from "./actionTypes";

const initialState = {
    counter: 0,
    quote: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        // Sample: Simple action
        case ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            };
        // Sample: Async action
        case RECEIVE_NAME_INFORMATION:
            return {
                ...state,
                quote: action.quote
            };
        default:
            return state;
    }
}
