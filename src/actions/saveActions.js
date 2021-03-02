import axios from "axios";
import { REMOVE_HOSTEDPLACE, SAVE_HOSTEDPLACE } from "../constants/saveConstants";

export const saveAddPlace = (id) => async (dispatch, getState) => {
   const { data } = await axios.get(`/host/${id}`)

   dispatch({
       type:SAVE_HOSTEDPLACE,
       payload: {
           placeId: data._id,
           title: data.title,
           image: data.image,
           description: data.description,
           country: data.country,
           rating: data.rating,
           numReviews: data.numReviews,
           price: data.price
       }
   })

   localStorage.setItem("saveHostedPlaceItems", JSON.stringify(getState().savePlace.saveHostedPlaceItems))
}

export const removePlace = (id) => async (dispatch, getState) => {

   dispatch({
       type:REMOVE_HOSTEDPLACE,
       payload: id
   })

   localStorage.setItem("saveHostedPlaceItems", JSON.stringify(getState().savePlace.saveHostedPlaceItems))
}

