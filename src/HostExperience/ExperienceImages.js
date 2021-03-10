import React, { useState } from 'react'
import SideBar from '../SideBar'
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { experienceImagesAdd } from '../actions/experienceActions';
import "./ExperienceImages.css"
import { useHistory } from 'react-router';

function ExperienceImages() {
    const [images, setImages] = useState([])
    const [show, setShow] = useState(false)
    const [showOne, setShowOne] = useState(false)
    const [showTwo, setShowTwo] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleClickNext = () => {
        dispatch(experienceImagesAdd(images))
        history.push("/experiences/about-me/images")
    }
    const handleClickPrevious = () => {
        history.push("/experiences/about-me/skills")
    }

    const handleChangeImage1 = (e) => {
        setImages([e.target.value])
        setShow(true)  
          
    }
    const handleChangeImage2 = (e) => {
        setImages([...images, e.target.value])
        setShowOne(true)
        
        
    }
    const handleChangeImage3 = (e) => {
        setImages([...images, e.target.value])
        setShowTwo(true)

          
    }

    return (
        <div className="experienceImages">
        <div className="experienceImages__left">
        <SideBar />
        </div>
        <div className="experienceImages__right">
            <p>Photos</p>
            
        <div className="experienceImages__container">
        <div className="experienceImages__containerAbout">
            <h1>Add photos to your experience</h1>
            <p style={{color:"#484848", paddingBottom:"20px"}}>Add at least 3 high-quality photos to show guests what it’s like to take your experience.</p>
            <div className="experienceImages__containerAboutInput">
            <input placeholder="Enter Image URL." onChange={handleChangeImage1} />
            <input placeholder="Enter Image URL." onChange={handleChangeImage2} />
            <input placeholder="Enter Image URL." onChange={handleChangeImage3} />
        </div>
        <div>
            
            <p style={{color:"#484848"}}><strong>Keep in mind:</strong>This will be shown on the main booking section.</p>
        </div>
        </div>
        
        </div>
        <footer className="experienceImages__footer">
            <div className="experienceImages__footerButtons">
                <Button onClick={handleClickPrevious} style={{border:"1px solid #222222"}}>Previous</Button>
               {show && showOne && showTwo  ?  <Button onClick={handleClickNext} style={{backgroundColor:"#222222", color:"white"}}>See preview</Button> : <Button disabled style={{backgroundColor:"#98989870"}}>Next</Button> }
            </div>
        </footer>
        </div>
        </div>
    )
}

export default ExperienceImages
