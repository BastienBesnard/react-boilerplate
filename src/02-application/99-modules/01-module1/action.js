// Action types
export const ADD_COUNTER = "ADD_COUNTER";
export const RECEIVE_NAME_INFORMATION = "RECEIVE_NAME_INFORMATION";

export const addCounter = () => ({
    type: ADD_COUNTER
});

export const receiveNameInformation = json => ({
    type: RECEIVE_NAME_INFORMATION,
    quote: json
});

export const loadNameInformation = name => dispatch => {
  return fetch(`https://api.agify.io?name=${name}`)
    .then(res => res.json())
    .then( json => {
      return dispatch(receiveNameInformation(json));
    });
};