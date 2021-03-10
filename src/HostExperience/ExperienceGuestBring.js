import React, { useState } from 'react'
import SideBar from '../SideBar'
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { experienceItemsAdd } from '../actions/experienceActions';
import "./ExperienceGuestBring.css"
import { useHistory } from 'react-router';

function ExperienceGuestBring() {

    const [item, setItem] = useState("")
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()


    const handleClickNext = () => {
        dispatch(experienceItemsAdd(item))
        history.push("/experiences/experience-page/title")
    }
    const handleClickPrevious = () => {
        history.push("/experiences/experience-page/what-you-will-do")
    }

    const handleChange = (e) => {
        if(e.target.value.length > 30) {
            setItem(e.target.value)
            setShow(true)
        } else {
            setShow(false)
        }
        
        
    }

    return (
        <div className="experienceGuestBring">
        <div className="experienceGuestBring__left">
        <SideBar />
        </div>
        <div className="experienceGuestBring__right">
            <p>What guests should bring</p>
            
        <div className="experienceGuestBring__container">
        <div className="experienceGuestBring__containerAbout">
            <h1>What guests should bring</h1>
            <p>If guests need anything in order to enjoy your experience, this is the place to tell them. Cooking experience hosts should be sure to include a complete list of ingredients here instead of planning to send it to guests later. We can’t accept submissions that don’t have a complete and specific list.</p>
            <textarea type="text" placeholder="Enter item here&#10;1. Item&#10;2. Item&#10;3. Item" onChange={handleChange} />
        </div>
        </div>
        <footer className="experienceGuestBring__footer">
            <div className="experienceGuestBring__footerButtons">
                <Button onClick={handleClickPrevious} style={{border:"1px solid #222222"}}>Previous</Button>
              {show ?   <Button onClick={handleClickNext} style={{backgroundColor:"#222222", color:"white"}}>Next</Button> : <Button disabled style={{backgroundColor:"#98989870"}}>Next</Button>}
            </div>
        </footer>
        </div>
        </div>
    )
}

export default ExperienceGuestBring
