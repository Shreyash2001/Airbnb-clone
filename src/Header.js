import React, { useState } from 'react'
import "./Header.css"
import LanguageIcon from '@material-ui/icons/Language'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search'
import { Link, useHistory } from 'react-router-dom'
import { Button, IconButton, makeStyles, Popover, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from './actions/userActions'

function Header() {
  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
    },
    dropdown: {
      position: 'absolute',
      top: 45,
      right: 0,
      left: 0,
      zIndex: 1,
      border: '1px solid lightgray',
      width: '120px',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
  }));

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler = () => {
        dispatch(logout())
        setAnchorEl(null);
    }

    const handleClose = () => {
        setAnchorEl(null);
      }
      
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      }


    const handleFavoriteClick = () => {
      history.push("/favorites")
      setAnchorEl(null);
    }
    const handleFavoriteClickExperience = () => {
      history.push("/experiences/favorites")

      setAnchorEl(null);
    }
    const handleHostOnboardingClick = () => {
      history.push("/experiences/hostonline")
      setAnchorEl(null);
    }

    const handleClickHostPlace = () => {
      history.push("/host")
      setAnchorEl(null);
    }
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;
      

    return (
        <div className="header">
           <Link to="/"> <img className="header__logo" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="header logo" /></Link>

            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>
            
            <div className="header__right">
            {userInfo && <Button className="header__rightButton" onClick={() => history.push("/host")}>Host</Button>}
            <LanguageIcon />
                
             {userInfo ?  
             <>
             <Button aria-describedby={id} onClick={handleClick}>
             <div style={{alignItems:"center", display:"flex"}}>
             <PersonIcon style={{color: "#ff7779"}} />
             <p style={{textTransform:"capitalize", fontSize:"21px", color:"#ff7779"}}>{userInfo.name}</p>
             </div>
             </Button>
             <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography>
        <div>
            <div style={{padding:"10px 20px 10px 30px", borderBottom:"1px solid lightgray", display:"flex", flexDirection:"column"}}>
                <Button style={{textTransform: "inherit"}} onClick={handleFavoriteClick}>Favorite Places</Button>
                <Button style={{textTransform: "inherit"}} onClick={handleFavoriteClickExperience}>Favorite Experiences</Button>
            </div>
            <div style={{padding: "20px", display:"flex", flexDirection:"column"}}>
            
                <Button style={{textTransform: "inherit"}} onClick={handleClickHostPlace}>Host a Place</Button>
                <Button style={{textTransform: "inherit"}} onClick={handleHostOnboardingClick}>Host an Experience</Button>
                <Button style={{textTransform: "inherit"}} onClick={logoutHandler}>SignOut</Button>
                
            </div>
        </div>
        </Typography>
      </Popover>
      </>
              :  <IconButton>
              <Link to="/login" style={{color:"inherit"}}>
              <AccountCircleIcon />
              </Link>
              </IconButton>}
            </div>
        </div>
    )
}

export default Header
