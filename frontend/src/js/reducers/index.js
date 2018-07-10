import { ADD_LEAD, TRIGGER_REFETCH } from "../constants/action-types";

const initialState = {
  leads: [],
  triggerRefetch: false,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_LEAD:
			return { ...state, leads: [...state.leads, action.payload] };
		case TRIGGER_REFETCH:
			return { ...state, triggerRefetch: action.payload };
		default:
			return state;
	}
};

export default rootReducer;