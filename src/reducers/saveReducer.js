import { REMOVE_EXPERIENCE, REMOVE_HOSTEDPLACE, SAVE_EXPERIENCE, SAVE_HOSTEDPLACE } from "../constants/saveConstants"

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

export const saveExperienceReducer = (state = {saveExperiences: []}, action) => {
    switch (action.type) {
        case SAVE_EXPERIENCE:
            const experience = action.payload
            
            const existingExperience = state.saveExperiences.find(x => x.experienceId === experience.experienceId)

            if(existingExperience) {
                return{
                    ...state,
                    saveExperiences: state.saveExperiences.map(x => x.experienceId === existingExperience.experienceId ? experience : x)
                }
                
            } else {
                return {
                    ...state,
                    saveExperiences: [...state.saveExperiences, experience]
                }
            }
        case REMOVE_EXPERIENCE: 
            
            return {
                ...state,
                saveExperiences: state.saveExperiences.filter(x => x.experienceId !== action.payload)
            }

        default:
            return state
    }
}



