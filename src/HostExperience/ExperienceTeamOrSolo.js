import React, { useState } from 'react'
import SideBar from '../SideBar'
import { Button, Radio } from '@material-ui/core';
import "./ExperienceTeamOrSolo.css"
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { experienceWorkingAdd } from '../actions/experienceActions';


function ExperienceTeamOrSolo() {

    const history = useHistory()
    const dispatch = useDispatch()

    const [hosted, setHosted] = useState(false)
    const [isWorkingSolo, setIsWorkingSolo] = useState(false)
    const [selectedValue, setSelectedValue] = useState('');


    const handleChangeYes = (event) => {
        setSelectedValue(event.target.value);
        setHosted(true)
        setIsWorkingSolo(true)
      };

      const handleChangeNo = (event) => {
        setSelectedValue(event.target.value);
        setHosted(true)
        setIsWorkingSolo(false)
      }
    
    const handleClickNext = () => {
        dispatch(experienceWorkingAdd(isWorkingSolo))
        history.push("/experiences/about-me/your-story")
    }
    const handleClickPrevious = () => {
        history.push("/experiences/experience-page/age")
    }

    return (
        <div className="experienceTeamOrSolo">
        <div className="experienceTeamOrSolo__left">
        <SideBar />
        </div>
        <div className="experienceTeamOrSolo__right">
            <p>Working</p>
            
        <div className="experienceTeamOrSolo__container">
        <div className="experienceTeamOrSolo__containerAbout">
            <h1>Which of the following best describes you and your experience?</h1>
            
        </div>
        <div className="experienceTeamOrSolo__hostedContent">
            <label>
                 <Radio
                    style={{color:"#222222"}}
                    checked={selectedValue === 'a'}
                    onChange={handleChangeYes}
                    value="a"
                />
                <h3>I’m hosting by myself.</h3>
            </label>
            <label>
            <Radio
                style={{color:"#222222"}}
                checked={selectedValue === 'b'}
                onChange={handleChangeNo}
                value="b"
            />
                <h3>I have a team that helps me host.</h3>
            </label>
        </div>
        </div>
        <footer className="experienceTeamOrSolo__footer">
            <div className="experienceTeamOrSolo__footerButtons">
                <Button onClick={handleClickPrevious} style={{border:"1px solid #222222"}}>Previous</Button>
              {hosted ?  <Button onClick={handleClickNext} style={{backgroundColor:"#222222", color:"white"}}>Next</Button> : <Button disabled style={{backgroundColor:"#98989870"}}>Next</Button>}
            </div>
        </footer>
        </div>
        </div>
    )
}

export default ExperienceTeamOrSolo
