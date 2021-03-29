import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { userLoginReducer, userRegisterReducer, userUpdateDetailsReducer } from "./reducers/userReducer";
import { hostAddReducer, hostCottagesReducer, hostedPlaceBookingReducer, hostedPlaceCreatedByReducer, hostedPlaceDeleteReducer, hostedPlaceDetailsReducer, hostedPlaceRatingReducer, hostedPlaceSearchResultsForDatesReducer, hostedPlaceTopRatedReducer, hostedPlaceUpdateDetailsReducer, hostEntireHomesReducer, hostGetReducer, hostGetSearchHeaderResultReducer, hostUniqueStaysReducer } from "./reducers/hostReducers";
import { saveExperienceReducer, saveReducer } from "./reducers/saveReducer";
import { experienceTypeReducer, experienceSubmitReducer, experienceGetReducer, experienceGetPopularInIndiaReducer, experienceGetCookingReducer, experienceGetLastWeekReducer, experienceGetFilteredResultReducer, getExperienceByIdReducer, createReviewReducer, getSimilarExperienceReducer, getTopRatedExperienceReducer, getTeamExperienceReducer, getChildExperienceReducer, getEverydayExperienceReducer, getInPersonExperienceReducer, getAdventureExperienceReducer, getCreatedByUserExperienceReducer, getUpdatedExperienceReducer, deleteExperienceReducer } from "./reducers/experienceReducers";


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userUpdateDetails: userUpdateDetailsReducer,
    hostAdd: hostAddReducer,
    hostGet: hostGetReducer,
    hostGetSearchHeader: hostGetSearchHeaderResultReducer,
    hostedPlaceDetails: hostedPlaceDetailsReducer,
    hostedPlaceSummary: hostedPlaceBookingReducer,
    hostedPlaceRating: hostedPlaceRatingReducer,
    hostedPlaceTopRated: hostedPlaceTopRatedReducer,
    hostedPlaceSearch: hostedPlaceSearchResultsForDatesReducer,
    uniquePlacesResult: hostUniqueStaysReducer,
    entireHomesResult: hostEntireHomesReducer,
    cottagesResult: hostCottagesReducer,
    hostedPlaceCreatedByUser: hostedPlaceCreatedByReducer,
    updatedHostedPlace: hostedPlaceUpdateDetailsReducer,
    deletedHostedPlace: hostedPlaceDeleteReducer,
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
    getCreatedByUserResult: getCreatedByUserExperienceReducer, 
    updatedExperienceResult: getUpdatedExperienceReducer,
    deletedExperience: deleteExperienceReducer,
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