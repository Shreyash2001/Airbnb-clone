import { CircularProgress, IconButton } from '@material-ui/core';
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons'
import React, { useEffect } from 'react'
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import Rating from './Rating';
import "./SearchResult.css"
import { saveAddPlace } from './actions/saveActions';
function SearchResult({ img, location, title, description, star, price, total, value, id, numReviews }) {
    const dispatch = useDispatch()

   const savePlace = useSelector(state => state.savePlace)
   const {loading, success, savePlaceInfo} = savePlace


   useEffect(() => {

   }, [dispatch, success])

    const handleClick = () => {
        dispatch(saveAddPlace(id))
    }

    return (
        <div className="searchResult">
            <img src={img} alt="hotel" />
            {loading && <CircularProgress style={{color:"#ff7779"}}/>}
         {id === savePlaceInfo?.hostPlaceId ? <Favorite /> :    <IconButton className="searchResult__heart" onClick={handleClick}><FavoriteBorderOutlined  style={{color:"#ff7779"}} /></IconButton>  }
              

            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                   <Link to={`/host/${id}`}><h3>{title}</h3></Link>
                    <p>_____</p>
                    <ReactReadMoreReadLess charLimit={300}
                        readMoreText={"Read more"}
                        readLessText={"Read less"}
                        readMoreClassName="read-more-less--more"
                        readLessClassName="read-more-less--less"
                    >{description}</ReactReadMoreReadLess>
                    
                </div>
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                    
                        <Rating value={value} />
                        <h3 style={{marginRight:"8px"}}> Reviewed By {numReviews} people</h3>
                    </div>
                    <div className="searchResult__price">
                    <h2>₹{price} / night</h2>
                    <p>{total}</p>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default SearchResult