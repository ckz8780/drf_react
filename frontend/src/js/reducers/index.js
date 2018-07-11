import { TRIGGER_REFETCH, UPDATE_TABLE_DATA } from "../constants/action-types";

const initialState = {
  triggerRefetch: false,
  updateTableData: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case TRIGGER_REFETCH:
			return { ...state, triggerRefetch: action.payload };
		case UPDATE_TABLE_DATA:
			return { ...state, updateTableData: action.payload};
		default:
			return state;
	}
};

export default rootReducer;