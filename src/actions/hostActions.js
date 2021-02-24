import axios from "axios";
import { HOSTED_PLACE_DETAILS_FAIL, HOSTED_PLACE_DETAILS_REQUEST, HOSTED_PLACE_DETAILS_SUCCESS, HOST_ADD_FAIL, HOST_ADD_REQUEST, HOST_ADD_SUCCESS, HOST_EMPTY, HOST_GET_FAIL, HOST_GET_REQUEST, HOST_GET_SUCCESS } from "../constants/hostConstants";

export const hostAddPlace = (title, image, price, description, country, address, rules, season, selectedValue ) => async (dispatch, getState) => {
    try {
        dispatch({ type: HOST_ADD_REQUEST });

        const {userLogin: {userInfo}} = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

         await axios.post("/host/create", {title, userInfo, image, price, description, country, address, rules, season, selectedValue }, config)

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

export const hostGetPlaces = () => async(dispatch) => {
    try {
        dispatch({ type: HOST_GET_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get("/host", config)

    dispatch({
        type: HOST_GET_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOST_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
    

}

export const hostedPlaceGetDetails = (id) => async(dispatch) => {
    try {
        dispatch({ type: HOSTED_PLACE_DETAILS_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/${id}`, config)

    dispatch({
        type: HOSTED_PLACE_DETAILS_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOSTED_PLACE_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
    

}