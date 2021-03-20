import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import { hostAddReducer, hostedPlaceBookingReducer, hostedPlaceDetailsReducer, hostedPlaceRatingReducer, hostedPlaceSearchResultsForDatesReducer, hostedPlaceTopRatedReducer, hostGetReducer } from "./reducers/hostReducers";
import { saveExperienceReducer, saveReducer } from "./reducers/saveReducer";
import { experienceTypeReducer, experienceSubmitReducer, experienceGetReducer, experienceGetPopularInIndiaReducer, experienceGetCookingReducer, experienceGetLastWeekReducer, experienceGetFilteredResultReducer, getExperienceByIdReducer, createReviewReducer, getSimilarExperienceReducer, getTopRatedExperienceReducer, getTeamExperienceReducer, getChildExperienceReducer, getEverydayExperienceReducer, getInPersonExperienceReducer, getAdventureExperienceReducer } from "./reducers/experienceReducers";


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    hostAdd: hostAddReducer,
    hostGet: hostGetReducer,
    hostedPlaceDetails: hostedPlaceDetailsReducer,
    hostedPlaceSummary: hostedPlaceBookingReducer,
    hostedPlaceRating: hostedPlaceRatingReducer,
    hostedPlaceTopRated: hostedPlaceTopRatedReducer,
    hostedPlaceSearch: hostedPlaceSearchResultsForDatesReducer,
    savePlace: saveReducer,
    saveExperience: saveExperienceReducer,
    experience: experienceTypeReducer,
    experienceSubmit: experienceSubmitReducer,
    newExperiences: experienceGetReducer,
    popularExperiences: experienceGetPopularInIndiaReducer,
    cookingExperiences: experienceGetCookingReducer,
    lastWeekExperiences: experienceGetLastWeekReducer,
    filteredResultExperiences: experienceGetFilteredResultReducer,
    getExperienceById: getExperienceByIdReducer,
    createReview: createReviewReducer,
    similarExperience: getSimilarExperienceReducer,
    getTopRated: getTopRatedExperienceReducer,
    getTeamExperience: getTeamExperienceReducer,
    getChildExperience: getChildExperienceReducer,
    getEverydayExperience: getEverydayExperienceReducer,
    getInPersonExperience: getInPersonExperienceReducer,
    getAdventure: getAdventureExperienceReducer, 

});

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
const savePlaceInfoFromStorage = localStorage.getItem("saveHostedPlaceItems") ? JSON.parse(localStorage.getItem("saveHostedPlaceItems")) : []
const saveExperienceInfoFromStorage = localStorage.getItem("saveExperiences") ? JSON.parse(localStorage.getItem("saveExperiences")) : []

const initialState = {
    userLogin: {userInfo: userInfoFromStorage},
    savePlace: {saveHostedPlaceItems: savePlaceInfoFromStorage},
    saveExperience: {saveExperiences: saveExperienceInfoFromStorage},
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;