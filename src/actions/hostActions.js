import axios from "axios";
import { HOSTED_PLACE_DETAILS_FAIL, HOSTED_PLACE_DETAILS_REQUEST, HOSTED_PLACE_DETAILS_SUCCESS, HOSTED_PLACE_RATING_FAIL, HOSTED_PLACE_RATING_REQUEST, HOSTED_PLACE_RATING_SUCCESS, HOST_ADD_FAIL, HOST_ADD_REQUEST, HOST_ADD_SUCCESS, HOST_EMPTY, HOST_GET_FAIL, HOST_GET_REQUEST, HOST_GET_SUCCESS, HOST_GET_LOW_PRICE_FAIL, HOST_GET_LOW_PRICE_REQUEST, HOST_GET_LOW_PRICE_SUCCESS, HOST_GET_TOP_RATED_FAIL, HOST_GET_TOP_RATED_REQUEST, HOST_GET_TOP_RATED_RESET, HOST_GET_TOP_RATED_SUCCESS, HOST_GET_HIGH_PRICE_REQUEST, HOST_GET_HIGH_PRICE_SUCCESS, HOST_GET_HIGH_PRICE_FAIL, HOST_GET_NUMBER_OF_BEDROOMS_REQUEST, HOST_GET_NUMBER_OF_BEDROOMS_SUCCESS, HOST_GET_NUMBER_OF_BEDROOMS_FAIL, HOST_GET_SEARCH_RESULTS_REQUEST, HOST_GET_SEARCH_RESULTS_SUCCESS, HOST_GET_SEARCH_RESULTS_FAIL, HOST_GET_SUITED_RESULTS_REQUEST, HOST_GET_SUITED_RESULTS_SUCCESS, HOST_GET_SUITED_RESULTS_FAIL, HOST_GET_SEARCH_RESULTS_FOR_DATES_REQUEST, HOST_GET_SEARCH_RESULTS_FOR_DATES_SUCCESS, HOST_GET_SEARCH_RESULTS_FOR_DATES_FAIL, HOSTED_PLACE_BOOKING_REQUEST, HOSTED_PLACE_BOOKING_SUCCESS, HOSTED_PLACE_BOOKING_FAIL, HOSTED_PLACE_UNIQUE_STAYS_REQUEST, HOSTED_PLACE_UNIQUE_STAYS_SUCCESS, HOSTED_PLACE_UNIQUE_STAYS_FAIL, HOSTED_PLACE_ENTIRE_HOMES_REQUEST, HOSTED_PLACE_ENTIRE_HOMES_SUCCESS, HOSTED_PLACE_ENTIRE_HOMES_FAIL, HOSTED_PLACE_COTTAGES_REQUEST, HOSTED_PLACE_COTTAGES_SUCCESS, HOSTED_PLACE_COTTAGES_FAIL, HOSTED_PLACE_CREATEDBY_REQUEST, HOSTED_PLACE_CREATEDBY_SUCCESS, HOSTED_PLACE_CREATEDBY_FAIL, HOSTED_PLACE_UPDATE_DETAILS_REQUEST, HOSTED_PLACE_UPDATE_DETAILS_SUCCESS, HOSTED_PLACE_UPDATE_DETAILS_FAIL, HOSTED_PLACE_DELETE_REQUEST, HOSTED_PLACE_DELETE_SUCCESS, HOSTED_PLACE_DELETE_FAIL } from "../constants/hostConstants";

export const hostAddPlace = (title, images, price, description, country, address, season, selectedValue, airConditioning, breakfast, food, cableTv, wifi, freeParking, selectedValueOfBed, numberOfBedrooms, selectedValueHomes ) => async (dispatch, getState) => {
    try {
        dispatch({ type: HOST_ADD_REQUEST });

        const {userLogin: {userInfo}} = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

         await axios.post("/host/create", {title, userInfo, images, price, description, country, address, season, selectedValue, airConditioning, breakfast, food, cableTv, wifi, freeParking, selectedValueOfBed, numberOfBedrooms, selectedValueHomes }, config)

        dispatch({
            type: HOST_ADD_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type:HOST_ADD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostEmpty = () => (dispatch) => {
    dispatch({ type: HOST_EMPTY })
}

export const hostGetPlaces = () => async(dispatch) => {
    try {
        dispatch({ type: HOST_GET_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get("/host", config)

    dispatch({
        type: HOST_GET_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOST_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
    
}


export const hostGetSearchHeaderPlaces = (country) => async(dispatch) => {
    try {
        dispatch({ type: HOST_GET_SEARCH_RESULTS_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/search-country-header?keyword=${country}`, config)

    dispatch({
        type: HOST_GET_SEARCH_RESULTS_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOST_GET_SEARCH_RESULTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
    

}

export const hostedPlaceGetDetails = (id) => async(dispatch) => {
    try {
        dispatch({ type: HOSTED_PLACE_DETAILS_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/${id}`, config)

    dispatch({
        type: HOSTED_PLACE_DETAILS_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOSTED_PLACE_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceRatingAction = (id, review) => async(dispatch, getState) => {
    try {
        dispatch({ type: HOSTED_PLACE_RATING_REQUEST })

        const {userLogin: {userInfo}} = getState()

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${userInfo.token}`
            
        }
    }

     await axios.post(`/host/${id}/reviews`, review, config)

    dispatch({
        type: HOSTED_PLACE_RATING_SUCCESS,
    })
        
    } catch (error) {
        dispatch({
            type: HOSTED_PLACE_RATING_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceBookingAction = (id, rangeOfDate, guest) => async(dispatch, getState) => {
    console.log(rangeOfDate, guest)
    try {
        
        dispatch({ type: HOSTED_PLACE_BOOKING_REQUEST })

        const {userLogin: {userInfo}} = getState()

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${userInfo.token}`
            
        }
    }

    const { data } = await axios.put(`/host/${id}/bookings`, {rangeOfDate, guest}, config)
   

    dispatch({
        type: HOSTED_PLACE_BOOKING_SUCCESS,
        payload: data
    })
    
    } catch (error) {
        dispatch({
            type: HOSTED_PLACE_BOOKING_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceGetTopRatedDetails = () => async(dispatch) => {
    try {
        dispatch({ type: HOST_GET_TOP_RATED_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/search`, config)

    dispatch({
        type: HOST_GET_TOP_RATED_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOST_GET_TOP_RATED_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceGetLowPriceDetails = () => async(dispatch) => {
    try {
        dispatch({type: HOST_GET_TOP_RATED_RESET})

        dispatch({ type: HOST_GET_LOW_PRICE_REQUEST })
        dispatch({ type: HOST_GET_TOP_RATED_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/lowprice`, config)

    dispatch({type: HOST_GET_LOW_PRICE_SUCCESS})

    dispatch({
        type: HOST_GET_TOP_RATED_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOST_GET_LOW_PRICE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceGetHighPriceDetails = () => async(dispatch) => {
    try {
        dispatch({type: HOST_GET_TOP_RATED_RESET})

        dispatch({ type: HOST_GET_HIGH_PRICE_REQUEST })
        dispatch({ type: HOST_GET_TOP_RATED_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/highprice`, config)

    dispatch({type: HOST_GET_HIGH_PRICE_SUCCESS})

    dispatch({
        type: HOST_GET_TOP_RATED_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOST_GET_HIGH_PRICE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceGetNumberOfBedroomsDetails = () => async(dispatch) => {
    try {
        dispatch({type: HOST_GET_TOP_RATED_RESET})

        dispatch({ type: HOST_GET_NUMBER_OF_BEDROOMS_REQUEST })
        dispatch({ type: HOST_GET_TOP_RATED_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/bedrooms`, config)

    dispatch({type: HOST_GET_NUMBER_OF_BEDROOMS_SUCCESS})

    dispatch({
        type: HOST_GET_TOP_RATED_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOST_GET_NUMBER_OF_BEDROOMS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceGetSearchResultsDetails = (country) => async(dispatch) => {
    try {
        dispatch({type: HOST_GET_TOP_RATED_RESET})

        dispatch({ type: HOST_GET_SEARCH_RESULTS_REQUEST })
        dispatch({ type: HOST_GET_TOP_RATED_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/searchCountry?keyword=${country}`, config)

    dispatch({type: HOST_GET_SEARCH_RESULTS_SUCCESS})

    dispatch({
        type: HOST_GET_TOP_RATED_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOST_GET_SEARCH_RESULTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceGetSearchResultsForDates = (country) => async(dispatch) => {
    try {

        dispatch({ type: HOST_GET_SEARCH_RESULTS_FOR_DATES_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/searchCountry?keyword=${country}`, config)


    dispatch({
        type: HOST_GET_SEARCH_RESULTS_FOR_DATES_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOST_GET_SEARCH_RESULTS_FOR_DATES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceGetSuitedResultsDetails = (openSeason) => async(dispatch) => {
    try {
        dispatch({type: HOST_GET_TOP_RATED_RESET})

        dispatch({ type: HOST_GET_SUITED_RESULTS_REQUEST })
        dispatch({ type: HOST_GET_TOP_RATED_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/suited?keyword=${openSeason}`, config)

    dispatch({type: HOST_GET_SUITED_RESULTS_SUCCESS})

    dispatch({
        type: HOST_GET_TOP_RATED_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOST_GET_SUITED_RESULTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceUniqueStays = () => async(dispatch) => {
    try {
        dispatch({ type: HOSTED_PLACE_UNIQUE_STAYS_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/unique-stays`, config)

    dispatch({
        type: HOSTED_PLACE_UNIQUE_STAYS_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOSTED_PLACE_UNIQUE_STAYS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceEntireHomes = () => async(dispatch) => {
    try {
        dispatch({ type: HOSTED_PLACE_ENTIRE_HOMES_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/entire-homes`, config)

    dispatch({
        type: HOSTED_PLACE_ENTIRE_HOMES_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOSTED_PLACE_ENTIRE_HOMES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceCottages = () => async(dispatch) => {
    try {
        dispatch({ type: HOSTED_PLACE_COTTAGES_REQUEST })

    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }

    const {data} = await axios.get(`/host/cabins-cottages`, config)

    dispatch({
        type: HOSTED_PLACE_COTTAGES_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOSTED_PLACE_COTTAGES_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceCreatedByDetails = () => async(dispatch, getState) => {
    try {
        dispatch({ type: HOSTED_PLACE_CREATEDBY_REQUEST })

        const {userLogin: {userInfo}} = getState()

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${userInfo.token}`
            
        }
    }

    const {data} = await axios.get("/host/created-by-user", config)

    dispatch({
        type: HOSTED_PLACE_CREATEDBY_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOSTED_PLACE_CREATEDBY_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const hostedPlaceUpdateDetails = (id, title, price, images) => async(dispatch, getState) => {
    try {
        dispatch({ type: HOSTED_PLACE_UPDATE_DETAILS_REQUEST })

        const {userLogin: {userInfo}} = getState()

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${userInfo.token}`
            
        }
    }

    const {data} = await axios.put("/host/update-details", {id, title, price, images}, config)

    dispatch({
        type: HOSTED_PLACE_UPDATE_DETAILS_SUCCESS,
        payload: data
    })
        
    } catch (error) {
        dispatch({
            type: HOSTED_PLACE_UPDATE_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const deleteHostedPlace = (id) => async(dispatch, getState) => {
    console.log(id);
    try {
        dispatch({ type: HOSTED_PLACE_DELETE_REQUEST })

        const {userLogin: {userInfo}} = getState()

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${userInfo.token}`
            
        }
    }

     await axios.delete(`/host/delete-place/${id}`, config)

    dispatch({
        type: HOSTED_PLACE_DELETE_SUCCESS,
    })
        
    } catch (error) {
        dispatch({
            type: HOSTED_PLACE_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}