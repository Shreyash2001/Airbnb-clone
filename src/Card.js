import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
import Rating from './Rating'
import { Button, IconButton, makeStyles, Popover, Typography } from '@material-ui/core';
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons'
import { useHistory } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { removePlace, saveAddPlace } from './actions/saveActions';

function Card({images, title, price, country, season, id, value, selectedValue}) {
  
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
        <>
        <div className="card">
            <div>
            <div>
                <div style={{backgroundImage: `url(${images})`,
                backgroundSize:"cover",  
                height:"300px", 
                width:"100%", 
                backgroundRepeat:"no-repeat", 
                backgroundPosition:"center", 
                borderRadius:"12px",
                marginBottom:"8px",
                border: "1px solid lightgray"
                }}>
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
                </div>
            </div>

            <Link to={`/host/${id}`}> <div>
                <div style={{display:"flex", alignItems:"center"}}>
                    <p>{country}</p>
                    <div style={{marginLeft:"4px", marginRight:"4px"}}>·</div>
                    <p>{season}</p>
                    <div style={{marginLeft:"4px", marginRight:"4px"}}>·</div>
                    <p>{selectedValue}</p>
                </div>
                <div className="card__info">
                <div>
                    <h3>{title}</h3>
                </div>
                <div className="card__infoPrice">
                  <span><strong>From ₹{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price)}</strong>/night</span>
                </div>
                <div>
                    <Rating value={value} />
                </div>
                </div>
                </div>
                </Link>
            </div>
        </div>
        
        </>
    )
}

export default Card
