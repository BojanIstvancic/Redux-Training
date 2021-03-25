/*
 REDUCER = LOGIC
 in reducer we are holding piece of the state, and depending on the action we modify that state
*/

const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
