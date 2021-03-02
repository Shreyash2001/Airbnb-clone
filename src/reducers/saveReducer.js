import { REMOVE_HOSTEDPLACE, SAVE_HOSTEDPLACE } from "../constants/saveConstants"

export const saveReducer = (state = {saveHostedPlaceItems: []}, action) => {
    switch (action.type) {
        case SAVE_HOSTEDPLACE:
            const hostedPlace = action.payload
            const existingHostedPlace = state.saveHostedPlaceItems.find(x => x.placeId === hostedPlace.placeId)

            if(existingHostedPlace) {
                return{
                    ...state,
                    saveHostedPlaceItems: state.saveHostedPlaceItems.map(x => x.placeId === existingHostedPlace.placeId ? hostedPlace : x)
                }
                
            } else {
                return {
                    ...state,
                    saveHostedPlaceItems: [...state.saveHostedPlaceItems, hostedPlace]
                }
            }
        case REMOVE_HOSTEDPLACE: 
            
            return {
                ...state,
                saveHostedPlaceItems: state.saveHostedPlaceItems.filter(x => x.placeId !== action.payload)
            }

        default:
            return state
    }
}

