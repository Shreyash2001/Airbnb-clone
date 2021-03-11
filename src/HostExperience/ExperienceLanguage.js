import React, { useState } from 'react'
import SideBar from '../SideBar'
import "./ExperienceLanguage.css"
import { Button, FormControl, InputLabel, makeStyles, Select } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { experienceLanguageAdd } from '../actions/experienceActions';
import { useHistory } from 'react-router';

function ExperienceLanguage() {
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 400,
          marginTop:"20px"
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
        const classes = useStyles();
        const [state, setState] = useState({
            age: '',
            name: 'hai',
        });

        const [language, setLanguage] = useState("English")
        const [show, setShow] = useState(false)
  const handleChange = (event) => {
    const name = event.target.name;
    
    setState({
      ...state,
      [name]: event.target.value,
    });
    setLanguage(event.target.value)
    setShow(true)
  };


    const dispatch = useDispatch()
    const history = useHistory()
    

    const handleClickNext = () => {
        dispatch(experienceLanguageAdd(language))
        history.push("/experiences/experience-page/overview")

    }
    const handleClickPrevious = () => {
        history.push("/experiences/themes")
    }


    return (
        <div className="experienceLanguage">
        <div className="experienceLanguage__left">
        <SideBar language={"language"} />
        </div>
        <div className="experienceLanguage__right">
            <p>Language</p>
            
        <div className="experienceLanguage__container">
        <div className="experienceLanguage__containerAbout">
            <h1>Language</h1>
            <h3>What's your primary language?</h3>
            <p>You should be able to read, write, and speak in this language.</p>
            <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Language</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
        <option value={""} />
          <option value={"English"}>English</option>
          <option value={"Spanish"}>Spanish</option>
          <option value={"Italiano"}>Italiano</option>
        </Select>
      </FormControl>
        </div>
        </div>
        <footer className="experienceLanguage__footer">
            <div className="experienceLanguage__footerButtons">
                <Button onClick={handleClickPrevious} style={{border:"1px solid #222222"}}>Previous</Button>
                {show ?   <Button onClick={handleClickNext} style={{backgroundColor:"#222222", color:"white"}}>Next</Button> : <Button disabled style={{backgroundColor:"#98989870"}}>Next</Button>}
            </div>
        </footer>
        </div>
        </div>
    )
}

export default ExperienceLanguage
