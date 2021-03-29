import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./ExperiencesDetails.css"
import CloudIcon from '@material-ui/icons/Cloud';
import Rating from './Rating'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleIcon from '@material-ui/icons/People';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import MuiAlert from '@material-ui/lab/Alert';
import { Avatar, Button, CircularProgress, InputLabel, MenuItem, Select, Snackbar } from '@material-ui/core'
import { createExperienceReview, getExperienceByIdResult, getSimilarExperience } from './actions/experienceActions';
import { EXPERIENCE_CREATE_REVIEW_RESET } from './constants/experienceConstants';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ExperienceCard from './ExperienceCard';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';




function ExperiencesDetails() {

    const scrollOnClickRightPopular = () => {
        sideScroll(document.getElementById("popular"),'right',10,1500,20); 
    }
    const scrollOnClickLeftPopular = () => { 
        sideScroll(document.getElementById("popular"),'left',10,1500,20);
    }

    function sideScroll(element,direction,speed,distance,step){
        var scrollAmount = 0;
         var slideTimer = setInterval(function(){
             if(direction === 'left'){
                 element.scrollLeft -= step;
             } else {
                 element.scrollLeft += step;
             }
             scrollAmount += step;
             if(scrollAmount >= distance){
                 window.clearInterval(slideTimer);
             }
         }, speed);
     }

    const useStyles = makeStyles((theme) => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          
        },
        paper: {
          backgroundColor: theme.palette.background.paper,
          border: '1px solid white',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          width: "1000px",
          height:"90vh"
        },
      }));

      const classes = useStyles();
      const [openModal, setOpenModal] = useState(false);
    
      

    const [open, setOpen] = useState(false);
    const [openRating, setOpenRating] = useState(false);
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")
    
    
      
    const dispatch = useDispatch()
    const match = useParams()


    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin


    const {experienceByIdResult, loading: loadingExperienceById, error: errorExperienceById,} = useSelector(state => state.getExperienceById)

    const {similarExperience, loading:loadingSimilar, error: errorSimilar} = useSelector(state => state.similarExperience)

    const {success:successReview, loading:loadingReview, error: errorReview} = useSelector(state => state.createReview)


    

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
          dispatch(createExperienceReview(match.id, rating, comment))
      }

      const handleClickBook = () => {
        setOpenModal(true)
      }
      const handleCloseModal = () => {
        setOpenModal(false)
      }

      function endOfWeek(date)
  {
     var monday = date.getDate() - (date.getDay() - 1);
     var tuesday = date.getDate() - (date.getDay() - 1)+1;
     var wednesday = date.getDate() - (date.getDay() - 1) + 2;
     var thursday = date.getDate() - (date.getDay() - 1) + 3;
     var friday = date.getDate() - (date.getDay() - 1) + 4;
    var saturday = date.getDate() - (date.getDay() - 1) + 5;
    var sunday = date.getDate() - (date.getDay() - 1) + 6;
    return [new Date(date.setDate(monday)), new Date(date.setDate(tuesday)), new Date(date.setDate(wednesday)), new Date(date.setDate(thursday)), new Date(date.setDate(friday)), new Date(date.setDate(saturday)), new Date(date.setDate(sunday))];
  }

    var dt = new Date(); 
    const arrOfDates = endOfWeek(dt)

    const history = useHistory()
    
    useEffect(() => {

        dispatch(getExperienceByIdResult(match.id))
        dispatch(getSimilarExperience(match.id))
        

        if(successReview){
            setRating(0)
            setComment("")
            dispatch({type: EXPERIENCE_CREATE_REVIEW_RESET})
        }

        setOpen(true)
        setOpenModal(false)
        
        
    }, [dispatch, match, successReview])

    


    return (
    <>
        
        {loadingExperienceById ? <CircularProgress style={{width:"10%", height:"15%", margin:"10% 35% 10% 40%", color:"#ff7779"}}/> 
        :
        <div className="experiencesDetails">
            
            {errorExperienceById && <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}><Alert severity="error">{errorExperienceById}</Alert></Snackbar>}

            <div style={{padding:"50px 80px 0px 70px"}}>
            <div style={{display:"flex", alignItems:"center"}}>
            {experienceByIdResult?.typeOfExperience === "In-person" ? <PeopleIcon style={{marginRight:"10px"}} /> : <img style={{width:"30px", height:"20px", marginRight:"10px"}} src="https://res.cloudinary.com/cqn/image/upload/v1615715642/noun_led_smart_tv_2816240_tpih4z.png" alt="tv" />}
            <h5 style={{fontSize:"20px"}}>{experienceByIdResult?.typeOfExperience}</h5>
            </div>
            <h1 style={{padding:"10px 0 10px 0"}}>{experienceByIdResult?.title}</h1>

            <div style={{display:"flex", alignItems:"center"}}>
            <Rating color={"rgb(90 195 183)"} value={experienceByIdResult?.rating} />
            <div style={{margin:"0 8px 0 8px"}}>·</div>
            <h3>{experienceByIdResult?.location}</h3>
            <div style={{margin:"0 8px 0 8px"}}>·</div>
            <h3>Part of Airbnb Online Experiences</h3>
            </div>
            
            </div>
            
            <div className="experiencesDetails__images">
            {experienceByIdResult?.image?.map(image => (
                <div>
                <img src={image} alt="new" />
                </div>
            ))}
                
            </div>
            <div className="experiencesDetails__content">
                <div className="experiencesDetails__left">
                    <h1>Online experience hosted by<span style={{color:"#ff7779", textTransform:"capitalize"}}> {userInfo?.name}</span> </h1>
                    <div className="experiencesDetails__leftGeneralInfo">
                    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <WatchLaterOutlinedIcon style={{ color: '#484848', marginRight:"5px" }}/>
                    <p>{experienceByIdResult?.time}</p>
                    <div style={{display:"flex", alignItems:"center", marginLeft:"280px"}}>
                    <CloudIcon /><p style={{marginLeft:"10px"}}>{experienceByIdResult?.startTime}</p>
                    </div>
                    </div>
                    
                    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:"50px"}}>
                    {experienceByIdResult?.typeOfExperience === "In-person" ? 
                    <div style={{display:"flex", marginRight:"80px"}}> 
                    <PeopleIcon style={{marginRight:"10px"}} />
                    <p>Specify your address to the host.</p> 
                    </div> : 
                    <div style={{display:"flex", marginRight:"60px"}}> <img style={{width:"30px", height:"20px", marginRight:"10px"}} src="https://res.cloudinary.com/cqn/image/upload/v1615715642/noun_led_smart_tv_2816240_tpih4z.png" alt="tv" />  
                    <p style={{maxWidth:"240px"}}>Join from your computer, phone, or tablet</p></div>
                    }
                    
                    <div style={{display:"flex", alignItems:"center"}}>
                    <ChatBubbleOutlineIcon /> 
                    <p style={{marginLeft:"10px"}}>Hosted in {experienceByIdResult?.language}</p>
                    </div>
                    </div>
                    </div>
                
                    
                    <div className="experiencesDetails__leftRules">
                    <h2 style={{marginBottom:"20px"}}>What you'll do</h2>
                    <h3 style={{fontWeight:"400", fontSize:"16px", marginBottom:"20px"}}>
                    { experienceByIdResult?.description &&
                    <ReactReadMoreReadLess charLimit={300}
                        readMoreText={"Read more"}
                        readLessText={"Read less"}
                        readMoreClassName="read-more-less--more"
                        readLessClassName="read-more-less--less"
                    >
                    {experienceByIdResult.description}
                    </ReactReadMoreReadLess>
                    }
                    </h3>
                    </div>
                    <div className="experiencesDetails__leftRules">
                    <h2 style={{marginBottom:"20px", paddingTop:"20px"}}>How to participate?</h2>
                    <div style={{border:"1px solid lightgray", width:"30%", padding:"10px", marginBottom:"20px"}}>
                     {experienceByIdResult?.typeOfExperience === "In-person" ? 
                     <>
                     <PeopleIcon style={{marginRight:"10px"}} />
                     <h4 style={{marginBottom:"8px"}}>Join in person</h4> 
                    <p>We will explore and enjoy altogether. You will have a great time with {experienceByIdResult?.isWorkingSolo ? "me" : "me and my team" }.</p> 
                    </>
                      : 
                      <>
                      <ImportantDevicesIcon />
                      <h4 style={{marginBottom:"8px"}}>Join a video call</h4> 
                    <p>Use Zoom to participate on your desktop or mobile device. After you book, you’ll receive an email with a link and details on how to join.</p>
                      </>
                      }
                    
                    </div>
                    </div>
                    <div className="experiencesDetails__leftRules">
                    <h2 style={{marginBottom:"20px", paddingTop:"20px"}}>What to bring?</h2>
                    <p>{experienceByIdResult?.guestBring}</p>
                    </div>

                    <div className="experiencesDetails__leftRules">
                    <div style={{marginBottom:"20px"}}>
                    <h2 style={{textTransform:"capitalize"}} >Meet your host, {userInfo?.name}</h2>
                    <p>Host on Airbnb since {experienceByIdResult?.createdAt && experienceByIdResult?.createdAt.substring(0, 4)}</p>
                    </div>
                    <p style={{fontWeight:"400", fontSize:"16px", marginBottom:"20px"}}>
                    { experienceByIdResult?.story &&
                    <ReactReadMoreReadLess charLimit={300}
                        readMoreText={"Read more"}
                        readLessText={"Read less"}
                        readMoreClassName="read-more-less--more"
                        readLessClassName="read-more-less--less"
                    >
                    {experienceByIdResult.story}
                    </ReactReadMoreReadLess>
                    }
                    
                    </p>
                    <Button variant="outlined" style={{textTransform:"inherit"}}><a href={`mailto:${userInfo?.email}`}>Contact Host </a></Button>
                    </div>

                    <div className="experiencesDetails__leftCancellation">
                    <h2 style={{marginBottom:"20px"}}>Cancellations</h2>
                    <p>There is a strict policy for Cancellations. People can cancel before checking in the hotel. Refund will be done within 24 hours.</p>
                    </div>
                   
                    
                    
                    
                    
                </div>
                <div className="experiencesDetails__right">
                    <div className="experiencesDetails__rightContent">
                        <div className="experiencesDetails__rightContentPrice">
                        <h1>₹{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(experienceByIdResult?.price)}</h1>
                        <span>per person</span>
                        </div>
                        <div className="experiencesDetails__rightContentReviews">
                        <Rating color={"rgb(90 195 183)"} value={experienceByIdResult?.rating} />
                    </div>
                    <div className="experiencesDetails__rightContentDetails">
                        
                        <div className="experiencesDetails__rightContentGuests">
                            {experienceByIdResult?.availability === "Weekends" 
                            ?
                            <div>
                            <h1 style={{marginBottom:"30px", fontWeight:"400"}}>Let's have Fun This Weekend</h1>
                                <div className="experiencesDetails__rightContentChoose">
                                <div>
                                    <h3>Saturday</h3>
                                   <span> {arrOfDates[5].toString().substring(4,11)}</span>
                                </div>
                               {userInfo ?  <Button onClick={handleClickBook}>Book</Button> : <Button onClick={() => history.push("/login")}>Sign in to book</Button> }
                                </div>
                                <div style={{marginBottom:"50px"}} className="experiencesDetails__rightContentChoose">
                                <div>
                                    <h3>Sunday</h3>
                                    <span> {arrOfDates[6].toString().substring(4,11)}</span>
                                </div>
                                {userInfo ?  <Button onClick={handleClickBook}>Book</Button> : <Button onClick={() => history.push("/login")}>Sign in to book</Button> }
                                </div>
                            </div> 
                            :
                            experienceByIdResult?.availability === "Weekdays" 
                            ? 
                            <div>
                                <div className="experiencesDetails__rightContentChoose">
                                <div>
                                    <h3>Monday</h3>
                                    <span> {arrOfDates[0].toString().substring(4,11)}</span>
                                </div>
                                {userInfo ?  <Button onClick={handleClickBook}>Book</Button> : <Button onClick={() => history.push("/login")}>Sign in to book</Button> }
                                </div>
                                <div className="experiencesDetails__rightContentChoose">
                                <div>
                                    <h3>Tuesday</h3>
                                    <span> {arrOfDates[1].toString().substring(4,11)}</span>
                                </div>
                                {userInfo ?  <Button onClick={handleClickBook}>Book</Button> : <Button onClick={() => history.push("/login")}>Sign in to book</Button> }
                                </div>
                                <div className="experiencesDetails__rightContentChoose">
                                <div>
                                    <h3>Wednesday</h3>
                                    <span> {arrOfDates[2].toString().substring(4,11)}</span>
                                </div>
                                {userInfo ?  <Button onClick={handleClickBook}>Book</Button> : <Button onClick={() => history.push("/login")}>Sign in to book</Button> }
                                </div>
                                <div className="experiencesDetails__rightContentChoose">
                                <div>
                                    <h3>Thursday</h3>
                                    <span> {arrOfDates[3].toString().substring(4,11)}</span>
                                </div>
                                {userInfo ?  <Button onClick={handleClickBook}>Book</Button> : <Button onClick={() => history.push("/login")}>Sign in to book</Button> }
                                </div>
                                <div className="experiencesDetails__rightContentChoose">
                                <div>
                                    <h3>Friday</h3>
                                    <span> {arrOfDates[4].toString().substring(4,11)}</span>
                                </div>
                                {userInfo ?  <Button onClick={handleClickBook}>Book</Button> : <Button onClick={() => history.push("/login")}>Sign in to book</Button> }
                                </div>
                            </div>

                            :
                            <div>
                                <div className="experiencesDetails__rightContentChoose">
                                <div>
                                    <h3>Monday</h3>
                                    <span> {arrOfDates[0].toString().substring(4,11)}</span>
                                </div>
                                    {userInfo ?  <Button onClick={handleClickBook}>Book</Button> : <Button onClick={() => history.push("/login")}>Sign in to book</Button> }
                                </div>
                                <div className="experiencesDetails__rightContentChoose">
                                <div>
                                    <h3>Tuesday</h3>
                                    <span> {arrOfDates[1].toString().substring(4,11)}</span>
                                </div>
                                    {userInfo ?  <Button onClick={handleClickBook}>Book</Button> : <Button onClick={() => history.push("/login")}>Sign in to book</Button> }
                                </div>
                                <div className="experiencesDetails__rightContentChoose">
                                <div>
                                    <h3>Wednesday</h3>
                                    <span> {arrOfDates[2].toString().substring(4,11)}</span>
                                </div>
                                    {userInfo ?  <Button onClick={handleClickBook}>Book</Button> : <Button onClick={() => history.push("/login")}>Sign in to book</Button> }
                                </div>
                                <div className="experiencesDetails__rightContentChoose">
                                <div>
                                    <h3>Thursday</h3>
                                    <span> {arrOfDates[3].toString().substring(4,11)}</span>
                                </div>
                                    {userInfo ?  <Button onClick={handleClickBook}>Book</Button> : <Button onClick={() => history.push("/login")}>Sign in to book</Button> }
                                </div>
                                <div className="experiencesDetails__rightContentChoose">
                                <div>
                                    <h3>Friday</h3>
                                    <span> {arrOfDates[4].toString().substring(4,11)}</span>
                                </div>
                                    {userInfo ?  <Button onClick={handleClickBook}>Book</Button> : <Button onClick={() => history.push("/login")}>Sign in to book</Button> }
                                </div>
                                <div className="experiencesDetails__rightContentChoose">
                                <div>
                                    <h3>Saturday</h3>
                                   <span> {arrOfDates[5].toString().substring(4,11)}</span>
                                </div>
                                    {userInfo ?  <Button onClick={handleClickBook}>Book</Button> : <Button onClick={() => history.push("/login")}>Sign in to book</Button> }
                                </div>
                                <div className="experiencesDetails__rightContentChoose">
                                <div>
                                    <h3>Sunday</h3>
                                   <span> {arrOfDates[6].toString().substring(4,11)}</span>
                                </div>
                                    {userInfo ?  <Button onClick={handleClickBook}>Book</Button> : <Button onClick={() => history.push("/login")}>Sign in to book</Button> }
                                </div>
                            </div>
                            
                             }
                        </div>
                        <div className="experiencesDetails__rightContentDetailsInfo">
                            <h4>This experience is on people's minds.</h4>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Light_Bulb_or_Idea_Flat_Icon_Vector.svg/857px-Light_Bulb_or_Idea_Flat_Icon_Vector.svg.png" alt="" />
                        </div>
                        <p style={{marginBottom:"20px"}}>This experience is viewed by most of the people.</p>
                    </div>
                    </div>
                </div>
            </div>
                
            <div style={{borderBottom:"1px solid lightgray", padding:"30px 50px 10px 50px", marginBottom:"40px"}}>
                            <div className="experiencesDetails__leftCustomerReviews">
                                <h2>Customer Review & Comment</h2>
                                {userInfo ? (
                                        <>
                                        <InputLabel id="demo-simple-select-filled-label">Rate the Experience</InputLabel>
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
                                            
                                            <MenuItem value={"1"}>1 - Poor</MenuItem>
                                            <MenuItem value={"2"}>2 - Fair</MenuItem>
                                            <MenuItem value={"3"}>3 - Good</MenuItem>
                                            <MenuItem value={"4"}>4 - Very Good</MenuItem>
                                            <MenuItem value={"5"}>5 - Excellent</MenuItem>
                                        </Select>
                                    <label>Comment</label>
                                    <input type="text" placeholder="  Add Your Comment" value={comment} onChange={e => setComment(e.target.value)} />
                                   {rating.length > 0 && comment.length > 0 ? <Button className="experiencesDetails__leftCustomerReviewsButton" onClick={handleClick}>Submit</Button> : <Button className="experiencesDetails__leftCustomerReviewsDisabledButton" disabled>Submit</Button> }
                                    {loadingReview && <CircularProgress style={{width:"85px", height:"85px", margin:"100px", color:"#ff7779"}}/>}
                                    {errorReview && <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}><Alert severity="error">{errorReview}</Alert></Snackbar>}
                                    </>
                                ) : <p> To add comment and review the place please <Link to="/login"> <strong style={{textDecoration:"underline"}}>sign in</strong></Link></p>} 
                            </div>
                            <div className="experiencesDetails__leftReviews">
                        <h2>{experienceByIdResult?.numReviews} reviews</h2>
                        <Rating color={"rgb(90 195 183)"} value={experienceByIdResult?.rating} />
                    </div>
                                    
                        {experienceByIdResult && experienceByIdResult?.experienceReviews?.map(review => (
                            
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
                    <div className="experiencesDetails__heading">
                <h2>Similar Experiences</h2>
                <div style={{display:"flex"}}>
            <div className="experiencesDetails__rightArrowPopular" onClick={scrollOnClickLeftPopular}>
            <ArrowBackIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
            </div>
           
            <div className="experiencesDetails__leftArrowPopular" onClick={scrollOnClickRightPopular}>
            <ArrowForwardIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
                </div>
                </div>
            </div>

                    <div id="popular" className="experiencesDetails__similarExperiencesBelow">
                    {similarExperience?.length > 0 ? similarExperience?.map(experience => (
                    <ExperienceCard 
                    key={experience._id}
                    id={experience._id}
                    images={experience?.image[0]} 
                    country={experience.location}
                    title={experience.title}
                    price={experience.price}
                    theme={experience.theme}
                    typeOfExperience={experience.typeOfExperience}
                    value={experience.rating}
                />
                )) : <h3>Sorry Currently none!!</h3>}
                </div>

            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
           <div style={{display:"flex", alignItems:"center", margin: "10px 200px 10px 300px"}}><CheckCircleIcon style={{color:"green", paddingRight:"10px"}}/> <h2 id="transition-modal-title">Booking Confirmed</h2></div>
            <p id="transition-modal-description" style={{margin: "10px 200px 10px 300px", fontSize:"20px"}}>Host will mail you at <b>{userInfo && userInfo.email}</b> all the details. 
            {experienceByIdResult?.typeOfExperience === "Online" ? <p>Zoom Link will also be shared in the mail.</p> : <p>Host will send you the information on where to meet in the mail.</p>}</p>
            <h4 style={{fontWeight: "400", marginTop:"30px", marginBottom:"10px"}}>See Similar Experiences</h4>
            <div className="experiencesDetails__similarExperiences">

                {similarExperience?.length > 0 ? similarExperience?.map(experience => (
                    <ExperienceCard 
                    key={experience._id}
                    id={experience._id}
                    images={experience?.image[0]} 
                    country={experience.location}
                    title={experience.title}
                    price={experience.price}
                    theme={experience.theme}
                    typeOfExperience={experience.typeOfExperience}
                    value={experience.rating}
                />
                )) : <h3>Sorry Currently none!!</h3>}
            </div>
            <div style={{position:"absolute", right:"260px", bottom:"30px"}}>
            <Button variant="outlined" style={{textTransform:"inherit"}} onClick={() => history.push("/experiences/online")}>All Experiences</Button>
            </div>
          </div>
        </Fade>
      </Modal>
        </div>
        }
        
    </>
    )
}

export default ExperiencesDetails
