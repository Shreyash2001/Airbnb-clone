import React, { useEffect, useState } from 'react'
import "./Experiences.css"
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, Radio } from '@material-ui/core';
import ExperienceCard from './ExperienceCard';
import { useDispatch, useSelector } from 'react-redux'
import {Link, useHistory} from "react-router-dom"
import { getCookingExperiences, getFilteredResultExperiences, getLastWeekExperiences, getMainFilteredResultExperiences, getNewExperiences, getPopularExperiences, getTopRatedExperience } from './actions/experienceActions';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';


function Experiences() {

    const scrollOnClickRight = () => {
        sideScroll(document.getElementById("d"),'right',5,600,10); 
    }
    const scrollOnClickLeft = () => { 
        sideScroll(document.getElementById("d"),'left',5,600,10);
    }

    const scrollOnClickRightContent = () => {
        sideScroll(document.getElementById("content"),'right',10,1500,20); 
    }
    const scrollOnClickLeftContent = () => { 
        sideScroll(document.getElementById("content"),'left',10,1500,20);
    }
    const scrollOnClickRightPopular = () => {
        sideScroll(document.getElementById("popular"),'right',10,1500,20); 
    }
    const scrollOnClickLeftPopular = () => { 
        sideScroll(document.getElementById("popular"),'left',10,1500,20);
    }
    const scrollOnClickRightCook = () => {
        sideScroll(document.getElementById("cooking"),'right',10,1500,20); 
    }
    const scrollOnClickLeftCook = () => { 
        sideScroll(document.getElementById("cooking"),'left',10,1500,20);
    }
    const scrollOnClickRightLastWeek = () => {
        sideScroll(document.getElementById("lastWeek"),'right',10,1500,20); 
    }
    const scrollOnClickLeftLastWeek = () => { 
        sideScroll(document.getElementById("lastWeek"),'left',10,1500,20);
    }
    const scrollOnClickRightTopRated = () => {
        sideScroll(document.getElementById("topRated"),'right',10,1500,20); 
    }
    const scrollOnClickLeftTopRated = () => { 
        sideScroll(document.getElementById("topRated"),'left',10,1500,20);
    }

     const dispatch = useDispatch()
     const {newExperiences, loading, error} = useSelector(state => state.newExperiences)

     const {popularExperiences, loading: loadingPopular, error: errorPopular} = useSelector(state => state.popularExperiences)
     const {cookingExperiences, loading: loadingCooking, error: errorCooking} = useSelector(state => state.cookingExperiences)
     const {lastWeekExperiences, loading: loadingLastWeek, error: errorLastWeek} = useSelector(state => state.lastWeekExperiences)
     const {topRatedExperience, loading:loadingTopRated, error: errorTopRated} = useSelector(state => state.getTopRated)

    useEffect(() => {
        dispatch(getNewExperiences())
        dispatch(getPopularExperiences())
        dispatch(getCookingExperiences())
        dispatch(getLastWeekExperiences())
        dispatch(getTopRatedExperience())
    }, [dispatch])


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

    const culture = "Cultural Festival"
    const art = "Art Exhibition"
    const fireworks = "Fireworks"
    const food = "Food & Market tours"
    const movies = "Movies"
    const cultureTour = "Culture Tour"
    const photoshoot = "Photoshoot"
    const dance = "Dancing"
    const nightlife = "Nightlife"

    const history = useHistory()

    const handleArtClick = () => {
        history.push("/experiences/online/art")
        dispatch(getFilteredResultExperiences(art))
    }
    const handleFireworksClick = () => {
        history.push("/experiences/online/fireworks")
        dispatch(getFilteredResultExperiences(fireworks))
    }
    const handleCultureClick = () => {
        history.push("/experiences/online/culture")
        dispatch(getFilteredResultExperiences(cultureTour))
    }
    const handleCulturalClick = () => {
        history.push("/experiences/online/cultural-festival")
        dispatch(getFilteredResultExperiences(culture))
    }
    const handleFoodClick = () => {
        history.push("/experiences/online/food")
        dispatch(getFilteredResultExperiences(food))
    }
    const handleMoviesClick = () => {
        history.push("/experiences/online/movies")
        dispatch(getFilteredResultExperiences(movies))
    }
    const handleDancingClick = () => {
        history.push("/experiences/online/dance")
        dispatch(getFilteredResultExperiences(dance))
    }
    const handlePhotoshootClick = () => {
        history.push("/experiences/online/photoshoot")
        dispatch(getFilteredResultExperiences(photoshoot))
    }
    const handleNightlifeClick = () => {
        history.push("/experiences/online/nightlife")
        dispatch(getFilteredResultExperiences(nightlife))
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            width: 300,
          },
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));

    const [open, setOpen] = useState(false);

     const handleClickOpen = () => {
       setOpen(true);
     };
   
     const handleClose = () => {
       setOpen(false);
     };

    const [selectedValue, setSelectedValue] = useState('');
        const classes = useStyles();
        const [value, setValue] = useState([0, 30000]);
       
        function valuetext(value) {
            return value
          }
        const handleChange = (event, newValue) => {
          setValue(newValue);
        }
        const [time, setTime] = useState("");
        const [numberOfHours, setNumberOfHours] = useState("")

        const handleChangeStartTime = (event) => {
          setTime(event.target.value);
        }

        const handleChangeNumberOfHours = (event) => {
          setNumberOfHours(event.target.value);
        }
        
        const handleChangeYes = (event) => {
            setSelectedValue(event.target.value);
          };
        
        const handleClickApply = () => {
            dispatch(getMainFilteredResultExperiences(value[0], value[1], selectedValue, time, numberOfHours))
            history.push("/experiences/online/mainfilter")
        }
    
    return (
        <div className="experiences">
       
            <div>
            <h1 style={{padding:"10px 40px 0px 40px", fontSize:"35px", color:"#222222"}}>New this Week</h1>
                <div className="experiences__rightArrow" onClick={scrollOnClickRight}>
                    <ArrowForwardIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
                </div>
            </div>
            <div>
                <div className="experiences__leftArrow" onClick={scrollOnClickLeft}>
                    <ArrowBackIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
                </div>
            </div>
            <div id="d" className="experiences__container">
            <Link to="/experiences/online/around-world"> <div className="experiences__containerImages">
                <div className="experiences__containerImagesImage1">
                <div className="experiences__containerImagesImage1Info">
                    <p>Collection</p>
                    <h2>Experience the world from home</h2>
                    <Button onClick={() => history.push("/experiences/online/around-world")}>Show all</Button>
                </div>
                </div>
            </div>
            </Link>

          <Link to="/experiences/online/all-top-rated">  <div className="experiences__containerImages">
                <div className="experiences__containerImagesImage2">
                <div className="experiences__containerImagesImage1Info">
                    <p>Collection</p>
                    <h2>Most popular around the world</h2>
                    <Button onClick={() => history.push("/experiences/online/all-top-rated")}>Show all</Button>
                </div>
                </div>
            </div>
            </Link>

           <Link to="/experiences/online/team"> <div className="experiences__containerImages">
                <div className="experiences__containerImagesImage3">
                <div className="experiences__containerImagesImage1Info">
                    <p>Collection</p>
                    <h2>Great for team building</h2>
                    <Button>Show all</Button>
                </div>
                </div>
            </div>
            </Link>
            <div className="experiences__containerImages">
                <div className="experiences__containerImagesImage4">
                <div className="experiences__containerImagesImage1Info">
                    <p>Collection</p>
                    <h2>Fun for the family & friends</h2>
                    <Button>Show all</Button>
                </div>
                </div>
            </div>
            <div className="experiences__containerImages">
                <div className="experiences__containerImagesImage5">
                <div className="experiences__containerImagesImage1Info">
                    <p>Collection</p>
                    <h2>Experiences for All to have fun</h2>
                    <Button>Show all</Button>
                </div>
                </div>
            </div>
            </div>
            <div className="experiences__filters">
            <Button variant="outlined" onClick={handleClickOpen}>Filters</Button>
            <div className="experiences__filtersLine"></div>
            <Button variant="contained" onClick={handleArtClick} >Art Exhibition</Button>
            <Button variant="contained" onClick={handleCulturalClick} >Cultural festival</Button>
            <Button variant="contained" onClick={handleFireworksClick} >Fireworks</Button>
            <Button variant="contained" onClick={handleFoodClick} >Food & Market tours</Button>
            <Button variant="contained" onClick={handleMoviesClick} >Movies</Button>
            <Button variant="contained" onClick={handleCultureClick} >Culture tour</Button>
            <Button variant="contained" onClick={handlePhotoshootClick} >Photoshoot</Button>
            <Button variant="contained" onClick={handleDancingClick} >Dancing</Button>
            <Button variant="contained" onClick={handleNightlifeClick} >Nightlife</Button>
            </div>
            <hr style={{border:"none", height:"1px", backgroundColor:"lightgray"}} />


            <div className="experiences__heading">
                <h1>Top Rated</h1>
                <div style={{display:"flex"}}>
            <div className="experiences__rightArrowPopular" onClick={scrollOnClickLeftTopRated}>
            <ArrowBackIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
            </div>
           
            <div className="experiences__leftArrowPopular" onClick={scrollOnClickRightTopRated}>
            <ArrowForwardIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
                </div>
                </div>
            </div>


            <div id="topRated" className="experiences__ContentContainer">
             {loadingTopRated && <CircularProgress style={{color:"#ff7779"}} />}
             {errorTopRated && <h1>{error}</h1>}
             {topRatedExperience?.map(topRated => (
                <ExperienceCard 
                    key={topRated._id}
                    id={topRated._id}
                    images={topRated.image[0]} 
                    country={topRated.location}
                    title={topRated.title}
                    price={topRated.price}
                    theme={topRated.theme}
                    typeOfExperience={topRated.typeOfExperience}
                    value={topRated.rating}
                />
             ))}
            </div>

            <div className="experiences__heading">
                <h1>New this week for you</h1>
                <div style={{display:"flex"}}>
            <div className="experiences__rightArrowContent" onClick={scrollOnClickLeftContent}>
                <ArrowBackIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
            </div>
           
            <div className="experiences__leftArrowContent" onClick={scrollOnClickRightContent}>
            <ArrowForwardIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
                </div>
                </div>
            </div>


            <div id="content" className="experiences__ContentContainer">
             {loading && <CircularProgress style={{color:"#ff7779"}} />}
             {error && <h1>{error}</h1>}
             {newExperiences?.map(newExperience => (
                <ExperienceCard 
                    key={newExperience._id}
                    id={newExperience._id}
                    images={newExperience?.image[0]} 
                    country={newExperience.location}
                    title={newExperience.title}
                    price={newExperience.price}
                    theme={newExperience.theme}
                    typeOfExperience={newExperience.typeOfExperience}
                    value={newExperience.rating}
                />
             ))}
            </div>

            <div className="experiences__heading">
                <h1>Popular now in India</h1>
                <div style={{display:"flex"}}>
            <div className="experiences__rightArrowPopular" onClick={scrollOnClickLeftPopular}>
            <ArrowBackIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
            </div>
           
            <div className="experiences__leftArrowPopular" onClick={scrollOnClickRightPopular}>
            <ArrowForwardIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
                </div>
                </div>
            </div>


            <div id="popular" className="experiences__ContentContainer">
             {loadingPopular && <CircularProgress style={{color:"#ff7779"}} />}
             {errorPopular && <h1>{error}</h1>}
             {popularExperiences?.map(popularExperience => (
                <ExperienceCard 
                    key={popularExperience._id}
                    id={popularExperience._id}
                    images={popularExperience.image[0]} 
                    country={popularExperience.location}
                    title={popularExperience.title}
                    price={popularExperience.price}
                    theme={popularExperience.theme}
                    typeOfExperience={popularExperience.typeOfExperience}
                    value={popularExperience.rating}
                />
             ))}
            </div>

            <div className="experiences__heading">
                <h1>Cook and drink with friends</h1>
                <div style={{display:"flex"}}>
            <div className="experiences__rightArrowCook" onClick={scrollOnClickLeftCook}>
                    <ArrowBackIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
            </div>
           
            <div className="experiences__leftArrowCook" onClick={scrollOnClickRightCook}>
            <ArrowForwardIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
                </div>
                </div>
            </div>

            <div id="cooking" className="experiences__ContentContainer">
             {loadingCooking && <CircularProgress style={{color:"#ff7779"}} />}
             {errorCooking && <h1>{error}</h1>}
             {cookingExperiences?.map(cookingExperience => (
                 
                <ExperienceCard 
                    key={cookingExperience._id}
                    id={cookingExperience._id}
                    images={cookingExperience?.image[0]} 
                    country={cookingExperience.location}
                    title={cookingExperience.title}
                    price={cookingExperience.price}
                    theme={cookingExperience.theme}
                    typeOfExperience={cookingExperience.typeOfExperience}
                    value={cookingExperience.rating}
                />
             ))}
                
            </div>

            <div className="experiences__heading">
                <h1>Last Week Specials</h1>
                <div style={{display:"flex"}}>
            <div className="experiences__rightArrowLastWeek" onClick={scrollOnClickLeftLastWeek}>
                    <ArrowBackIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
            </div>
           
            <div className="experiences__leftArrowLastWeek" onClick={scrollOnClickRightLastWeek}>
            <ArrowForwardIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
                </div>
                </div>
            </div>

            <div id="lastWeek" className="experiences__ContentContainer">
             {loadingLastWeek && <CircularProgress style={{color:"#ff7779"}} />}
             {errorLastWeek && <h1>{error}</h1>}
             {lastWeekExperiences?.map(lastWeekExperience => (
                <ExperienceCard 
                    key={lastWeekExperience._id}
                    id={lastWeekExperience?._id}
                    images={lastWeekExperience?.image[0]} 
                    country={lastWeekExperience.location}
                    title={lastWeekExperience.title}
                    price={lastWeekExperience.price}
                    theme={lastWeekExperience.theme}
                    typeOfExperience={lastWeekExperience.typeOfExperience}
                    value={lastWeekExperience.rating}
                />
             ))}
                
            
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DialogContentText>
            <h2>Price</h2>
            <div className={classes.root}>
    
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={0}
        max={30000}
        style={{color:"#222222"}}
      />
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <div style={{display:"flex", flexDirection:"column"}}>
      <label>Min. Price</label>
      <input style={{height:"40px", width:"100px", outlineWidth:"0"}} placeholder = "min. Price" value={`₹${value[0]}`} disabled />
      </div>
      <div style={{display:"flex", flexDirection:"column"}}>
      <label>Max. Price</label>
      <input style={{height:"40px", width:"100px", outlineWidth:"0"}} placeholder = "max. Price" value={`₹${value[1]}`} disabled />
      </div>
      </div>
    <h2 style={{marginTop:"30px"}}>Time you want to attend?</h2>
        <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Time</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={time}
          onChange={handleChangeStartTime}
          style={{width:"200px"}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"12AM"}>12 AM</MenuItem>
          <MenuItem value={"1AM"}>1 AM</MenuItem>
          <MenuItem value={"2AM"}>2 AM</MenuItem>
          <MenuItem value={"3AM"}>3 AM</MenuItem>
          <MenuItem value={"4AM"}>4 AM</MenuItem>
          <MenuItem value={"5AM"}>5 AM</MenuItem>
          <MenuItem value={"6AM"}>6 AM</MenuItem>
          <MenuItem value={"7AM"}>7 AM</MenuItem>
          <MenuItem value={"8AM"}>8 AM</MenuItem>
          <MenuItem value={"9AM"}>9 AM</MenuItem>
          <MenuItem value={"10AM"}>10 AM</MenuItem>
          <MenuItem value={"11AM"}>11 AM</MenuItem>
          <MenuItem value={"12PM"}>12 PM</MenuItem>
          <MenuItem value={"1PM"}>1 PM</MenuItem>
          <MenuItem value={"2PM"}>2 PM</MenuItem>
          <MenuItem value={"3PM"}>3 PM</MenuItem>
          <MenuItem value={"4PM"}>4 PM</MenuItem>
          <MenuItem value={"5PM"}>5 PM</MenuItem>
          <MenuItem value={"6PM"}>6 PM</MenuItem>
          <MenuItem value={"7PM"}>7 PM</MenuItem>
          <MenuItem value={"8PM"}>8 PM</MenuItem>
          <MenuItem value={"9PM"}>9 PM</MenuItem>
          <MenuItem value={"10PM"}>10 PM</MenuItem>
          <MenuItem value={"11PM"}>11 PM</MenuItem>
        </Select>
      </FormControl>
        <h2 style={{marginTop:"30px"}}>Number of Hours?</h2>
        <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Number of hours</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={numberOfHours}
          onChange={handleChangeNumberOfHours}
          style={{width:"200px"}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"45min"}>45 min</MenuItem>
          <MenuItem value={"1hour"}>1 hour</MenuItem>
          <MenuItem value={"2hour"}>2 hour</MenuItem>
          <MenuItem value={"3hour"}>3 hour</MenuItem>
          <MenuItem value={"4hour"}>4 hour</MenuItem>
          <MenuItem value={"5hour"}>5 hour</MenuItem>
          <MenuItem value={"6hour"}>6 hour</MenuItem>
          <MenuItem value={"7hour"}>7 hour</MenuItem>
          <MenuItem value={"8hour"}>8 hour</MenuItem>  
        </Select>
      </FormControl>
      
      <h2 style={{marginTop:"30px"}}>Preferred Language</h2>
      <div className="ExperiencesFilter__language">
            <label>
                 <Radio
                    style={{color:"#222222"}}
                    checked={selectedValue === 'English'}
                    onChange={handleChangeYes}
                    value="English"
                />
                <span>English</span>
            </label>
            <label>
            <Radio
                style={{color:"#222222"}}
                checked={selectedValue === 'Spanish'}
                onChange={handleChangeYes}
                value="Spanish"
            />
                <span>Spanish</span>
            </label>
            <label>
            <Radio
                style={{color:"#222222"}}
                checked={selectedValue === 'Italiano'}
                onChange={handleChangeYes}
                value="Italiano"
            />
                <span>Italian</span>
            </label>
        </div>
    </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outlined" onClick={handleClickApply} >
            Apply
          </Button>
        </DialogActions>
      </Dialog>

        </div>
    )
}

export default Experiences
