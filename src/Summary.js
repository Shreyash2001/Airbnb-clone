import { Cloud } from '@material-ui/icons'
import FlightIcon from '@material-ui/icons/Flight';
import BusinessIcon from '@material-ui/icons/Business';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import GroupIcon from '@material-ui/icons/Group';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams} from 'react-router-dom';
import { HOSTED_PLACE_BOOKING_RESET } from "./constants/hostConstants"
import "./Summary.css"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';


function Summary() {

    const [open, setOpen] = useState(false);
    const history = useHistory()
    const dispatch = useDispatch()
    const match = useParams()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };
  const handleCloseButton = () => {
    setOpen(false);
    history.push("/")
    dispatch({type: HOSTED_PLACE_BOOKING_RESET })
  };

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const hostedPlaceSummary = useSelector(state => state.hostedPlaceSummary)
    const {summaryOfPlace} = hostedPlaceSummary

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    
    var startDate = isEmpty(summaryOfPlace) ? 0 : summaryOfPlace.rangeOfDate[0] 
    var lastDate = isEmpty(summaryOfPlace) ? 0  : summaryOfPlace.rangeOfDate.length-1

    
    
    return (
        <>
        {!isEmpty(summaryOfPlace) ? 
    
        <div className="summary">
             <div className="summaryLeft">
             
                <div className="summaryLeft__placeInfo">
                    <img src={summaryOfPlace?.image} alt={summaryOfPlace?.title} />
                    <h2 style={{color:"#ff7779", marginBottom:"10px"}}>{summaryOfPlace?.title}</h2>
                    <div className="summaryLeft__placeBasicInfo">
                    <Cloud style={{ color: '#ff7779', marginRight:"5px" }}/>
                    <p style={{marginRight:"10px"}}>{summaryOfPlace?.season} is the best time to visit</p>
                   {summaryOfPlace?.selectedValue === "vacation" ? <FlightIcon style={{ color: '#ff7779', marginRight:"5px" }}/> : summaryOfPlace?.selectedValue === "bussiness" ? <BusinessIcon style={{ color: '#ff7779', marginRight:"5px" }}/> : <GroupIcon style={{ color: '#ff7779', marginRight:"5px" }}/> } 
                    <p>Best suited for {summaryOfPlace?.selectedValue}</p>
                    </div>
                    <div className="summaryLeft__placeInfoAddress">
                    <h3 style={{color:"#ff7779"}}>Country: </h3>
                    <p>{summaryOfPlace?.country}</p>
                    </div>
                    <div style={{marginBottom:"10px"}}>
                    <h3 style={{color:"#ff7779"}}>Address:</h3>
                    <p>{summaryOfPlace?.address}</p>
                    </div>
                    <div className="summaryLeft__placeInfoAddress">
                    <h3 style={{color:"#ff7779"}}>Booking From:</h3>
                    <p><strong>{startDate} - {summaryOfPlace?.rangeOfDate[lastDate]}</strong></p>
                    </div>
                </div>
             </div>

             <div className="summaryRight">
                <div style={{padding:"10px"}}>
                <h1 style={{color:"#ff7779", marginLeft:"60px"}}>Book Your Place</h1>
                </div>
                <div className="summaryRight__info">
                <h3 style={{color:"#ff7779"}}>Name:</h3>
                <h3>{userInfo.name}</h3>
                </div>
                <div className="summaryRight__info">
                <h3 style={{color:"#ff7779"}}>Email:</h3>
                <h3>{userInfo.email}</h3>
                </div>
                <div className="summaryRight__info">
                    <h3 style={{color:"#ff7779"}}>Total Amenities:</h3>
                    <h3>{summaryOfPlace?.amenities.length} Provided</h3>
                </div>
                <div className="summaryRight__info">
                    <h3 style={{color:"#ff7779"}}>Total Days:</h3>
                    <h3>{summaryOfPlace?.rangeOfDate.length} Days</h3>
                </div>
                <div className="summaryRight__info">
                    <h3 style={{color:"#ff7779"}}>Price:</h3>
                    <h3>₹{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(summaryOfPlace?.price)} / night</h3>
                </div>
                <div className="summaryRight__info">
                    <h3 style={{color:"#ff7779"}}>Total Price:</h3>
                    <h3>₹{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(summaryOfPlace?.price * summaryOfPlace?.rangeOfDate.length)}</h3>
                </div>
                <div className="summaryRight__infoButton">
                <Button onClick={handleClickOpen}>
                Reserve
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title"><h1>Booking Confirmed</h1></DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{display:"flex", alignItems:"center"}}>
                    <CheckCircleIcon style={{color:"green", fontSize:"30px", marginRight:"10px"}}/> <h2>Hurray!! Enjoy your stay at <strong style={{color:"#ff7779", textDecoration:"underline"}}>{summaryOfPlace?.title}</strong></h2>
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleCloseButton} style={{color:"#ff7779"}} autoFocus>
                        Back to homepage
                    </Button>
                    </DialogActions>
                </Dialog>
                </div>
             </div>

        </div> : 
        <div style={{display:"flex", alignItems:"center"}}>
        <img src="https://res.cloudinary.com/cqn/image/upload/v1614941958/no-data-concept-illustration_114360-2506_gei1fa.jpg" alt="Data not found" style={{width:"70%"}}/>
        <h1 style={{fontSize:"45px"}}>If you are seeing these then please <Link to={`/host/${match.id}`}><strong style={{textDecoration:"underline"}}>click here</strong></Link> and and try again!!</h1>
        </div>}
        </>
    )
}

export default Summary
