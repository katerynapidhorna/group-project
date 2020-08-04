import { NEW_SNIPPET_SUCCESS } from "./actions";

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_SNIPPET_SUCCESS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
