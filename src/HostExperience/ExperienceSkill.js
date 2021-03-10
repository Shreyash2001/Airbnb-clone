import React, { useState } from 'react'
import SideBar from '../SideBar'
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { experienceSkillsAdd } from '../actions/experienceActions';
import "./ExperienceSkill.css"
import { useHistory } from 'react-router';

function ExperienceSkill() {
    const [skills, setSkills] = useState("")
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleClickNext = () => {
        dispatch(experienceSkillsAdd(skills))
        history.push("/experiences/about-me/images")
    }
    const handleClickPrevious = () => {
        history.push("/experiences/about-me/your-story")
    }

    
    const handleChange = (e) => {
        if(e.target.value.length > 50){
            setSkills(e.target.value)
            setShow(true)
        } else {
            setShow(false)
        }
        
    }


    return (
        <div className="experienceSkill">
        <div className="experienceSkill__left">
        <SideBar />
        </div>
        <div className="experienceSkill__right">
            <p>Skill</p>
            
        <div className="experienceSkill__container">
        <div className="experienceSkill__containerAbout">
            <h1>Your Skill</h1>
            <p style={{color:"#484848", paddingBottom:"20px"}}>Explain about you in a single line.</p>
            <div className="experienceSkill__containerAboutInput">
            <input placeholder="Tell people about your skills and for how long you are following your passion." onChange={handleChange} />
        </div>
        <div>
            
            <p style={{color:"#484848"}}><strong>Keep in mind:</strong>This will be shown on the main booking section so make it creative.</p>
        </div>
        </div>
        
        </div>
        <footer className="experienceSkill__footer">
            <div className="experienceSkill__footerButtons">
                <Button onClick={handleClickPrevious} style={{border:"1px solid #222222"}}>Previous</Button>
               {show  ?  <Button onClick={handleClickNext} style={{backgroundColor:"#222222", color:"white"}}>Next</Button> : <Button disabled style={{backgroundColor:"#98989870"}}>Next</Button> }
            </div>
        </footer>
        </div>
        </div>
    )
}

export default ExperienceSkill
