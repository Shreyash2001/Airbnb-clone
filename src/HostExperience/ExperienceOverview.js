import React from 'react'
import SideBar from '../SideBar'
import { Button } from '@material-ui/core';
import "./ExperienceOverview.css"
import { useHistory } from 'react-router';

function ExperienceOverview() {

    const history = useHistory()
    
    const handleClickNext = () => {
        history.push("/experiences/experience-page/expertise")
    }
    const handleClickPrevious = () => {
        history.push("/experiences/language")
    }

    return (
        <div className="experienceOverview">
        <div className="experienceOverview__left">
        <SideBar overview={"overview"} />
        </div>
        <div className="experienceOverview__right">
            <p>Overview</p>
            
        <div className="experienceOverview__container">
        <div className="experienceOverview__containerAbout">
            <h1>What we’re looking for</h1>
            <div style={{maxWidth:"400px", marginBottom:"20px"}}>
                <div className="experienceOverview__containerAboutImage"></div>
            </div>
            <div style={{maxWidth:"540px"}}>
            <p style={{color:"#484848", marginTop:"20px", marginBottom:"10px"}}>We’re looking for hosts who can bring the magic of Airbnb Experiences online, and can meet these requirements:</p>
            <div>
            <ul style={{paddingLeft:"16px", marginTop:"10px"}}>
                <li style={{fontSize:"20px"}}><strong>Expertise:</strong> Exceptional skill, ability, or background</li>
                <li style={{fontSize:"20px"}}><strong>Participation:</strong> Engaging activities that leap off the screen</li>
                <li style={{fontSize:"20px"}}><strong>Easy to do:</strong> Requires minimal supplies and preparation</li>
                <li style={{fontSize:"20px"}}><strong>Technical quality:</strong> Comfort with the Zoom platform and audio/video setup</li>
            </ul>
            </div>
            </div>
            
            
            
        </div>
        </div>
        <footer className="experienceOverview__footer">
            <div className="experienceOverview__footerButtons">
                <Button onClick={handleClickPrevious} style={{border:"1px solid #222222"}}>Previous</Button>
                 <Button onClick={handleClickNext} style={{backgroundColor:"#222222", color:"white"}}>Next</Button> 
            </div>
        </footer>
        </div>
        </div>
    )
}

export default ExperienceOverview
