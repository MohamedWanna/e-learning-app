import axios from "axios"
import { ADDSESSIONFAILED, ADDSESSIONSUCCESS, GETSESSIONFAILED, GETSESSIONSUCCESS, SESSION_LOAD } from "../actionTypes/sessionconstant"

export const getAllSessions = ()=>async(dispatch)=>{
    dispatch({ type: SESSION_LOAD })
    try {
        const res = await axios.get("http://localhost:7000/session")
        console.log(res)
        dispatch({
            type: GETSESSIONSUCCESS,
            payload:res.data.allSessions
        })
    } catch (error) {
        dispatch({
            type: GETSESSIONFAILED,
            payload:error
        })
    }
}
export const addSession= (newsession) => async(dispatch)=>{
    console.log(newsession)
    try {
        const response= await axios.post("http://localhost:7000/session/addSession",newsession)
        dispatch({
            type:ADDSESSIONSUCCESS,
        })
        console.log(response.data)
        dispatch(getAllSessions())
    } catch (error) {
        dispatch({
            type:ADDSESSIONFAILED,
            payload:error
        })
    }
}