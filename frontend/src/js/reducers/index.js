import { ADD_LEAD } from "../constants/action-types";

const initialState = {
  leads: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LEAD:
      return { ...state, leads: [...state.leads, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;