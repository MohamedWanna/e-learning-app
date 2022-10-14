import axios from 'axios'
import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILED, REGISTER_SUCCESS, USER_AUTH_FAILED, USER_AUTH_SUCCESS, USER_LOAD } from "../actionTypes/userconstant"

export const signUp =(newUser,navigate)=> async (dispatch)=> {
    dispatch({type:USER_LOAD})
    try {
        const res = await axios.post("http://localhost:7000/user/signUp",newUser)
        console.log(res.data)
        dispatch({
            type: REGISTER_SUCCESS,
            payload:res.data
        }) 
        navigate("/signIn")
    } catch (error) {
        dispatch({
            type: REGISTER_FAILED,
            payload:error
        })
        console.dir(error.response.data);
        
        error.response.data.msg?
            alert(error.response.data.msg):
            error.response.data.forEach((el)=>{
            alert(el.msg);
        });
    }   
}

export const signIn =(user,navigate) => async (dispatch) => {
    dispatch({type:USER_LOAD})
    try {
        const res = await axios.post("http://localhost:7000/user/signIn",user)
        console.log(res.data)
        dispatch({
            type: LOGIN_SUCCESS,
            payload:res.data
        }) 
        navigate("/HOME")
    } catch (error) {
        dispatch({
            type: LOGIN_FAILED,
            payload:error
        })
        console.dir(error.response.data);
        
        error.response.data.msg ?
            alert(error.response.data.msg):
            error.response.data.forEach((el)=>{
            alert(el.msg);
        });
    }   
}
export const getUser = () => async (dispatch) => {
    dispatch({type:USER_LOAD})
    try {
        const opts = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }
        const res= await axios.get("http://localhost:7000/user/current",opts)
        dispatch({
            type: USER_AUTH_SUCCESS,
            payload: res.data.user
        })
    } catch (error) {
        dispatch({
            type: USER_AUTH_FAILED,
            payload: error
        })        
    }
}
export const logout = () => dispatch => {
    localStorage.removeItem("token")
    dispatch({
        type: LOGOUT
    })
} 

