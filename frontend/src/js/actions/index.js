import { ADD_LEAD, TRIGGER_REFETCH } from "../constants/action-types";

export const addLead = lead => ({ type: ADD_LEAD, payload: lead });
export const triggerRefetch = trigger => ({ type: TRIGGER_REFETCH, payload: trigger });
