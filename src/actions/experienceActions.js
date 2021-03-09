import { EXPERIENCE_LANGUAGE_FAIL, EXPERIENCE_LANGUAGE_REQUEST, EXPERIENCE_LANGUAGE_SUCCESS, EXPERIENCE_LOCATION_FAIL, EXPERIENCE_LOCATION_REQUEST, EXPERIENCE_LOCATION_SUCCESS, EXPERIENCE_THEME_FAIL, EXPERIENCE_THEME_REQUEST, EXPERIENCE_THEME_SUCCESS, EXPERIENCE_TYPE_FAIL, EXPERIENCE_TYPE_REQUEST, EXPERIENCE_TYPE_SUCCESS } from "../constants/experienceConstants";

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

export const experienceLocationAdd = (location) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_LOCATION_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {location}
        })

        dispatch({
            type: EXPERIENCE_LOCATION_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_LOCATION_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const experienceThemeAdd = (theme) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_THEME_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {theme}
        })

        dispatch({
            type: EXPERIENCE_THEME_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_THEME_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const experienceLanguageAdd = (language) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_LANGUAGE_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {language}
        })

        dispatch({
            type: EXPERIENCE_LANGUAGE_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_LANGUAGE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
