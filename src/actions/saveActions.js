import axios from "axios";
import { REMOVE_EXPERIENCE, REMOVE_HOSTEDPLACE, SAVE_EXPERIENCE, SAVE_HOSTEDPLACE } from "../constants/saveConstants";

export const saveAddPlace = (id) => async (dispatch, getState) => {
   const { data } = await axios.get(`/host/${id}`)

   dispatch({
       type:SAVE_HOSTEDPLACE,
       payload: {
           placeId: data._id,
           title: data.title,
           image: data.images[0],
           description: data.description,
           country: data.country,
           rating: data.rating,
           numReviews: data.numReviews,
           price: data.price
       }
   })

   localStorage.setItem("saveHostedPlaceItems", JSON.stringify(getState().savePlace.saveHostedPlaceItems))
}

export const saveAddExperience = (id) => async (dispatch, getState) => {
   const { data } = await axios.get(`/experience/${id}`)
    
   dispatch({
       type:SAVE_EXPERIENCE,
       payload: {
           experienceId: data._id,
           title: data.title,
           image: data.image[0],
           location: data.location,
           theme: data.theme,
           typeOfExperience: data.typeOfExperience,
           rating: data.rating,
           price: data.price
       }
   })

   localStorage.setItem("saveExperiences", JSON.stringify(getState().saveExperience.saveExperiences))

   
}


export const removePlace = (id) => async (dispatch, getState) => {

   dispatch({
       type:REMOVE_HOSTEDPLACE,
       payload: id
   })

   localStorage.setItem("saveHostedPlaceItems", JSON.stringify(getState().savePlace.saveHostedPlaceItems))
}

export const removeExperiences = (id) => async (dispatch, getState) => {

   dispatch({
       type:REMOVE_EXPERIENCE,
       payload: id
   })

   localStorage.setItem("saveExperiences", JSON.stringify(getState().saveExperience.saveExperiences))
}

