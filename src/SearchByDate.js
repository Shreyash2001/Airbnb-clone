import { Button, IconButton, makeStyles, Popover, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import Rating from './Rating';
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons';
import { removePlace, saveAddPlace } from './actions/saveActions';
import "./SearchByDate.css"

function SearchByDate() {
   
    const dates = window.location.pathname.split("=")

    var regexEnd = /\d+/;
    var stringEnd = dates.toString();
    var startDate = stringEnd.match(regexEnd);

    const endDate = Number(dates[2])

    const dispatch = useDispatch()

    const hostedPlaceSearch = useSelector(state => state.hostedPlaceSearch)
    const {searchedHostedPlaces} = hostedPlaceSearch

    const savePlace = useSelector(state => state.savePlace)
    const { saveHostedPlaceItems} = savePlace

    const userLogin = useSelector(state => state.userLogin)
   const {userInfo} = userLogin

    const useStyles = makeStyles((theme) => ({
        popover: {
          pointerEvents: 'none',
        },
        paper: {
          padding: theme.spacing(1),
        },
      }));
      const classes = useStyles();
      const [anchorEl, setAnchorEl] = useState(null);
      const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handlePopoverClose = () => {
        setAnchorEl(null);
      };
      
    
      const open = Boolean(anchorEl);
      const history = useHistory()


    return (
        <>
        {searchedHostedPlaces.length === 0 ? <div style={{display:"flex", alignItems:"center"}}><img src ="https://res.cloudinary.com/cqn/image/upload/v1614774722/no-data-concept-illustration_114360-616_sikpoq.jpg" alt="not found data" /> <h1 style={{fontSize:"70px"}}>Sorry!! Result Not Found. Try Another Location</h1></div> :
        
            <>
        {searchedHostedPlaces && 
            searchedHostedPlaces.map(searchedHostedPlace => (
                <div className="searchByDate" key={searchedHostedPlace.placeId}>
            <img src={searchedHostedPlace.image} alt="hotel" />
            {saveHostedPlaceItems?.map(saveHostedPlaceItem => (
                searchedHostedPlace._id === saveHostedPlaceItem.placeId
            ) && <><IconButton className="searchByDate__heart"><Favorite style={{color:"#ff7779"}} /> </IconButton> <Button className="searchByDate__removeButton" onClick={() => dispatch(removePlace(searchedHostedPlace._id))}>Remove from favorite</Button></>)}
            
            <IconButton className="searchByDate__heart" onClick={() => dispatch(saveAddPlace(searchedHostedPlace._id))}><FavoriteBorderOutlined  style={{color:"#ff7779"}} /></IconButton>
            {userInfo ?  
           <IconButton className="searchResult__heart" onClick={() => dispatch(saveAddPlace(searchedHostedPlace._id))}>
           <FavoriteBorderOutlined  style={{color:"#ff7779"}} />
           </IconButton> 
           :  
           <IconButton className="searchResult__heart" onClick={() => history.push("/login")}>
           <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <FavoriteBorderOutlined style={{color:"#ff7779"}} />
            </Typography>
            <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography style={{color:"#f7779", width:"200px"}}>To save this place you need to Sign In. Click the heart icon and you will be redirected to login page.</Typography>
      </Popover>
           </IconButton>}

            <div className="searchByDate__info">
                <div className="searchByDate__infoTop">
                    <p>{searchedHostedPlace.country}</p>
                   <Link to={`/host/${searchedHostedPlace._id}`}><h3>{searchedHostedPlace.title}</h3></Link>
                    <p>_____</p>
                    <ReactReadMoreReadLess charLimit={300}
                        readMoreText={"Read more"}
                        readLessText={"Read less"}
                        readMoreClassName="read-more-less--more"
                        readLessClassName="read-more-less--less"
                    >{searchedHostedPlace.description}</ReactReadMoreReadLess>
                    
                </div>
                <div className="searchByDate__infoBottom">
                    <div className="searchByDate__stars">
                    
                        <Rating value={searchedHostedPlace.rating} />
                        <h3 style={{marginRight:"8px"}}> Reviewed By {searchedHostedPlace.numReviews} people</h3>
                    </div>
                    <div className="searchByDate__price">
                    <h2>₹{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(searchedHostedPlace.price)} / night</h2>
                    <p>₹{new Intl.NumberFormat('en-IN').format(searchedHostedPlace.price * (endDate - startDate))} total</p>
                    
                </div>
                </div>
                
            </div>
        </div>
            ))
        
        }
        </>
        }
        </>
    )
}

export default SearchByDate
