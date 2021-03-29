import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_DETAILS_FAIL, USER_UPDATE_DETAILS_REQUEST, USER_UPDATE_DETAILS_SUCCESS } from "../constants/userConstants"
import axios from "axios"

export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({type: USER_LOGIN_REQUEST})

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const { data } = await axios.post("/users/login", {email, password}, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo")
    dispatch({type: USER_LOGOUT})
}

export const registerUser = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const { data } = await axios.post("/users/register", {name, email, password}, config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            paylaod: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type:USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const updateUser = (name, email) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATE_DETAILS_REQUEST })
        const {userLogin: {userInfo}} = getState()

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization:`Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put("/users/update-details", {name, email}, config)

        dispatch({
            type: USER_UPDATE_DETAILS_SUCCESS,
            paylaod: data
        })


    } catch (error) {
        dispatch({
            type:USER_UPDATE_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}