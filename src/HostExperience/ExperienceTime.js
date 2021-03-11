import React, { useState } from 'react'
import SideBar from '../SideBar'
import "./ExperienceTime.css"
import { Button, FormControl, InputLabel, makeStyles, Radio, Select } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { experienceNumberOfHoursAdd, experienceAvailabilityAdd, experienceTimeAdd } from '../actions/experienceActions';
import { useHistory } from 'react-router';

function ExperienceTime() {
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 400,
          marginTop:"20px"
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
        const classes = useStyles();
        const [state, setState] = useState({
            age: '',
            name: 'hai',
        });
        const [stateStartTime, setStateStartTime] = useState({
            startTime: '',
            newstart: 'hai',
        });

        const [numberOfHours, setNumberOfHours] = useState("")
        const [time, setTime] = useState("")
        const [show, setShow] = useState(false)
        const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    
    setState({
      ...state,
      [name]: event.target.value,
    });
    setNumberOfHours(event.target.value)

  };

  const handleChangeStartTime = (event) => {
    const newstart = event.target.name;
    
    setStateStartTime({
      ...stateStartTime,
      [newstart]: event.target.value,
    });
    setTime(event.target.value)
    
  };

    const dispatch = useDispatch()
    const history = useHistory()
    

    const handleClickNext = () => {
        dispatch(experienceNumberOfHoursAdd(numberOfHours))
        dispatch(experienceTimeAdd(time))
        dispatch(experienceAvailabilityAdd(selectedValue))
        history.push("/experiences/experience-page/age")

    }
    const handleClickPrevious = () => {
        history.push("/experiences/experience-page/price")
    }

    const handleChangeYes = (event) => {
        setSelectedValue(event.target.value);
        setShow(true)
      };

      

    return (
        <div className="experienceTime">
        <div className="experienceTime__left">
        <SideBar time={"time"} />
        </div>
        <div className="experienceTime__right">
            <p>Duration</p>
            
        <div className="experienceTime__container">
        <div className="experienceTime__containerAbout">
            <h1>How long is your experience?</h1>
            <p>The ideal length for online experiences is 2 hours. It also helps minimise the physical strain of extensive screen time and is respectful of guests who share devices or have bandwidth, data, or technical limitations.</p>
        <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Duration</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
        <option value={""} />
          <option value={"45min"}>45 min</option>
          <option value={"1hour"}>1 hour</option>
          <option value={"2hour"}>2 hour</option>
          <option value={"3hour"}>3 hour</option>
          <option value={"4hour"}>4 hour</option>
          <option value={"5hour"}>5 hour</option>
          <option value={"6hour"}>6 hour</option>
          <option value={"7hour"}>7 hour</option>
          <option value={"8hour"}>8 hour</option>
        </Select>
      </FormControl>

      <h3 style={{marginTop:"20px"}}>What time would you typically start your experience?</h3>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Expected Start Time</InputLabel>
        <Select
          native
          value={stateStartTime.startTime}
          onChange={handleChangeStartTime}
          label="StartTime"
          inputProps={{
            name: 'startTime',
            id: 'filled-age-native-simple',
          }}
        >
        <option value={""} />
          <option value={"12AM"}>12 AM</option>
          <option value={"1AM"}>1 AM</option>
          <option value={"2AM"}>2 AM</option>
          <option value={"3AM"}>3 AM</option>
          <option value={"4AM"}>4 AM</option>
          <option value={"5AM"}>5 AM</option>
          <option value={"6AM"}>6 AM</option>
          <option value={"7AM"}>7 AM</option>
          <option value={"8AM"}>8 AM</option>
          <option value={"9AM"}>9 AM</option>
          <option value={"10AM"}>10 AM</option>
          <option value={"11AM"}>11 AM</option>
          <option value={"12PM"}>12 PM</option>
          <option value={"1PM"}>1 PM</option>
          <option value={"2PM"}>2 PM</option>
          <option value={"3PM"}>3 PM</option>
          <option value={"4PM"}>4 PM</option>
          <option value={"5PM"}>5 PM</option>
          <option value={"6PM"}>6 PM</option>
          <option value={"7PM"}>7 PM</option>
          <option value={"8PM"}>8 PM</option>
          <option value={"9PM"}>9 PM</option>
          <option value={"10PM"}>10 PM</option>
          <option value={"11PM"}>11 PM</option>
        </Select>
      </FormControl>
      <h3 style={{marginTop:"20px"}}>When are you typically available to host?</h3>
      <div className="experienceExpertise__hostedContent">
            <label>
                 <Radio
                    style={{color:"#222222"}}
                    checked={selectedValue === 'Weekdays'}
                    onChange={handleChangeYes}
                    value="Weekdays"
                />
                <span>Weekdays</span>
            </label>
            <label>
            <Radio
                style={{color:"#222222"}}
                checked={selectedValue === 'Weekends'}
                onChange={handleChangeYes}
                value="Weekends"
            />
                <span>Weekends</span>
            </label>
            <label>
            <Radio
                style={{color:"#222222"}}
                checked={selectedValue === 'Both weekdays and weekend'}
                onChange={handleChangeYes}
                value="Both weekdays and weekend"
            />
                <span>Both weekdays and weekend</span>
            </label>
        </div>
        </div>
        </div>
        <footer className="experienceTime__footer">
            <div className="experienceTime__footerButtons">
                <Button onClick={handleClickPrevious} style={{border:"1px solid #222222"}}>Previous</Button>
                {show ?   <Button onClick={handleClickNext} style={{backgroundColor:"#222222", color:"white"}}>Next</Button> : <Button disabled style={{backgroundColor:"#98989870"}}>Next</Button>}
            </div>
        </footer>
        </div>
        </div>
    )
}

export default ExperienceTime
