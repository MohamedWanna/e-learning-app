import { ADDSESSIONFAILED, ADDSESSIONSUCCESS, GETSESSIONFAILED, GETSESSIONSUCCESS, SESSION_LOAD } from "../actionTypes/sessionconstant";

const initialState = {
    loading: false,
    sessions: [],
    errors: null,
};

export const sessionReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SESSION_LOAD:
            return { ...state, loading: true };
        case GETSESSIONSUCCESS:
            return { ...state, sessions: payload.allSessions, loading:false };
        case GETSESSIONFAILED:
            return { ...state, errors: payload, loading:false }
        default:
            return state
        case ADDSESSIONSUCCESS:
            return {...state,sessions:payload.newsession,loading:false}
        case ADDSESSIONFAILED:
            return {...state,errors:payload}
    }
}
