import { ADD_COUNTER, RECEIVE_NAME_INFORMATION } from "./actionTypes";

import service from "../../02-core/services";

export const addCounter = () => ({
    type: ADD_COUNTER
});

export const loadNameInformation = (name) => (dispatch) => {
    return service.loadNameInformation(name).then((json) => {
        return dispatch({
            type: RECEIVE_NAME_INFORMATION,
            quote: json
        });
    });
};
