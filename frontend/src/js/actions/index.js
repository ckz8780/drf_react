import { ADD_LEAD, TRIGGER_REFETCH } from "../constants/action-types";

export const addLead = lead => ({ type: ADD_LEAD, payload: lead });
export const triggerRefetch = () => ({ type: TRIGGER_REFETCH });
