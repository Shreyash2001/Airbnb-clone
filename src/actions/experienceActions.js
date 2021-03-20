import { EXPERIENCE_ADVENTURE_FAIL, EXPERIENCE_ADVENTURE_REQUEST, EXPERIENCE_ADVENTURE_SUCCESS, EXPERIENCE_AGE_FAIL, EXPERIENCE_AGE_REQUEST, EXPERIENCE_AGE_SUCCESS, EXPERIENCE_AVAILABILITY_FAIL, EXPERIENCE_AVAILABILITY_REQUEST, EXPERIENCE_AVAILABILITY_SUCCESS, EXPERIENCE_BROADCAST_FAIL, EXPERIENCE_BROADCAST_REQUEST, EXPERIENCE_BROADCAST_SUCCESS, EXPERIENCE_CREATE_REVIEW_FAIL, EXPERIENCE_CREATE_REVIEW_REQUEST, EXPERIENCE_CREATE_REVIEW_SUCCESS, EXPERIENCE_DESCRIPTION_FAIL, EXPERIENCE_DESCRIPTION_REQUEST, EXPERIENCE_DESCRIPTION_SUCCESS, EXPERIENCE_GET_CHILD_EXPERIENCE_FAIL, EXPERIENCE_GET_CHILD_EXPERIENCE_REQUEST, EXPERIENCE_GET_CHILD_EXPERIENCE_SUCCESS, EXPERIENCE_GET_COOKING_FAIL, EXPERIENCE_GET_COOKING_REQUEST, EXPERIENCE_GET_COOKING_SUCCESS, EXPERIENCE_GET_EVERYDAY_EXPERIENCE_FAIL, EXPERIENCE_GET_EVERYDAY_EXPERIENCE_REQUEST, EXPERIENCE_GET_EVERYDAY_EXPERIENCE_SUCCESS, EXPERIENCE_GET_EXPERIENCEBYID_RESULT_FAIL, EXPERIENCE_GET_EXPERIENCEBYID_RESULT_REQUEST, EXPERIENCE_GET_EXPERIENCEBYID_RESULT_SUCCESS, EXPERIENCE_GET_FAIL, EXPERIENCE_GET_FILTERED_RESULT_FAIL, EXPERIENCE_GET_FILTERED_RESULT_REQUEST, EXPERIENCE_GET_FILTERED_RESULT_SUCCESS, EXPERIENCE_GET_LAST_WEEK_FAIL, EXPERIENCE_GET_LAST_WEEK_REQUEST, EXPERIENCE_GET_LAST_WEEK_SUCCESS, EXPERIENCE_GET_MAIN_FILTER_RESULT_FAIL, EXPERIENCE_GET_MAIN_FILTER_RESULT_REQUEST, EXPERIENCE_GET_MAIN_FILTER_RESULT_SUCCESS, EXPERIENCE_GET_POPULAR_IN_INDIA_FAIL, EXPERIENCE_GET_POPULAR_IN_INDIA_REQUEST, EXPERIENCE_GET_POPULAR_IN_INDIA_SUCCESS, EXPERIENCE_GET_REQUEST, EXPERIENCE_GET_SIMILAR_EXPERIENCE_FAIL, EXPERIENCE_GET_SIMILAR_EXPERIENCE_REQUEST, EXPERIENCE_GET_SIMILAR_EXPERIENCE_SUCCESS, EXPERIENCE_GET_SUCCESS, EXPERIENCE_GET_TEAM_EXPERIENCE_FAIL, EXPERIENCE_GET_TEAM_EXPERIENCE_REQUEST, EXPERIENCE_GET_TEAM_EXPERIENCE_SUCCESS, EXPERIENCE_GET_TOP_RATED_EXPERIENCE_FAIL, EXPERIENCE_GET_TOP_RATED_EXPERIENCE_REQUEST, EXPERIENCE_GET_TOP_RATED_EXPERIENCE_SUCCESS, EXPERIENCE_IMAGES_FAIL, EXPERIENCE_IMAGES_REQUEST, EXPERIENCE_IMAGES_SUCCESS, EXPERIENCE_IN_PERSON_FAIL, EXPERIENCE_IN_PERSON_REQUEST, EXPERIENCE_IN_PERSON_SUCCESS, EXPERIENCE_ISHOSTED_FAIL, EXPERIENCE_ISHOSTED_REQUEST, EXPERIENCE_ISHOSTED_SUCCESS, EXPERIENCE_ITEMS_FAIL, EXPERIENCE_ITEMS_REQUEST, EXPERIENCE_ITEMS_SUCCESS, EXPERIENCE_LANGUAGE_FAIL, EXPERIENCE_LANGUAGE_REQUEST, EXPERIENCE_LANGUAGE_SUCCESS, EXPERIENCE_LOCATION_FAIL, EXPERIENCE_LOCATION_REQUEST, EXPERIENCE_LOCATION_SUCCESS, EXPERIENCE_NUMBER_OF_HOURS_FAIL, EXPERIENCE_NUMBER_OF_HOURS_REQUEST, EXPERIENCE_NUMBER_OF_HOURS_SUCCESS, EXPERIENCE_PRICE_FAIL, EXPERIENCE_PRICE_REQUEST, EXPERIENCE_PRICE_SUCCESS, EXPERIENCE_SKILLS_FAIL, EXPERIENCE_SKILLS_REQUEST, EXPERIENCE_SKILLS_SUCCESS, EXPERIENCE_STORY_FAIL, EXPERIENCE_STORY_REQUEST, EXPERIENCE_STORY_SUCCESS, EXPERIENCE_SUBMIT_FAIL, EXPERIENCE_SUBMIT_REQUEST, EXPERIENCE_SUBMIT_SUCCESS, EXPERIENCE_THEME_FAIL, EXPERIENCE_THEME_REQUEST, EXPERIENCE_THEME_SUCCESS, EXPERIENCE_TIME_FAIL, EXPERIENCE_TIME_REQUEST, EXPERIENCE_TIME_SUCCESS, EXPERIENCE_TITLE_FAIL, EXPERIENCE_TITLE_REQUEST, EXPERIENCE_TITLE_SUCCESS, EXPERIENCE_TYPE_FAIL, EXPERIENCE_TYPE_REQUEST, EXPERIENCE_TYPE_SUCCESS, EXPERIENCE_WORKING_FAIL, EXPERIENCE_WORKING_REQUEST, EXPERIENCE_WORKING_SUCCESS } from "../constants/experienceConstants";
import axios from "axios";
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


export const experienceIsHostedAdd = (isHosted) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_ISHOSTED_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {isHosted}
        })

        dispatch({
            type: EXPERIENCE_ISHOSTED_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_ISHOSTED_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const experienceDescriptionAdd = (description) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_DESCRIPTION_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {description}
        })

        dispatch({
            type: EXPERIENCE_DESCRIPTION_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_DESCRIPTION_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const experienceBroadcastAdd = (broadcast) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_BROADCAST_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {broadcast}
        })

        dispatch({
            type: EXPERIENCE_BROADCAST_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_BROADCAST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const experienceItemsAdd = (item) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_ITEMS_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {item}
        })

        dispatch({
            type: EXPERIENCE_ITEMS_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_ITEMS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const experienceTitleAdd = (title) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_TITLE_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {title}
        })

        dispatch({
            type: EXPERIENCE_TITLE_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_TITLE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const experiencePriceAdd = (price) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_PRICE_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {price}
        })

        dispatch({
            type: EXPERIENCE_PRICE_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_PRICE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const experienceNumberOfHoursAdd = (numberOfHours) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_NUMBER_OF_HOURS_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {numberOfHours}
        })

        dispatch({
            type: EXPERIENCE_NUMBER_OF_HOURS_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_NUMBER_OF_HOURS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const experienceTimeAdd = (time) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_TIME_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {time}
        })

        dispatch({
            type: EXPERIENCE_TIME_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_TIME_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const experienceAvailabilityAdd = (availability) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_AVAILABILITY_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {availability}
        })

        dispatch({
            type: EXPERIENCE_AVAILABILITY_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_AVAILABILITY_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const experienceAgeAdd = (age) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_AGE_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {age}
        })

        dispatch({
            type: EXPERIENCE_AGE_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_AGE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const experienceWorkingAdd = (isWorkingSolo) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_WORKING_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {isWorkingSolo}
        })

        dispatch({
            type: EXPERIENCE_WORKING_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_WORKING_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const experienceStoryAdd = (story) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_STORY_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {story}
        })

        dispatch({
            type: EXPERIENCE_STORY_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_STORY_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const experienceSkillsAdd = (skills) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_SKILLS_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {skills}
        })

        dispatch({
            type: EXPERIENCE_SKILLS_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_SKILLS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const experienceImagesAdd = (images) => async (dispatch) => {
    try {
        dispatch({ type: EXPERIENCE_IMAGES_REQUEST });

         
        dispatch({
            type: EXPERIENCE_TYPE_SUCCESS,
            payload: {images}
        })

        dispatch({
            type: EXPERIENCE_IMAGES_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_IMAGES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const experienceSubmit = (data) => async (dispatch, getState) => {
   
    try {
        dispatch({ type: EXPERIENCE_SUBMIT_REQUEST });

        const {userLogin: {userInfo}} = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.post("/experience", {data}, config)

        dispatch({
            type: EXPERIENCE_SUBMIT_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_SUBMIT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const getNewExperiences = () => async (dispatch) => {
   
    try {
        dispatch({ type: EXPERIENCE_GET_REQUEST });

        
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }

       const {data} = await axios.get("/experience", config)

        dispatch({
            type: EXPERIENCE_GET_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getPopularExperiences = () => async (dispatch) => {
   
    try {
        dispatch({ type: EXPERIENCE_GET_POPULAR_IN_INDIA_REQUEST });

        
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }

       const {data} = await axios.get("/experience/location/india", config)

        dispatch({
            type: EXPERIENCE_GET_POPULAR_IN_INDIA_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_GET_POPULAR_IN_INDIA_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getCookingExperiences = () => async (dispatch) => {
   
    try {
        dispatch({ type: EXPERIENCE_GET_COOKING_REQUEST });

        
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }

       const {data} = await axios.get("/experience/cooking", config)

        dispatch({
            type: EXPERIENCE_GET_COOKING_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_GET_COOKING_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getLastWeekExperiences = () => async (dispatch) => {
   
    try {
        dispatch({ type: EXPERIENCE_GET_LAST_WEEK_REQUEST });

        
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }

       const {data} = await axios.get("/experience/week", config)

        dispatch({
            type: EXPERIENCE_GET_LAST_WEEK_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_GET_LAST_WEEK_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getFilteredResultExperiences = (filter) => async (dispatch) => {
   
    try {
        dispatch({ type: EXPERIENCE_GET_FILTERED_RESULT_REQUEST });

        
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }

       const {data} = await axios.post("/experience/filter", {filter}, config)

        dispatch({
            type: EXPERIENCE_GET_FILTERED_RESULT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_GET_FILTERED_RESULT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const getMainFilteredResultExperiences = (minPrice, maxPrice, language, startTime, numberOfHours) => async (dispatch) => {
   
    try {
        dispatch({ type: EXPERIENCE_GET_MAIN_FILTER_RESULT_REQUEST });

        
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }

       const {data} = await axios.post("/experience/mainfilter", {minPrice, maxPrice, language, startTime, numberOfHours}, config)

        dispatch({
            type: EXPERIENCE_GET_FILTERED_RESULT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_GET_MAIN_FILTER_RESULT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const getExperienceByIdResult = (id) => async (dispatch) => {
   
    try {
        dispatch({ type: EXPERIENCE_GET_EXPERIENCEBYID_RESULT_REQUEST });

        
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }

       const {data} = await axios.get(`/experience/${id}`, config)

        dispatch({
            type: EXPERIENCE_GET_EXPERIENCEBYID_RESULT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_GET_EXPERIENCEBYID_RESULT_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const createExperienceReview = (id, rating, comment) => async (dispatch, getState) => {
   
    try {
        dispatch({ type: EXPERIENCE_CREATE_REVIEW_REQUEST });

        const {userLogin: {userInfo}} = getState()
        
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.post(`/experience/review/${id}`, {rating, comment}, config)

        dispatch({
            type: EXPERIENCE_CREATE_REVIEW_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getSimilarExperience = (id) => async (dispatch) => {
   
    try {
        dispatch({ type: EXPERIENCE_GET_SIMILAR_EXPERIENCE_REQUEST });

        
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }

       const {data} = await axios.get(`/experience/similar/${id}`, config)

        dispatch({
            type: EXPERIENCE_GET_SIMILAR_EXPERIENCE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_GET_SIMILAR_EXPERIENCE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const getTopRatedExperience = () => async (dispatch) => {
   
    try {
        dispatch({ type: EXPERIENCE_GET_TOP_RATED_EXPERIENCE_REQUEST });

        
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }

       const {data} = await axios.get(`/experience/toprated`, config)

        dispatch({
            type: EXPERIENCE_GET_TOP_RATED_EXPERIENCE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_GET_TOP_RATED_EXPERIENCE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const getTeamExperience = () => async (dispatch) => {
   
    try {
        dispatch({ type: EXPERIENCE_GET_TEAM_EXPERIENCE_REQUEST });

        
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }

       const {data} = await axios.get(`/experience/team`, config)

        dispatch({
            type: EXPERIENCE_GET_TEAM_EXPERIENCE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_GET_TEAM_EXPERIENCE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getChildExperience = () => async (dispatch) => {
   
    try {
        dispatch({ type: EXPERIENCE_GET_CHILD_EXPERIENCE_REQUEST });

        
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }

       const {data} = await axios.get(`/experience/children`, config)

        dispatch({
            type: EXPERIENCE_GET_CHILD_EXPERIENCE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_GET_CHILD_EXPERIENCE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getEverydayExperience = () => async (dispatch) => {
   
    try {
        dispatch({ type: EXPERIENCE_GET_EVERYDAY_EXPERIENCE_REQUEST });

        
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }

       const {data} = await axios.get(`/experience/everyday`, config)

        dispatch({
            type: EXPERIENCE_GET_EVERYDAY_EXPERIENCE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_GET_EVERYDAY_EXPERIENCE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const getInPersonExperience = () => async (dispatch) => {
   
    try {
        dispatch({ type: EXPERIENCE_IN_PERSON_REQUEST });

        
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }

       const {data} = await axios.get(`/experience/in-person`, config)

        dispatch({
            type: EXPERIENCE_IN_PERSON_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_IN_PERSON_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getAdventureExperience = () => async (dispatch) => {
   
    try {
        dispatch({ type: EXPERIENCE_ADVENTURE_REQUEST });

        
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }

       const {data} = await axios.get(`/experience/adventure`, config)

        dispatch({
            type: EXPERIENCE_ADVENTURE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:EXPERIENCE_ADVENTURE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
