import { HOSTED_PLACE_DETAILS_FAIL, HOSTED_PLACE_DETAILS_REQUEST, HOSTED_PLACE_DETAILS_SUCCESS, HOST_ADD_FAIL, HOST_ADD_REQUEST, HOST_ADD_SUCCESS, HOST_EMPTY, HOST_GET_FAIL, HOST_GET_REQUEST, HOST_GET_SUCCESS } from "../constants/hostConstants"

export const hostAddReducer = (state = {}, action) => {
    switch (action.type) {
        case HOST_ADD_REQUEST:
            return { loading: true }
        case HOST_ADD_SUCCESS:
            return { loading: false, success: true }
        case HOST_ADD_FAIL:
            return { loading: false, error: action.payload }
        case HOST_EMPTY:
            return {}
        default:
            return state
    }
}

export const hostGetReducer = (state = { allHostPlaces: [] }, action) => {
    switch (action.type) {
        case HOST_GET_REQUEST:
            return { loading: true }
        case HOST_GET_SUCCESS:
            return { loading: false, allHostPlaces: action.payload }
        case HOST_GET_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const hostedPlaceDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case HOSTED_PLACE_DETAILS_REQUEST:
            return { loading: true }
        case HOSTED_PLACE_DETAILS_SUCCESS:
            return { loading: false, placeDetails: action.payload }
        case HOSTED_PLACE_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}