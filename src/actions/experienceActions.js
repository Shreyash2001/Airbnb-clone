import { EXPERIENCE_TYPE_FAIL, EXPERIENCE_TYPE_REQUEST, EXPERIENCE_TYPE_SUCCESS } from "../constants/experienceConstants";

export const experienceAdd = (experience) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_TYPE_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {experience}
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_TYPE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
