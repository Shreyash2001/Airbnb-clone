import React, { useState } from 'react'
import SideBar from '../SideBar'
import { Button, Radio } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { experienceDescriptionAdd, experienceBroadcastAdd } from '../actions/experienceActions';
import "./ExperienceWhatWeWillDo.css"
import { useHistory } from 'react-router';

function ExperienceWhatWeWillDo() {
    const [description, setDescription] = useState("")
    const [show, setShow] = useState(false)
    const [selectedValue, setSelectedValue] = useState('');
    const [indoor, setIndoor] = useState("Indoor");
    const [outdoor, setOutdoor] = useState("Outdoor");
    const dispatch = useDispatch()
    const history = useHistory()

    const handleClickNext = () => {
        dispatch(experienceDescriptionAdd(description))
        history.push("/experiences/experience-page/guests-bring")
    }
    const handleClickPrevious = () => {
        history.push("/experiences/experience-page/expertise")
    }

    const handleChange = (e) => {
        if(e.target.value.length > 400){
            setDescription(e.target.value)
            setShow(true)
        } else {
            setShow(false)
        }
        
    }

    const handleChangeYes = (event) => {
        setSelectedValue(event.target.value);
        setIndoor("Indoor")
       dispatch(experienceBroadcastAdd(indoor))
      };

      const handleChangeNo = (event) => {
        setSelectedValue(event.target.value);
        setOutdoor("Outdoor")
        dispatch(experienceBroadcastAdd(outdoor))
      }

      

    return (
        <div className="experienceWhatWeWillDo">
        <div className="experienceWhatWeWillDo__left">
        <SideBar />
        </div>
        <div className="experienceWhatWeWillDo__right">
            <p>What we’ll do</p>
            
        <div className="experienceWhatWeWillDo__container">
        <div className="experienceWhatWeWillDo__containerAbout">
            <h1>What we’ll do</h1>
            <p style={{color:"#484848", paddingBottom:"20px"}}>Your activity description is a chance to inspire guests to take your experience. Think about it like a story, with a beginning, middle, and end.</p>
            <h4>Describe your experience</h4>
            <ol className="experienceWhatWeWillDo__containerAboutLists">
                <li><p>First, briefly describe what you’ll do with your guests. What unique details set it apart from other similar experiences?</p></li>
                <li><p>Then, get more specific. How will you kick things off? How will you make guests feel included and engaged during your time together?</p></li>
                <li><p>Finally, say what you want guests to leave with. Friends? Knowledge? A greater appreciation for your culture? End with a strong selling point.</p></li>
            </ol>
            <div className="experienceWhatWeWillDo__containerAboutTextarea">
            <textarea placeholder="What are you hosting? Be specific!(*Minimum 400 words required)" onChange={handleChange} />
        </div>
        <h3>Where will you broadcast from?</h3>
        <div className="experienceWhatWeWillDo__broadcast">
            <label>
                 <Radio
                    style={{color:"#222222"}}
                    checked={selectedValue === 'a'}
                    onChange={handleChangeYes}
                    value="a"
                />
                <span>Indoors or on my personal property (e.g. my living room or garden)</span>
            </label>
    
            <label>
            <Radio
                style={{color:"#222222"}}
                checked={selectedValue === 'c'}
                onChange={handleChangeNo}
                value="c"
            />
                <span>Outdoors and not on my personal property (e.g. at a local park or tourist attraction)</span>
            </label>
        </div>
        </div>
        
        </div>
        <footer className="experienceWhatWeWillDo__footer">
            <div className="experienceWhatWeWillDo__footerButtons">
                <Button onClick={handleClickPrevious} style={{border:"1px solid #222222"}}>Previous</Button>
               {show && selectedValue !== "" ?  <Button onClick={handleClickNext} style={{backgroundColor:"#222222", color:"white"}}>Next</Button> : <Button disabled style={{backgroundColor:"#98989870"}}>Next</Button> }
            </div>
        </footer>
        </div>
        </div>
    )
}

export default ExperienceWhatWeWillDo
