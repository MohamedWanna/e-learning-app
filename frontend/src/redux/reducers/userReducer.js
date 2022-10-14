import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILED, REGISTER_SUCCESS, USER_AUTH_FAILED, USER_AUTH_SUCCESS, USER_LOAD } from "../actionTypes/userconstant"

const initialState = {
    loading: false,
    error:null,
    currentuser:{}
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case USER_LOAD:
            return { ...state, loading:true }
        case REGISTER_SUCCESS:
            return {...state,currentuser:payload.user,loading:false}
        case REGISTER_FAILED:
            return {...state,error:payload,loading:false}
        case LOGIN_SUCCESS:
            localStorage.setItem("token",payload.token)
            return {...state,currentuser:payload.user,loading:false}
        case LOGIN_FAILED:
            return {...state,error:payload,loading:false}
        case USER_AUTH_SUCCESS:
            return {...state, currentuser:payload, loading:false}
            case USER_AUTH_FAILED:
                return {...state, error:payload, loading:false}
        case LOGOUT:
            return { loading: false, error:null, currentuser:null }       
        default:
            return state
    }
}


export default userReducer



