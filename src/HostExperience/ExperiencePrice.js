import React, { useState } from 'react'
import SideBar from '../SideBar'
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { experiencePriceAdd } from '../actions/experienceActions';
import "./ExperiencePrice.css"
import { useHistory } from 'react-router';

function ExperiencePrice() {

    const [price, setPrice] = useState("")
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()


    const handleClickNext = () => {
        dispatch(experiencePriceAdd(price))
        history.push("/experiences/experience-page/time")
    }
    const handleClickPrevious = () => {
        history.push("/experiences/experience-page/title")
    }

    const handleChange = (e) => {
        if(e.target.value.length >= 2) {
        setPrice(e.target.value)
        setShow(true)
    } else {
        setShow(false)
    }
        
    }

    return (
        <div className="experiencePrice">
        <div className="experiencePrice__left">
        <SideBar />
        </div>
        <div className="experiencePrice__right">
            <p>Guest pricing</p>
            
        <div className="experiencePrice__container">
        <div className="experiencePrice__containerAbout">
            <h1>Guest pricing</h1>
            <p>How much you charge is entirely up to you. Enter the price you want each guest to pay and discover what you can earn.</p>
            <div style={{display:"flex", alignItems:"baseline", justifyContent:"space-between"}}>
                <h3>Individual Rate(in ₹):</h3>
                <input type="number" placeholder="Enter Price" onChange={handleChange} min= "0" />
            </div>
            
        </div>
        </div>
        <footer className="experiencePrice__footer">
            <div className="experiencePrice__footerButtons">
                <Button onClick={handleClickPrevious} style={{border:"1px solid #222222"}}>Previous</Button>
              {show ?   <Button onClick={handleClickNext} style={{backgroundColor:"#222222", color:"white"}}>Next</Button> : <Button disabled style={{backgroundColor:"#98989870"}}>Next</Button>}
            </div>
        </footer>
        </div>
        </div>
    )
}

export default ExperiencePrice
