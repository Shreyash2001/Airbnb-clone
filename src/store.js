import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import { hostAddReducer, hostedPlaceDetailsReducer, hostedPlaceRatingReducer, hostedPlaceTopRatedReducer, hostGetReducer } from "./reducers/hostReducers";
import { saveReducer } from "./reducers/saveReducer";

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    hostAdd: hostAddReducer,
    hostGet: hostGetReducer,
    hostedPlaceDetails: hostedPlaceDetailsReducer,
    hostedPlaceRating: hostedPlaceRatingReducer,
    hostedPlaceTopRated: hostedPlaceTopRatedReducer,
    savePlace: saveReducer,

});

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
const savePlaceInfoFromStorage = localStorage.getItem("savePlaceInfo") ? JSON.parse(localStorage.getItem("savePlaceInfo")) : null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage},
    savePlace: {savePlaceInfo: savePlaceInfoFromStorage}
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;