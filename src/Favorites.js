import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./Favorites.css"
import Rating from './Rating'
import { removePlace } from './actions/saveActions';
import { IconButton } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';

function Favorites() {
    const savePlace = useSelector(state => state.savePlace)
    const {saveHostedPlaceItems} = savePlace

    const dispatch = useDispatch()


    return (
        <>
        {saveHostedPlaceItems.length > 0 ?
            saveHostedPlaceItems.map(saveHostedPlaceItem => (
                <div className="favorites" key={saveHostedPlaceItem.placeId}>
            <img src={saveHostedPlaceItem.image} alt="hotel" />
             <IconButton onClick={ id => dispatch(removePlace(saveHostedPlaceItem.placeId))}> <Favorite style={{stroke:"rgb(255, 255, 255)", fontSize:"1.7rem", color:"#ff7779"}} /> </IconButton>

            <div className="favorites__info">
                <div className="favorites__infoTop">
                    <p>{saveHostedPlaceItem.country}</p>
                   <Link to={`/host/${saveHostedPlaceItem.placeId}`}><h3>{saveHostedPlaceItem.title}</h3></Link>
                    <p>_____</p>
                    <ReactReadMoreReadLess charLimit={300}
                        readMoreText={"Read more"}
                        readLessText={"Read less"}
                        readMoreClassName="read-more-less--more"
                        readLessClassName="read-more-less--less"
                    >{saveHostedPlaceItem.description}</ReactReadMoreReadLess>
                    
                </div>
                <div className="favorites__infoBottom">
                    <div className="favorites__stars">
                    
                        <Rating value={saveHostedPlaceItem.rating} />
                        <h3 style={{marginRight:"8px"}}> Reviewed By {saveHostedPlaceItem.numReviews} people</h3>
                    </div>
                    <div className="favorites__price">
                    <h2>₹{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(saveHostedPlaceItem.price)} / night </h2>
                    
                </div>
                </div>
                
            </div>
        </div>
            ))
        : <div style={{display:"flex", alignItems:"center"}}>
            <img src="https://res.cloudinary.com/cqn/image/upload/v1616324101/no-data-concept-illustration_114360-536_bz7o5n.jpg" alt="nothing" style={{width:"570px"}} /> 
            <h1 style={{fontSize:"75px"}}>You have not added any favorites.</h1>
        </div>
        }
        </>
    )
}

export default Favorites
