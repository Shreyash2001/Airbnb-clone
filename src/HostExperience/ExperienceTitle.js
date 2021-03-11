import React, { useState } from 'react'
import SideBar from '../SideBar'
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { experienceTitleAdd } from '../actions/experienceActions';
import "./ExperienceTitle.css"
import { useHistory } from 'react-router';

function ExperienceTitle() {

    const [title, setTitle] = useState("")
    const [show, setShow] = useState(false)
    const [value, setValue] = useState(35)
    const dispatch = useDispatch()
    const history = useHistory()


    const handleClickNext = () => {
        dispatch(experienceTitleAdd(title))
        history.push("/experiences/experience-page/price")
    }
    const handleClickPrevious = () => {
        history.push("/experiences/experience-page/guests-bring")
    }

    var count = 35
    var minusCount = 35

    const handleChange = (e) => {
        minusCount = count - e.target.value.length
        setValue(minusCount)
        if(e.target.value.length < 35) {
            setTitle(e.target.value)
            setShow(true)
        } else {
            setShow(false)
        } 
        
    }

    const handleClickReset = () => {
        setValue(35)
        setTitle("")
    }

    return (
        <div className="experienceTitle">
        <div className="experienceTitle__left">
        <SideBar title={"title"} />
        </div>
        <div className="experienceTitle__right">
            <p>Title</p>
            
        <div className="experienceTitle__container">
        <div className="experienceTitle__containerAbout">
            <h1>Give your experience a title</h1>
            <p>Make it short, descriptive and exciting.</p>
            <h4 style={{marginTop:"20px"}}>What is the title of your experience?(Max. {value} words)</h4>
            <input disabled={value === 0} type="text" placeholder="Title" onChange={handleChange} value={title} />
           {value === 0 && <Button onClick={handleClickReset}>Reset field</Button>}
        </div>
        </div>
        <footer className="experienceTitle__footer">
            <div className="experienceTitle__footerButtons">
                <Button onClick={handleClickPrevious} style={{border:"1px solid #222222"}}>Previous</Button>
              {show ?   <Button onClick={handleClickNext} style={{backgroundColor:"#222222", color:"white"}}>Next</Button> : <Button disabled style={{backgroundColor:"#98989870"}}>Next</Button>}
            </div>
        </footer>
        </div>
        </div>
    )
}

export default ExperienceTitle
