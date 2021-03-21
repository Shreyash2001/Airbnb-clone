import { Button, IconButton, makeStyles, Popover, Typography } from '@material-ui/core';
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons'
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Link, useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import Rating from './Rating';
import "./SearchResult.css"
import { removePlace, saveAddPlace } from './actions/saveActions';
import { useState } from 'react';

function SearchResult({ img, location, title, description, price, selectedValue, value, id, numReviews }) {
    const dispatch = useDispatch()

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

   const savePlace = useSelector(state => state.savePlace)
   const { saveHostedPlaceItems} = savePlace

   const userLogin = useSelector(state => state.userLogin)
   const {userInfo} = userLogin

   const history = useHistory()

    const handleClick = () => {
        dispatch(saveAddPlace(id))
    }
    const handleRemoveClick = () => {
        dispatch(removePlace(id))
    }

    var found = false;
    for(var i = 0; i < saveHostedPlaceItems.length; i++) {
        if (saveHostedPlaceItems[i].placeId === id) {
          found = true;
          break;
      }
  }
    
    return (
        <div className="searchResult">
            <img src={img} alt="hotel" />
            
            {userInfo ? found
                    ?
                    <IconButton onClick={handleRemoveClick}> <Favorite style={{stroke:"rgb(255, 255, 255)", fontSize:"1.7rem", color:"#ff7779"}} /> </IconButton>
                    :
                  <IconButton onClick={handleClick}> <Favorite style={{stroke:"rgb(255, 255, 255)", fontSize:"1.7rem"}} /> </IconButton> 
                  :
                  
                  <IconButton onClick={() => history.push("/login")}>
           <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <IconButton disabled> <Favorite disabled style={{stroke:"rgb(255, 255, 255)", fontSize:"1.7rem"}} /> </IconButton>
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
        <Typography style={{color:"#f7779", width:"200px"}}>To save this experience you need to <b>Sign In</b>. Click the icon and you will be redirected to login page.</Typography>
      </Popover>
           </IconButton>
                }

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
                    <h2>₹{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price)} / night</h2>
                    <p>{selectedValue}</p>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default SearchResult
