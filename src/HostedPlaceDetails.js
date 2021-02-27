import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { hostedPlaceGetDetails, hostedPlaceRatingAction } from './actions/hostActions'
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./HostedPlaceDetails.css"
import SingleBedIcon from '@material-ui/icons/SingleBed';
import FlightIcon from '@material-ui/icons/Flight';
import BusinessIcon from '@material-ui/icons/Business';
import GroupIcon from '@material-ui/icons/Group';
import Rating from './Rating'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import WifiIcon from '@material-ui/icons/Wifi';
import TvIcon from '@material-ui/icons/Tv';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MuiAlert from '@material-ui/lab/Alert';
import { Avatar, Button, CircularProgress, InputLabel, MenuItem, Select, Snackbar } from '@material-ui/core'
import { Cloud } from '@material-ui/icons'
import { HOSTED_PLACE_RATING_RESET } from './constants/hostConstants';




function HostedPlaceDetails() {

    const [selectedDate, setSelectedDate] = useState(new Date('2021-02-24T21:11:54'));
    const [open, setOpen] = useState(false);
    const [openRating, setOpenRating] = useState(false);
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")
    
  
    const dispatch = useDispatch()
    const match = useParams()

    const details = useSelector(state => state.hostedPlaceDetails)
    const {loading, error, placeDetails} = details

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const hostedPlaceRating = useSelector(state => state.hostedPlaceRating)
    const {loading: hostedPlaceRateLoder, error: hostedPlaceRateError, success} = hostedPlaceRating

    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      }

      const handleCloseRating = () => {
        setOpenRating(false);
      };
    
      const handleOpenRating = () => {
        setOpenRating(true);
      };

      function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

      const handleClick = () => {
          dispatch(hostedPlaceRatingAction(match.id, {rating, comment}))
      }

    useEffect(() => {

        dispatch(hostedPlaceGetDetails(match.id))

        if(success){
            setRating(0)
            setComment("")
            dispatch({type: HOSTED_PLACE_RATING_RESET})
        }

        setOpen(true)
    }, [dispatch, match, success])

    return (
        <div className="hostedPlaceDetails">
        {loading && <CircularProgress style={{width:"120px", height:"120px", margin:"300px", color:"#ff7779"}}/>}
            {error && <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}><Alert severity="error">{error}</Alert></Snackbar>}
            <div className="hostedPlaceDetails__image">
                <img src={placeDetails?.image} alt={placeDetails?.title} />
            </div>
            <div className="hostedPlaceDetails__content">
                <div className="hostedPlaceDetails__left">
                    <h1>Welcome To The Amazing & Auspicious {placeDetails?.title}</h1>
                    <p style={{color:"#322b2be0", marginBottom: "15px", marginTop:"5px"}}>{placeDetails?.country}</p>
                    <div className="hostedPlaceDetails__leftGeneralInfo">
                    <Cloud style={{ color: '#ff7779', marginRight:"5px" }}/>
                    <p>{placeDetails?.season} is the best time to visit</p>
                   {placeDetails?.selectedValue === "vacation" ? <FlightIcon style={{ color: '#ff7779', marginRight:"5px" }}/> : placeDetails?.selectedValue === "bussiness" ? <BusinessIcon style={{ color: '#ff7779', marginRight:"5px" }}/> : <GroupIcon style={{ color: '#ff7779', marginRight:"5px" }}/> } 
                    <p>Best suited for {placeDetails?.selectedValue}</p>
                    </div>
                    {placeDetails?.description && 
                    <h3>
                    <ReactReadMoreReadLess charLimit={300}
                        readMoreText={"Read more"}
                        readLessText={"Read less"}
                        readMoreClassName="read-more-less--more"
                        readLessClassName="read-more-less--less"
                    >
                    {placeDetails?.description}
                    </ReactReadMoreReadLess>
                    </h3>
                    }
                    <h5>Contact Host</h5>
                    <div className="hostedPlaceDetails__leftRules">
                    <h4 style={{marginBottom:"20px"}}>Address</h4>
                    <p>{placeDetails?.address}</p>
                    </div>
                    <h4 style={{marginBottom:"20px"}}>Amenities</h4>
                    <div className="hostedPlaceDetails__leftAmenities">
                    <div className="hostedPlaceDetails__leftAmenitiesList">
                    {placeDetails?.amenities.includes("Free Parking")&& <div style={{display:"flex", marginRight:"80px", paddingBottom:"20px", alignItems:"center"}}><LocalParkingIcon style={{fill:"#ff7779", marginRight:"5px"}} /><p>Free Parking</p></div> }
                    {placeDetails?.amenities.includes("Breakfast")&& <div style={{display:"flex", marginRight:"60px", paddingBottom:"20px", alignItems:"center"}}> <FreeBreakfastIcon style={{fill:"#ff7779", marginRight:"5px"}} /> <p>Breakfast</p> </div>}
                    {placeDetails?.amenities.includes("food")&& <div style={{display:"flex", marginRight:"140px", paddingBottom:"20px", alignItems:"center"}}> <FastfoodIcon style={{fill:"#ff7779", marginRight:"5px"}} /> <p>Food</p> </div> }
                    {placeDetails?.amenities.includes("Wifi")&& <div style={{display:"flex", marginRight:"60px", paddingBottom:"20px", alignItems:"center"}}> <WifiIcon style={{fill:"#ff7779", marginRight:"5px"}} /> <p>Wifi</p> </div>}
                    {placeDetails?.amenities.includes("Cable TV")&& <div style={{display:"flex", marginRight:"110px", paddingBottom:"20px", alignItems:"center"}}> <TvIcon style={{fill:"#ff7779", marginRight:"5px"}} /> <p>Cable TV</p> </div>}
                    {placeDetails?.amenities.includes("Air Conditioning")&& <div style={{display:"flex", marginRight:"60px", paddingBottom:"20px", alignItems:"center"}}> <AcUnitIcon style={{fill:"#ff7779", marginRight:"5px"}} /> <p>AC</p> </div>}
                    </div>
                    </div>
                    <div className="hostedPlaceDetails__leftRules">
                    <h4 style={{marginBottom:"20px"}}>Sleeping Arrangements</h4>
                    <div style={{border:"1px solid lightgray", width:"30%", padding:"10px"}}>
                    <SingleBedIcon style={{fill:"#ff7779", marginBottom:"20px"}} fontSize={"large"}/>
                    <h4 style={{marginBottom:"8px"}}>Bedroom {placeDetails?.numberOfBedrooms}</h4> 
                    <p>1 {placeDetails?.typeOfBed} bed</p> 
                    </div>
                    </div>
                    <div className="hostedPlaceDetails__leftRules">
                    <h4 style={{marginBottom:"20px"}}>Rules</h4>
                    <p>No Smoking outside the room premises.</p>
                    <p>Not Suitable for pets.</p>
                    <p>Carry Covid-19 negative report along with you.</p>
                    <p>Check Out time can be extended if and only if there is no booking.</p>
                    <p>Self Check In with keycard</p>
                    <p>Maintain cleanliness around the premises.</p>
                    </div>
                    <div className="hostedPlaceDetails__leftCancellation">
                    <h4 style={{marginBottom:"20px"}}>Cancellations</h4>
                    <p>Strict</p>
                    <p>There is a strict policy for Cancellations. People can cancel before checking in the hotel. Refund will be done within 24 hours</p>
                    <h5>Get More Details</h5>
                    </div>
                   
                    <div>
                            <div className="hostedPlaceDetails__leftCustomerReviews">
                                <h2>Write Customer Review</h2>
                                {userInfo ? (
                                        <>
                                        <InputLabel id="demo-simple-select-filled-label">Rate the Place</InputLabel>
                                        <Select
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                open={openRating}
                                                onClose={handleCloseRating}
                                                onOpen={handleOpenRating}
                                                value={rating}
                                                onChange={e => setRating(e.target.value)}
                                                style={{marginBottom:"30px"}}
                                                >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"1"}>1 - Poor</MenuItem>
                                            <MenuItem value={"2"}>2 - Fair</MenuItem>
                                            <MenuItem value={"3"}>3 - Good</MenuItem>
                                            <MenuItem value={"4"}>4 - Very Good</MenuItem>
                                            <MenuItem value={"5"}>5 - Excellent</MenuItem>
                                        </Select>
                                    <label>Comment</label>
                                    <input type="text" placeholder="  Add Your Comment" value={comment} onChange={e => setComment(e.target.value)} />
                                    <Button onClick={handleClick}>Submit review</Button>
                                    {hostedPlaceRateLoder && <CircularProgress style={{width:"85px", height:"85px", margin:"100px", color:"#ff7779"}}/>}
                                    {hostedPlaceRateError && <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}><Alert severity="error">{hostedPlaceRateError}</Alert></Snackbar>}
                                    </>
                                ) : <p> To add comment and review the place please <Link to="/login"> <strong style={{textDecoration:"underline"}}>sign in</strong></Link></p>} 
                            </div>
                            <div className="hostedPlaceDetails__leftReviews">
                        <h2>{placeDetails?.reviews.length} reviews</h2>
                        <Rating color={"rgb(90 195 183)"} value={placeDetails?.rating} />
                    </div>

                        {placeDetails?.reviews.map(review => (
                            
                            <div key={review._id} style={{marginBottom:"20px"}}>
                            <div style={{display:"flex", alignItems:"center"}}>
                            <Avatar />
                            <div style={{marginLeft:"8px", marginRight:"15px"}}>
                            <p>{review.name}</p>
                            <p>{review.createdAt.substring(0, 10)}</p>
                            </div>
                            <Rating color={"rgb(90 195 183)"} value={review.rating} />
                            </div>
                            <p style={{marginTop:"10px"}}>{review.comment}</p>
                            </div>
                            
                           
                        ))}
                        
                    </div>
                </div>
                <div className="hostedPlaceDetails__right">
                    <div className="hostedPlaceDetails__rightContent">
                        <div className="hostedPlaceDetails__rightContentPrice">
                        <h1>₹{placeDetails?.price}</h1>
                        <span>per night</span>
                        </div>
                        <div className="hostedPlaceDetails__rightContentReviews">
                        <Rating color={"rgb(90 195 183)"} value={placeDetails?.rating} />
                    </div>
                    <div className="hostedPlaceDetails__rightContentDetails">

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="Check-In"
                            label="Check-In"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                            'aria-label': 'change date',
                            }}
                        />
        
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="Check-Out"
                            label="Check-Out"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                            'aria-label': 'change date',
                            }}
                        />
                        </Grid>
                        </MuiPickersUtilsProvider>
                        
                        <div className="hostedPlaceDetails__rightContentGuests">
                            <label>Guests</label>
                            <input type="number" placeholder="1 Guest" />
                            <Button>Check Availability</Button>
                            <p>You won't be charged yet</p>
                        </div>
                        <div className="hostedPlaceDetails__rightContentDetailsInfo">
                            <h4>This place is on peoples minds.</h4>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Light_Bulb_or_Idea_Flat_Icon_Vector.svg/857px-Light_Bulb_or_Idea_Flat_Icon_Vector.svg.png" alt="" />
                        </div>
                        <p style={{marginBottom:"20px"}}>This place is viewed by most of the people & shown lots of love.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostedPlaceDetails
