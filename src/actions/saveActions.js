import axios from "axios";
import { SAVE_GET_FAIL, SAVE_GET_REQUEST, SAVE_GET_SUCCESS } from "../constants/saveConstants";

export const saveAddPlace = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: SAVE_GET_REQUEST });

        const {userLogin: {userInfo}} = getState()
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post("/save", { id }, config)

        dispatch({
            type: SAVE_GET_SUCCESS,
            payload: data
        })

        localStorage.setItem("savePlaceInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type:SAVE_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

