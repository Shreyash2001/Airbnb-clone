import React, { useState } from 'react'
import SideBar from '../SideBar'
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { experienceStoryAdd} from '../actions/experienceActions';
import "./ExperienceYourStory.css"
import { useHistory } from 'react-router';

function ExperienceYourStory() {
    const [story, setStory] = useState("")
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleClickNext = () => {
        dispatch(experienceStoryAdd(story))
        history.push("/experiences/about-me/skills")
    }
    const handleClickPrevious = () => {
        history.push("/experiences/experience-page/team-or-solo")
    }

    
    const handleChange = (e) => {
        if(e.target.value.length > 150){
            setStory(e.target.value)
            setShow(true)
        } else {
            setShow(false)
        }
        
    }


    return (
        <div className="experienceYourStory">
        <div className="experienceYourStory__left">
        <SideBar story={"story"} />
        </div>
        <div className="experienceYourStory__right">
            <p>Story</p>
            
        <div className="experienceYourStory__container">
        <div className="experienceYourStory__containerAbout">
            <h1>Your story</h1>
            <p style={{color:"#484848", paddingBottom:"20px"}}>What makes you uniquely qualified to host this experience? Tell guests why you’re passionate and knowledgeable about the subject matter.</p>
            <div className="experienceYourStory__containerAboutTextarea">
            <textarea placeholder="Have you been doing this for years? How good are you in this? Don't be afraid to brag! (minimum 150 words required!)" onChange={handleChange} />
        </div>
        <div>
            
            <p style={{color:"#484848"}}><strong>Keep in mind:</strong>Hosting is about person-to-person connections, so make sure this section focuses on you. If you plan to host with a team, you’ll be able to add others to your experience as co-hosts or assistants after it’s published.</p>
        </div>
        </div>
        
        </div>
        <footer className="experienceYourStory__footer">
            <div className="experienceYourStory__footerButtons">
                <Button onClick={handleClickPrevious} style={{border:"1px solid #222222"}}>Previous</Button>
               {show  ?  <Button onClick={handleClickNext} style={{backgroundColor:"#222222", color:"white"}}>Next</Button> : <Button disabled style={{backgroundColor:"#98989870"}}>Next</Button> }
            </div>
        </footer>
        </div>
        </div>
    )
}

export default ExperienceYourStory
