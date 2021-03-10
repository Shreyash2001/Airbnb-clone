import React, { useState } from 'react'
import SideBar from '../SideBar'
import "./ExperienceAge.css"
import { Button, FormControl, InputLabel, makeStyles, Select } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { experienceAgeAdd } from '../actions/experienceActions';
import { useHistory } from 'react-router';

function ExperienceAge() {
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

        const [age, setAge] = useState("")
        const [show, setShow] = useState(false)
  const handleChange = (event) => {
    const name = event.target.name;
    
    setState({
      ...state,
      [name]: event.target.value,
    });
    setAge(event.target.value)
    setShow(true)
  };


    const dispatch = useDispatch()
    const history = useHistory()
    

    const handleClickNext = () => {
        dispatch(experienceAgeAdd(age))
        history.push("/experiences/experience-page/team-or-solo")

    }
    const handleClickPrevious = () => {
        history.push("/experiences/experience-page/time")
    }


    return (
        <div className="experienceAge">
        <div className="experienceAge__left">
        <SideBar />
        </div>
        <div className="experienceAge__right">
            <p>Guest requirement</p>
            
        <div className="experienceAge__container">
        <div className="experienceAge__containerAbout">
            <h1>Who can attend your experience?</h1>
            <p>Keep in mind that someone booking your experience might book spots for other guests. If there are strict requirements in terms of age include them here.</p>
            <h3 style={{marginTop:"25px", paddingBottom:"10px"}}>Minimum Age</h3>
            <p>Set age limits for guests. Minors can only attend with their legal guardian.</p>
            <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
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
          <option value={"2"}>02</option>
          <option value={"5"}>05</option>
          <option value={"10"}>10</option>
          <option value={"13"}>13</option>
          <option value={"16"}>16</option>
          <option value={"18"}>18</option>
          <option value={"21"}>21</option>
        </Select>
      </FormControl>
        </div>
        </div>
        <footer className="experienceAge__footer">
            <div className="experienceAge__footerButtons">
                <Button onClick={handleClickPrevious} style={{border:"1px solid #222222"}}>Previous</Button>
                {show ?   <Button onClick={handleClickNext} style={{backgroundColor:"#222222", color:"white"}}>Next</Button> : <Button disabled style={{backgroundColor:"#98989870"}}>Next</Button>}
            </div>
        </footer>
        </div>
        </div>
    )
}

export default ExperienceAge
