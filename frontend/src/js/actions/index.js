import { TRIGGER_REFETCH, UPDATE_TABLE_DATA } from "../constants/action-types";

export const triggerRefetch = trigger => ({ type: TRIGGER_REFETCH, payload: trigger });
export const updateTableData = newdata => ({ type: UPDATE_TABLE_DATA, payload: newdata });
