import { IconButton, makeStyles, Popover, Typography } from '@material-ui/core'
import { Favorite } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { removeExperiences, saveAddExperience } from './actions/saveActions'
import "./ExperienceContainedCard.css"
import Rating from './Rating'

function ExperienceContainedCard({image, id, value, theme, typeOfExperience, price, location, title}) {

   const history = useHistory()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(saveAddExperience(id))
    }

    const handleClickRemove = () => {
        dispatch(removeExperiences(id))
    }
    const {saveExperiences} = useSelector(state => state.saveExperience)
    const {userInfo} = useSelector(state => state.userLogin)
    
    var found = false;
    for(var i = 0; i < saveExperiences.length; i++) {
    if (saveExperiences[i].experienceId === id) {
            found = true;
            break;
        }
    }

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

  const open = Boolean(anchorEl)

    return (
        <div className="experienceContainedCard">
            <div>
            <div>
             <div className="experienceContainedCard__container">
                <div style={{padding:"20px"}}>
                   <div>
                   <div style={{backgroundImage: `url(${image})`,
                backgroundSize:"cover",  
                height:"300px", 
                minWidth:"400px", 
                backgroundRepeat:"no-repeat", 
                backgroundPosition:"center", 
                borderRadius:"12px",
                marginBottom:"8px",
                border: "1px solid lightgray",
                }}>
                   <div>
                   {userInfo ? found
                    ?
                    <IconButton onClick={handleClickRemove}> <Favorite style={{stroke:"rgb(255, 255, 255)", fontSize:"1.7rem", color:"#ff7779"}} /> </IconButton>
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
                   </div>
                   <Link to={`/experiences/online/${id}`}> <div>
                <div style={{display:"flex", alignItems:"center", marginBottom:"10px"}}>
                   <p>{location}</p> 
                   <div style={{margin:"0 8px 0 8px"}}>·</div>
                   <p>{theme}</p>
                   <div style={{margin:"0 8px 0 8px"}}>·</div>
                   <p>{typeOfExperience}</p> 
                </div>

                   <h2 style={{marginBottom:"10px"}}>{title}</h2> 
                   <div className="experienceContainedCard__price">
                  <span><strong>From ₹{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price)}</strong>/person</span>
                </div>
                    
                   <Rating value={value} />
                   </div>
                   </Link>
                </div>
                
                </div>
                
                </div>
                
            </div>
            
        </div>
    )
}

export default ExperienceContainedCard
