import React, { useState } from 'react'
import SideBar from '../SideBar'
import "./ExperienceTypeOriginal.css"
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { experienceLocationAdd } from '../actions/experienceActions';
import "./ExperienceLocation.css"
import { useHistory } from 'react-router';

function ExperienceLocation() {

    const [location, setLocation] = useState("")

    const dispatch = useDispatch()
    const history = useHistory()
    // const {tempData} = useSelector(state => state.experience)
    // const {experience, location: locationData} = tempData



    const handleClickNext = () => {
        dispatch(experienceLocationAdd(location))
    }
    const handleClickPrevious = () => {
        history.push("/experiences/experience-type")
    }

    const handleChange = (e) => {
        setLocation(e.target.value)
        
    }

    return (
        <div className="experienceLocation">
        <div className="experienceLocation__left">
        <SideBar />
        </div>
        <div className="experienceLocation__right">
            <p>Location</p>
            
        <div className="experienceLocation__container">
        <div className="experienceLocation__containerAbout">
            <h1>Location</h1>
            <p>Which city will you host your experience in?</p>
            <input type="text" placeholder="Enter City" value={location} onChange={handleChange} />
        </div>
        </div>
        <footer className="experienceLocation__footer">
            <div className="experienceLocation__footerButtons">
                <Button onClick={handleClickPrevious} style={{border:"1px solid #222222"}}>Previous</Button>
                <Button onClick={handleClickNext} style={{backgroundColor:"#222222", color:"white"}}>Next</Button>
            </div>
        </footer>
        </div>
        </div>
    )
}

export default ExperienceLocation
