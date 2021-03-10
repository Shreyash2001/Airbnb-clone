import React, { useState } from 'react'
import SideBar from '../SideBar'
import { Button, Radio } from '@material-ui/core';
import "./ExperienceExpertise.css"
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { experienceIsHostedAdd } from '../actions/experienceActions';


function ExperienceExpertise() {

    const history = useHistory()
    const dispatch = useDispatch()

    const [hosted, setHosted] = useState(false)
    const [isHosted, setIsHosted] = useState(false)
    const [selectedValue, setSelectedValue] = useState('');


    const handleChangeYes = (event) => {
        setSelectedValue(event.target.value);
        setHosted(true)
        setIsHosted(true)
      };

      const handleChangeNo = (event) => {
        setSelectedValue(event.target.value);
        setHosted(true)
        setIsHosted(false)
      }
    
    const handleClickNext = () => {
        dispatch(experienceIsHostedAdd(isHosted))
        history.push("/experiences/experience-page/what-you-will-do")
    }
    const handleClickPrevious = () => {
        history.push("/experiences/language")
    }

    return (
        <div className="experienceExpertise">
        <div className="experienceExpertise__left">
        <SideBar />
        </div>
        <div className="experienceExpertise__right">
            <p>Expertise</p>
            
        <div className="experienceExpertise__container">
        <div className="experienceExpertise__containerAbout">
            <h1>Expertise</h1>
            <div style={{maxWidth:"540px"}}>
            <p style={{color:"#484848", marginTop:"20px", paddingBottom:"30px", fontSize:"18px"}}>We’re looking for passionate storytellers who can share a unique perspective and insider knowledge.</p>
            <p style={{color:"#484848"}}>This could include:</p>
            <div>
            <ul style={{paddingLeft:"16px", marginTop:"10px"}}>
                <li style={{fontSize:"18px", paddingBottom:"10px"}}>Being a well-informed enthusiast</li>
                <li style={{fontSize:"18px", paddingBottom:"10px"}}>Having specialised training</li>
                <li style={{fontSize:"18px", paddingBottom:"10px"}}>Having achievements in your field</li>
            </ul>
            <p style={{color:"#484848", paddingTop:"20px", fontSize:"20px", lineHeight:"24px", paddingBottom:"20px", borderBottom:"1px solid lightgray"}}>Guests value hosts with a distinctive point of view they can’t find elsewhere.</p>
            </div>
            </div>
        </div>
        <h4>Have you hosted this activity before?</h4>
        <div className="experienceExpertise__hostedContent">
            <label>
                 <Radio
                    style={{color:"#222222"}}
                    checked={selectedValue === 'a'}
                    onChange={handleChangeYes}
                    value="a"
                />
                <span>Yes, I’ve hosted or taught this activity professionally</span>
            </label>
            <label>
            <Radio
                style={{color:"#222222"}}
                checked={selectedValue === 'b'}
                onChange={handleChangeYes}
                value="b"
            />
                <span>Yes, I’ve hosted this activity informally for friends or family</span>
            </label>
            <label>
            <Radio
                style={{color:"#222222"}}
                checked={selectedValue === 'c'}
                onChange={handleChangeNo}
                value="c"
            />
                <span>No, I’ve never hosted this activity before</span>
            </label>
        </div>
        </div>
        <footer className="experienceExpertise__footer">
            <div className="experienceExpertise__footerButtons">
                <Button onClick={handleClickPrevious} style={{border:"1px solid #222222"}}>Previous</Button>
              {hosted ?  <Button onClick={handleClickNext} style={{backgroundColor:"#222222", color:"white"}}>Next</Button> : <Button disabled style={{backgroundColor:"#98989870"}}>Next</Button>}
            </div>
        </footer>
        </div>
        </div>
    )
}

export default ExperienceExpertise
