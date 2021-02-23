import { HOST_ADD_FAIL, HOST_ADD_REQUEST, HOST_ADD_SUCCESS, HOST_EMPTY } from "../constants/hostConstants"

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