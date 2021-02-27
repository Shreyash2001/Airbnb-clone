import { SAVE_GET_FAIL, SAVE_GET_REQUEST, SAVE_GET_SUCCESS } from "../constants/saveConstants"

export const saveReducer = (state = {hostId: []}, action) => {
    switch (action.type) {
        case SAVE_GET_REQUEST:
            return { loading: true }
        case SAVE_GET_SUCCESS:
            return { loading: false, success: true, hostId: [action.payload] }
        case SAVE_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

