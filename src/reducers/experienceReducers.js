import { EXPERIENCE_TYPE_FAIL, EXPERIENCE_TYPE_REQUEST, EXPERIENCE_TYPE_SUCCESS } from "../constants/experienceConstants"


export const experienceTypeReducer = (state= {tempData: {}}, action) => {
    switch (action.type) {
        case EXPERIENCE_TYPE_REQUEST:
            return {
                loading: true
            }
        case EXPERIENCE_TYPE_SUCCESS:
            return {
                loading: false,
                tempData: action.payload
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