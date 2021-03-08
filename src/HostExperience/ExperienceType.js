import React, { useState } from 'react'
import SideBar from '../SideBar'
import "./ExperienceTypeOriginal.css"
import ComputerIcon from '@material-ui/icons/Computer';
import GroupIcon from '@material-ui/icons/Group';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { experienceAdd } from '../actions/experienceActions';
import { useHistory } from 'react-router';

function ExperienceType() {
    const [around, setAround] = useState(false)
    const [aroundInPerson, setAroundInperson] = useState(false)

    const [onlineExperience, setOnlineExperience] = useState("Online")
    const [inPersonExperience, setInPersonExperience] = useState("In-person")

    const dispatch = useDispatch()
    const history = useHistory()

    const handleOnlineExperienceClick = () => {
        setAround(true)
        setAroundInperson(false)
        setOnlineExperience("Online")
        dispatch(experienceAdd(onlineExperience))
    }
    const handleInPersonExperienceClick = () => {
        setAroundInperson(true)
        setAround(false)
        setInPersonExperience("In-person")   
        dispatch(experienceAdd(inPersonExperience))
    }

    const handleNextClick = () => {
        history.push("/experiences/location")
    }

    return (
        <div className="experienceTypeOriginal">
        <div className="experienceTypeOriginal__left">
        <SideBar />
        </div>
        <div className="experienceTypeOriginal__right">
            <p>Experience type</p>
            
        <div className="experienceTypeOriginal__container">
        <div className="experienceTypeOriginal__containerAbout">
            <h1>What type of experience will you host?</h1>
            <p>Online Experiences can be hosted from anywhere through video, and in-person experiences are hosted on location.</p>
        </div>
        <div className="experienceTypeOriginal__containerButtons">
            <Button onClick={handleOnlineExperienceClick} className={around && "experienceTypeOriginal__Button"}>
            <div>
                <div>
                    <ComputerIcon style={{fontSize:"60px"}}/>
                </div>
                <div className="experienceTypeOriginal__infoInButton">
                <strong>Online Experience</strong>
                <p>Guests will join you virtually, using Zoom video conferencing software.</p>
                </div>
                </div>
            </Button>
            <Button onClick={handleInPersonExperienceClick} className={aroundInPerson && "experienceTypeOriginal__Button"}>
            <div>
                <div>
                    <GroupIcon style={{fontSize:"60px"}}/>
                </div>
                <div className="experienceTypeOriginal__infoInButton">
                <strong>In-person Experience</strong>
                <p>Guests will join you virtually, using Zoom video conferencing software.</p>
                </div>
                </div>
            </Button>
        </div>
        </div>
        <footer className="experienceTypeOriginal__footer">
            <div className="experienceTypeOriginal__footerButtons">
                <Button onClick={handleNextClick} style={{backgroundColor:"#222222", color:"white"}}>Next</Button>
            </div>
        </footer>
        </div>
        </div>
    )
}

export default ExperienceType
