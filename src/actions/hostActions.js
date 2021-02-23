import axios from "axios";
import { HOST_ADD_FAIL, HOST_ADD_REQUEST, HOST_ADD_SUCCESS, HOST_EMPTY } from "../constants/hostConstants";

export const hostAddPlace = (title, image, price, description, country, address, rules, season ) => async (dispatch, getState) => {
    try {
        dispatch({ type: HOST_ADD_REQUEST });

        const {userLogin: {userInfo}} = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

         await axios.post("/host/create", {title, userInfo, image, price, description, country, address, rules, season }, config)

        dispatch({
            type: HOST_ADD_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:HOST_ADD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostEmpty = () => (dispatch) => {
    dispatch({ type: HOST_EMPTY })
}