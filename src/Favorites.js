import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./Favorites.css"
import Rating from './Rating'
import { removePlace } from './actions/saveActions';
import { Button, IconButton } from '@material-ui/core';

function Favorites() {
    const savePlace = useSelector(state => state.savePlace)
    const {saveHostedPlaceItems} = savePlace

    const dispatch = useDispatch()


    return (
        <>
        {saveHostedPlaceItems && 
            saveHostedPlaceItems.map(saveHostedPlaceItem => (
                <div className="favorites" key={saveHostedPlaceItem.placeId}>
            <img src={saveHostedPlaceItem.image} alt="hotel" />
             <Button className="favorites__removeButton"  style={{color:"#ff7779"}} onClick={ id => dispatch(removePlace(saveHostedPlaceItem.placeId))}>Remove from favorite</Button>

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
                    <h2>₹{saveHostedPlaceItem.price} / night</h2>
                    
                </div>
                </div>
                
            </div>
        </div>
            ))
        
        }
        </>
    )
}

export default Favorites
