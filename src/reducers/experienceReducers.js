import { EXPERIENCE_AGE_FAIL, EXPERIENCE_AGE_REQUEST, EXPERIENCE_AGE_SUCCESS, EXPERIENCE_AVAILABILITY_FAIL, EXPERIENCE_AVAILABILITY_REQUEST, EXPERIENCE_AVAILABILITY_SUCCESS, EXPERIENCE_BROADCAST_FAIL, EXPERIENCE_BROADCAST_REQUEST, EXPERIENCE_BROADCAST_SUCCESS, EXPERIENCE_DESCRIPTION_FAIL, EXPERIENCE_DESCRIPTION_REQUEST, EXPERIENCE_DESCRIPTION_SUCCESS, EXPERIENCE_IMAGES_FAIL, EXPERIENCE_IMAGES_REQUEST, EXPERIENCE_IMAGES_SUCCESS, EXPERIENCE_ISHOSTED_FAIL, EXPERIENCE_ISHOSTED_REQUEST, EXPERIENCE_ISHOSTED_SUCCESS, EXPERIENCE_ITEMS_FAIL, EXPERIENCE_ITEMS_REQUEST, EXPERIENCE_ITEMS_SUCCESS, EXPERIENCE_LANGUAGE_FAIL, EXPERIENCE_LANGUAGE_REQUEST, EXPERIENCE_LANGUAGE_SUCCESS, EXPERIENCE_LOCATION_FAIL, EXPERIENCE_LOCATION_REQUEST, EXPERIENCE_LOCATION_SUCCESS, EXPERIENCE_NUMBER_OF_HOURS_FAIL, EXPERIENCE_NUMBER_OF_HOURS_REQUEST, EXPERIENCE_NUMBER_OF_HOURS_SUCCESS, EXPERIENCE_PRICE_FAIL, EXPERIENCE_PRICE_REQUEST, EXPERIENCE_PRICE_SUCCESS, EXPERIENCE_SKILLS_FAIL, EXPERIENCE_SKILLS_REQUEST, EXPERIENCE_SKILLS_SUCCESS, EXPERIENCE_STORY_FAIL, EXPERIENCE_STORY_REQUEST, EXPERIENCE_STORY_SUCCESS, EXPERIENCE_SUBMIT_FAIL, EXPERIENCE_SUBMIT_REQUEST, EXPERIENCE_SUBMIT_SUCCESS, EXPERIENCE_THEME_FAIL, EXPERIENCE_THEME_REQUEST, EXPERIENCE_THEME_SUCCESS, EXPERIENCE_TIME_FAIL, EXPERIENCE_TIME_REQUEST, EXPERIENCE_TIME_SUCCESS, EXPERIENCE_TITLE_FAIL, EXPERIENCE_TITLE_REQUEST, EXPERIENCE_TITLE_SUCCESS, EXPERIENCE_TYPE_FAIL, EXPERIENCE_TYPE_REQUEST, EXPERIENCE_TYPE_SUCCESS, EXPERIENCE_WORKING_FAIL, EXPERIENCE_WORKING_REQUEST, EXPERIENCE_WORKING_SUCCESS, EXPERIENCE_SUBMIT_RESET, EXPERIENCE_GET_REQUEST, EXPERIENCE_GET_SUCCESS, EXPERIENCE_GET_FAIL, EXPERIENCE_GET_POPULAR_IN_INDIA_REQUEST, EXPERIENCE_GET_POPULAR_IN_INDIA_SUCCESS, EXPERIENCE_GET_POPULAR_IN_INDIA_FAIL, EXPERIENCE_GET_COOKING_REQUEST, EXPERIENCE_GET_COOKING_SUCCESS, EXPERIENCE_GET_COOKING_FAIL, EXPERIENCE_GET_LAST_WEEK_REQUEST, EXPERIENCE_GET_LAST_WEEK_SUCCESS, EXPERIENCE_GET_LAST_WEEK_FAIL, EXPERIENCE_GET_FILTERED_RESULT_REQUEST, EXPERIENCE_GET_FILTERED_RESULT_SUCCESS, EXPERIENCE_GET_FILTERED_RESULT_FAIL, EXPERIENCE_GET_MAIN_FILTER_RESULT_REQUEST, EXPERIENCE_GET_MAIN_FILTER_RESULT_SUCCESS, EXPERIENCE_GET_MAIN_FILTER_RESULT_FAIL, EXPERIENCE_GET_EXPERIENCEBYID_RESULT_REQUEST, EXPERIENCE_GET_EXPERIENCEBYID_RESULT_SUCCESS, EXPERIENCE_GET_EXPERIENCEBYID_RESULT_FAIL, EXPERIENCE_CREATE_REVIEW_REQUEST, EXPERIENCE_CREATE_REVIEW_SUCCESS, EXPERIENCE_CREATE_REVIEW_FAIL, EXPERIENCE_CREATE_REVIEW_RESET, EXPERIENCE_GET_SIMILAR_EXPERIENCE_REQUEST, EXPERIENCE_GET_SIMILAR_EXPERIENCE_SUCCESS, EXPERIENCE_GET_SIMILAR_EXPERIENCE_FAIL, EXPERIENCE_GET_TOP_RATED_EXPERIENCE_REQUEST, EXPERIENCE_GET_TOP_RATED_EXPERIENCE_SUCCESS, EXPERIENCE_GET_TOP_RATED_EXPERIENCE_FAIL, EXPERIENCE_GET_TEAM_EXPERIENCE_REQUEST, EXPERIENCE_GET_TEAM_EXPERIENCE_SUCCESS, EXPERIENCE_GET_TEAM_EXPERIENCE_FAIL, EXPERIENCE_GET_CHILD_EXPERIENCE_REQUEST, EXPERIENCE_GET_CHILD_EXPERIENCE_SUCCESS, EXPERIENCE_GET_CHILD_EXPERIENCE_FAIL, EXPERIENCE_GET_EVERYDAY_EXPERIENCE_REQUEST, EXPERIENCE_GET_EVERYDAY_EXPERIENCE_SUCCESS, EXPERIENCE_GET_EVERYDAY_EXPERIENCE_FAIL } from "../constants/experienceConstants"


export const experienceTypeReducer = (state = {tempData: {}} , action) => {
    switch (action.type) {
        case EXPERIENCE_TYPE_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_TYPE_SUCCESS:
            var obj = {...state.tempData};
            var pair = action.payload
            obj = {...obj, ...pair}
            
            return {
                loading: false,
                tempData: obj
            }
        case EXPERIENCE_TYPE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const experienceLocationReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_LOCATION_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_LOCATION_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_LOCATION_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const experienceThemeReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_THEME_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_THEME_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_THEME_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const experienceLanguageReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_LANGUAGE_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_LANGUAGE_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_LANGUAGE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}


export const experienceisHostedReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_ISHOSTED_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_ISHOSTED_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_ISHOSTED_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const experienceDescriptionReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_DESCRIPTION_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_DESCRIPTION_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_DESCRIPTION_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}


export const experienceBroadcastReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_BROADCAST_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_BROADCAST_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_BROADCAST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}


export const experienceItemsReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_ITEMS_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_ITEMS_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_ITEMS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const experienceTitleReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_TITLE_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_TITLE_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_TITLE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const experiencePriceReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_PRICE_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_PRICE_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_PRICE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const experienceNumberOfHoursReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_NUMBER_OF_HOURS_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_NUMBER_OF_HOURS_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_NUMBER_OF_HOURS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const experienceTimeReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_TIME_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_TIME_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_TIME_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const experienceAvalilabilityReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_AVAILABILITY_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_AVAILABILITY_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_AVAILABILITY_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const experienceAgeReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_AGE_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_AGE_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_AGE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const experienceWorkingReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_WORKING_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_WORKING_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_WORKING_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const experienceStoryReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_STORY_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_STORY_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_STORY_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const experienceSkillsReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_SKILLS_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_SKILLS_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_SKILLS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}


export const experienceImagesReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_IMAGES_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_IMAGES_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_IMAGES_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}


export const experienceSubmitReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_SUBMIT_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_SUBMIT_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_SUBMIT_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case EXPERIENCE_SUBMIT_RESET:
            return {
                state: {}
            }
        
        default:
            return state
    }
}

export const experienceGetReducer = (state = {newExperiences: []}, action) => {
    switch (action.type) {
        case EXPERIENCE_GET_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_GET_SUCCESS:
            
            return {
                loading: false,
                newExperiences: action.payload
            }
        case EXPERIENCE_GET_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}
export const experienceGetPopularInIndiaReducer = (state = {popularExperiences: []}, action) => {
    switch (action.type) {
        case EXPERIENCE_GET_POPULAR_IN_INDIA_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_GET_POPULAR_IN_INDIA_SUCCESS:
            
            return {
                loading: false,
                popularExperiences: action.payload
            }
        case EXPERIENCE_GET_POPULAR_IN_INDIA_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const experienceGetCookingReducer = (state = {cookingExperiences: []}, action) => {
    switch (action.type) {
        case EXPERIENCE_GET_COOKING_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_GET_COOKING_SUCCESS:
            
            return {
                loading: false,
                cookingExperiences: action.payload
            }
        case EXPERIENCE_GET_COOKING_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const experienceGetLastWeekReducer = (state = {lastWeekExperiences: []}, action) => {
    switch (action.type) {
        case EXPERIENCE_GET_LAST_WEEK_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_GET_LAST_WEEK_SUCCESS:
            
            return {
                loading: false,
                lastWeekExperiences: action.payload
            }
        case EXPERIENCE_GET_LAST_WEEK_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}


export const experienceGetFilteredResultReducer = (state = {filteredResultExperiences: []}, action) => {
    switch (action.type) {
        case EXPERIENCE_GET_FILTERED_RESULT_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_GET_FILTERED_RESULT_SUCCESS:
            
            return {
                loading: false,
                filteredResultExperiences: action.payload
            }
        case EXPERIENCE_GET_FILTERED_RESULT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}


export const experienceGetMainFilterReducer = (state = {filteredResultExperiences: []}, action) => {
    switch (action.type) {
        case EXPERIENCE_GET_MAIN_FILTER_RESULT_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_GET_MAIN_FILTER_RESULT_SUCCESS:
            
            return {
                loading: false,
                filteredResultExperiences: action.payload
            }
        case EXPERIENCE_GET_MAIN_FILTER_RESULT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const getExperienceByIdReducer = (state = {experienceByIdResult: {}}, action) => {
    switch (action.type) {
        case EXPERIENCE_GET_EXPERIENCEBYID_RESULT_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_GET_EXPERIENCEBYID_RESULT_SUCCESS:
            
            return {
                loading: false,
                experienceByIdResult: action.payload
            }
        case EXPERIENCE_GET_EXPERIENCEBYID_RESULT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const createReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case EXPERIENCE_CREATE_REVIEW_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_CREATE_REVIEW_SUCCESS:
            
            return {
                loading: false,
                success: true
            }
        case EXPERIENCE_CREATE_REVIEW_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case EXPERIENCE_CREATE_REVIEW_RESET:
            return {}
        
        default:
            return state
    }
}

export const getSimilarExperienceReducer = (state = {similarExperience: []}, action) => {
    switch (action.type) {
        case EXPERIENCE_GET_SIMILAR_EXPERIENCE_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_GET_SIMILAR_EXPERIENCE_SUCCESS:
            
            return {
                loading: false,
                similarExperience: action.payload
            }
        case EXPERIENCE_GET_SIMILAR_EXPERIENCE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}


export const getTopRatedExperienceReducer = (state = {topRatedExperience: []}, action) => {
    switch (action.type) {
        case EXPERIENCE_GET_TOP_RATED_EXPERIENCE_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_GET_TOP_RATED_EXPERIENCE_SUCCESS:
            
            return {
                loading: false,
                topRatedExperience: action.payload
            }
        case EXPERIENCE_GET_TOP_RATED_EXPERIENCE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const getTeamExperienceReducer = (state = {teamExperience: []}, action) => {
    switch (action.type) {
        case EXPERIENCE_GET_TEAM_EXPERIENCE_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_GET_TEAM_EXPERIENCE_SUCCESS:
            
            return {
                loading: false,
                teamExperience: action.payload
            }
        case EXPERIENCE_GET_TEAM_EXPERIENCE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const getChildExperienceReducer = (state = {childExperience: []}, action) => {
    switch (action.type) {
        case EXPERIENCE_GET_CHILD_EXPERIENCE_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_GET_CHILD_EXPERIENCE_SUCCESS:
            
            return {
                loading: false,
                childExperience: action.payload
            }
        case EXPERIENCE_GET_CHILD_EXPERIENCE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export const getEverydayExperienceReducer = (state = {everydayExperience: []}, action) => {
    switch (action.type) {
        case EXPERIENCE_GET_EVERYDAY_EXPERIENCE_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_GET_EVERYDAY_EXPERIENCE_SUCCESS:
            
            return {
                loading: false,
                everydayExperience: action.payload
            }
        case EXPERIENCE_GET_EVERYDAY_EXPERIENCE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}