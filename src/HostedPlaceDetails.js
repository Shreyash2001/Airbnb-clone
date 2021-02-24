import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { hostedPlaceGetDetails } from './actions/hostActions'
import "./HostedPlaceDetails.css"
import PeopleIcon from '@material-ui/icons/People';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import BathtubIcon from '@material-ui/icons/Bathtub';
import Rating from './Rating'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core'



function HostedPlaceDetails() {

    const [selectedDate, setSelectedDate] = useState(new Date('2021-02-24T21:11:54'));
  
  
    const dispatch = useDispatch()
    const match = useParams()
    const details = useSelector(state => state.hostedPlaceDetails)
    const {loading, error, placeDetails} = details

    const handleDateChange = (date) => {
        setSelectedDate(date);
      };



    useEffect(() => {
        dispatch(hostedPlaceGetDetails(match.id))
    }, [dispatch, match])

    return (
        <div className="hostedPlaceDetails">
            <div className="hostedPlaceDetails__image">
                <img src={placeDetails?.image} alt={placeDetails?.title} />
            </div>
            <div className="hostedPlaceDetails__content">
                <div className="hostedPlaceDetails__left">
                    <h1>Welcome To The Amazing & Auspicious {placeDetails?.title}</h1>
                    <p style={{color:"#322b2be0", marginBottom: "15px", marginTop:"5px"}}>{placeDetails?.country}</p>
                    <div className="hostedPlaceDetails__leftGeneralInfo">
                    <PeopleIcon />
                    <p>2 Guests</p>
                    <SingleBedIcon />
                    <p>1 Bed</p>
                    <BathtubIcon />
                    <p>1 Private Bathroom</p>
                    </div>
                    <h3>{placeDetails?.description}</h3>
                    <h5>Contact Host</h5>
                    <div className="hostedPlaceDetails__leftRules">
                    <h4>Address</h4>
                    <p>{placeDetails?.address}</p>
                    </div>
                    <div className="hostedPlaceDetails__leftRules">
                    <h4>House Rules</h4>
                    <p>{placeDetails?.rules}</p>
                    </div>
                    <div className="hostedPlaceDetails__leftCancellation">
                    <h4>Cancellations</h4>
                    <p>Strict</p>
                    <p>There is a strict policy for Cancellations. People can cancel before checking in the hotel. Refund will be done within 24 hours</p>
                    <h5>Get More Details</h5>
                    </div>
                    <div className="hostedPlaceDetails__leftReviews">
                        <h2>{placeDetails?.reviews.length} reviews</h2>
                        <Rating color={"rgb(90 195 183 / 79%)"} value={placeDetails?.reviews.length} />
                    </div>
                </div>
                <div className="hostedPlaceDetails__right">
                    <div className="hostedPlaceDetails__rightContent">
                        <div className="hostedPlaceDetails__rightContentPrice">
                        <h1>₹{placeDetails?.price}</h1>
                        <span>per night</span>
                        </div>
                        <div className="hostedPlaceDetails__rightContentReviews">
                        <h3>{placeDetails?.reviews.length}</h3>
                        <Rating color={"rgb(90 195 183 / 79%)"} value={placeDetails?.reviews.length} />
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
