import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./SideBar.css"
import { ArrowDropDown } from '@material-ui/icons';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Button } from '@material-ui/core';

function SideBar({age, expertise, guests, images, language, location, overview, price, skill, working, theme, time, title, type, weWillDo, story}) {
     const history = useHistory()

    useEffect(() => {
        if(type === "type") {
        setAround(true)
        setListItemShow(true)
        setAroundOut(true)
        setAroundExperienceType(true)
        } 
        if(language === "language") {
        setAround(true)
        setListItemShow(true)
        setAroundOut(true)
        setAroundExperienceLanguage(true)
        } 
        else if(location === "location") {
        setAround(true)
        setListItemShow(true)
        setAroundOut(true)
        setAroundExperienceLocation(true)
        } 
        else if(theme === "theme") {
        setAround(true)
        setListItemShow(true)
        setAroundOut(true)
        setAroundExperienceTheme(true)
        } 
        else if(age === "age") {
        setAroundExperiencePage(true)
        setListItemShowExperiencePage(true)
        setAroundOutExperiencePage(true)
        setAroundExperienceAgeExperiencePage(true)
        }
        else if(expertise === "expertise") {
        setAroundExperiencePage(true)
        setListItemShowExperiencePage(true)
        setAroundOutExperiencePage(true)
        setAroundExperienceExpertiseExperiencePage(true)
        }
        else if(guests === "guests") {
        setAroundExperiencePage(true)
        setListItemShowExperiencePage(true)
        setAroundOutExperiencePage(true)
        setAroundExperienceGuestsBringExperiencePage(true)
        }
        else if(overview === "overview") {
        setAroundExperiencePage(true)
        setListItemShowExperiencePage(true)
        setAroundOutExperiencePage(true)
        setAroundExperienceOverviewExperiencePage(true)
        }
        else if(price === "price") {
        setAroundExperiencePage(true)
        setListItemShowExperiencePage(true)
        setAroundOutExperiencePage(true)
        setAroundExperiencePriceExperiencePage(true)
        }
        else if(working === "working") {
        setAroundExperiencePage(true)
        setListItemShowExperiencePage(true)
        setAroundOutExperiencePage(true)
        setAroundExperienceWorkingExperiencePage(true)
        }
        else if(time === "time") {
        setAroundExperiencePage(true)
        setListItemShowExperiencePage(true)
        setAroundOutExperiencePage(true)
        setAroundExperienceTimeExperiencePage(true)
        }
        else if(title === "title") {
        setAroundExperiencePage(true)
        setListItemShowExperiencePage(true)
        setAroundOutExperiencePage(true)
        setAroundExperienceTitleExperiencePage(true)
        }
        else if(weWillDo === "weWillDo") {
        setAroundExperiencePage(true)
        setListItemShowExperiencePage(true)
        setAroundOutExperiencePage(true)
        setAroundExperienceWhatWeWillDoExperiencePage(true)
        }
        else if(images === "images") {
        setAroundAboutMe(true)
        setListItemShowAboutMe(true)
        setAroundOutAboutMe(true)
        setAroundExperienceImagesAboutMe(true)
        }
        else if(skill === "skill") {
        setAroundAboutMe(true)
        setListItemShowAboutMe(true)
        setAroundOutAboutMe(true)
        setAroundExperienceSkillsAboutMe(true)
        }
        else if(story === "story") {
        setAroundAboutMe(true)
        setListItemShowAboutMe(true)
        setAroundOutAboutMe(true)
        setAroundExperienceYourStoryAboutMe(true)
        }
    }, [language, age, expertise, guests, images, location, overview, price, skill, working, theme, title, time, type, weWillDo, story])

    const [around, setAround] = useState(false)
    const [aroundExperiencePage, setAroundExperiencePage] = useState(false)
    const [aroundAboutMe, setAroundAboutMe] = useState(false)

    const [aroundOut, setAroundOut] = useState(false)
    const [aroundOutExperiencePage, setAroundOutExperiencePage] = useState(false)
    const [aroundOutAboutMe, setAroundOutAboutMe] = useState(false)

    const [aroundExperienceOverviewExperiencePage, setAroundExperienceOverviewExperiencePage] = useState(false)
    const [aroundExperienceExpertiseExperiencePage, setAroundExperienceExpertiseExperiencePage] = useState(false)
    const [aroundExperienceWhatWeWillDoExperiencePage, setAroundExperienceWhatWeWillDoExperiencePage] = useState(false)
    const [aroundExperienceGuestsBringExperiencePage, setAroundExperienceGuestsBringExperiencePage] = useState(false)
    const [aroundExperienceTitleExperiencePage, setAroundExperienceTitleExperiencePage] = useState(false)
    const [aroundExperiencePriceExperiencePage, setAroundExperiencePriceExperiencePage] = useState(false)
    const [aroundExperienceTimeExperiencePage, setAroundExperienceTimeExperiencePage] = useState(false)
    const [aroundExperienceAgeExperiencePage, setAroundExperienceAgeExperiencePage] = useState(false)
    const [aroundExperienceWorkingExperiencePage, setAroundExperienceWorkingExperiencePage] = useState(false)

    
    const [aroundExperienceYourStoryAboutMe, setAroundExperienceYourStoryAboutMe] = useState(false)
    const [aroundExperienceSkillsAboutMe, setAroundExperienceSkillsAboutMe] = useState(false)
    const [aroundExperienceImagesAboutMe, setAroundExperienceImagesAboutMe] = useState(false)

    const [aroundExperienceType, setAroundExperienceType] = useState(false)
    const [aroundExperienceLocation, setAroundExperienceLocation] = useState(false)
    const [aroundExperienceTheme, setAroundExperienceTheme] = useState(false)
    const [aroundExperienceLanguage, setAroundExperienceLanguage] = useState(false)

    const [listItemShow, setListItemShow] = useState(false)
    const [listItemShowExperiencePage, setListItemShowExperiencePage] = useState(false)
    const [listItemShowAboutMe, setListItemShowAboutMe] = useState(false)

    const experienceClickHandler = () => {
        history.push("/experiences/experience-type")
        setAround(false)
        setListItemShow(false)
        setAroundOut(!aroundOut)
        
    }

    const experienceClickHandlerExperiencePage = () => {
        history.push("/experiences/experience-page/overview")
        setAroundExperiencePage(false)
        setListItemShowExperiencePage(false)
        setAroundOutExperiencePage(!aroundOutExperiencePage)
        
    }
    const experienceClickHandlerAboutMe = () => {
        history.push("/experiences/about-me/your-story")
        setAroundAboutMe(false)
        setListItemShowAboutMe(false)
        setAroundOutAboutMe(!aroundOutAboutMe)
        
    }


    const experienceClickHandlerDown = () => {
        setAround(true)
        setListItemShow(true)
        setAroundOut(!aroundOut)
    }

    const experienceClickHandlerDownExperiencePage = () => {
        setAroundExperiencePage(true)
        setListItemShowExperiencePage(true)
        setAroundOutExperiencePage(!aroundOutExperiencePage)
    }

    const experienceClickHandlerDownAboutMe = () => {
        setAroundAboutMe(true)
        setListItemShowAboutMe(true)
        setAroundOutAboutMe(!aroundOutAboutMe)
    }

    const handleExperienceTypeClick = () => {
        setAroundExperienceType(true)
        setAroundExperienceLocation(false)
        setAroundExperienceTheme(false)
        setAroundExperienceLanguage(false)
        history.push("/experiences/experience-type")
    }

    const handleExperienceOverviewClickExperiencePage = () => {
        setAroundExperienceOverviewExperiencePage(true)
        setAroundExperienceExpertiseExperiencePage(false)
        setAroundExperienceWhatWeWillDoExperiencePage(false)
        setAroundExperienceGuestsBringExperiencePage(false)
        setAroundExperienceTitleExperiencePage(false)
        setAroundExperiencePriceExperiencePage(false)
        setAroundExperienceTimeExperiencePage(false)
        setAroundExperienceAgeExperiencePage(false)
        setAroundExperienceWorkingExperiencePage(false)
        history.push("/experiences/experience-page/overview")
    }
    const handleExperienceExpertiseClickExperiencePage = () => {
        setAroundExperienceOverviewExperiencePage(false)
        setAroundExperienceExpertiseExperiencePage(true)
        setAroundExperienceWhatWeWillDoExperiencePage(false)
        setAroundExperienceGuestsBringExperiencePage(false)
        setAroundExperienceTitleExperiencePage(false)
        setAroundExperiencePriceExperiencePage(false)
        setAroundExperienceTimeExperiencePage(false)
        setAroundExperienceAgeExperiencePage(false)
        setAroundExperienceWorkingExperiencePage(false)
        history.push("/experiences/experience-page/expertise")
    }
    const handleExperienceWhatWeWillDoClickExperiencePage = () => {
        setAroundExperienceOverviewExperiencePage(false)
        setAroundExperienceExpertiseExperiencePage(false)
        setAroundExperienceWhatWeWillDoExperiencePage(true)
        setAroundExperienceGuestsBringExperiencePage(false)
        setAroundExperienceTitleExperiencePage(false)
        setAroundExperiencePriceExperiencePage(false)
        setAroundExperienceTimeExperiencePage(false)
        setAroundExperienceAgeExperiencePage(false)
        setAroundExperienceWorkingExperiencePage(false)
        history.push("/experiences/experience-page/what-you-will-do")
    }
    const handleExperienceGuestsBringClickExperiencePage = () => {
        setAroundExperienceOverviewExperiencePage(false)
        setAroundExperienceExpertiseExperiencePage(false)
        setAroundExperienceWhatWeWillDoExperiencePage(false)
        setAroundExperienceGuestsBringExperiencePage(true)
        setAroundExperienceTitleExperiencePage(false)
        setAroundExperiencePriceExperiencePage(false)
        setAroundExperienceTimeExperiencePage(false)
        setAroundExperienceAgeExperiencePage(false)
        setAroundExperienceWorkingExperiencePage(false)
        history.push("/experiences/experience-page/guests-bring")
    }
    const handleExperienceTitleClickExperiencePage = () => {
        setAroundExperienceOverviewExperiencePage(false)
        setAroundExperienceExpertiseExperiencePage(false)
        setAroundExperienceWhatWeWillDoExperiencePage(false)
        setAroundExperienceGuestsBringExperiencePage(false)
        setAroundExperienceTitleExperiencePage(true)
        setAroundExperiencePriceExperiencePage(false)
        setAroundExperienceTimeExperiencePage(false)
        setAroundExperienceAgeExperiencePage(false)
        setAroundExperienceWorkingExperiencePage(false)
        history.push("/experiences/experience-page/title")
    }
    const handleExperiencePriceClickExperiencePage = () => {
        setAroundExperienceOverviewExperiencePage(false)
        setAroundExperienceExpertiseExperiencePage(false)
        setAroundExperienceWhatWeWillDoExperiencePage(false)
        setAroundExperienceGuestsBringExperiencePage(false)
        setAroundExperienceTitleExperiencePage(false)
        setAroundExperiencePriceExperiencePage(true)
        setAroundExperienceTimeExperiencePage(false)
        setAroundExperienceAgeExperiencePage(false)
        setAroundExperienceWorkingExperiencePage(false)
        history.push("/experiences/experience-page/price")
    }
    const handleExperienceTimeClickExperiencePage = () => {
        setAroundExperienceOverviewExperiencePage(false)
        setAroundExperienceExpertiseExperiencePage(false)
        setAroundExperienceWhatWeWillDoExperiencePage(false)
        setAroundExperienceGuestsBringExperiencePage(false)
        setAroundExperienceTitleExperiencePage(false)
        setAroundExperiencePriceExperiencePage(false)
        setAroundExperienceTimeExperiencePage(true)
        setAroundExperienceAgeExperiencePage(false)
        setAroundExperienceWorkingExperiencePage(false)
        history.push("/experiences/experience-page/time")
    }
    const handleExperienceAgeClickExperiencePage = () => {
        setAroundExperienceOverviewExperiencePage(false)
        setAroundExperienceExpertiseExperiencePage(false)
        setAroundExperienceWhatWeWillDoExperiencePage(false)
        setAroundExperienceGuestsBringExperiencePage(false)
        setAroundExperienceTitleExperiencePage(false)
        setAroundExperiencePriceExperiencePage(false)
        setAroundExperienceTimeExperiencePage(false)
        setAroundExperienceAgeExperiencePage(true)
        setAroundExperienceWorkingExperiencePage(false)
        history.push("/experiences/experience-page/age")
    }
    const handleExperienceWorkingClickExperiencePage = () => {
        setAroundExperienceOverviewExperiencePage(false)
        setAroundExperienceExpertiseExperiencePage(false)
        setAroundExperienceWhatWeWillDoExperiencePage(false)
        setAroundExperienceGuestsBringExperiencePage(false)
        setAroundExperienceTitleExperiencePage(false)
        setAroundExperiencePriceExperiencePage(false)
        setAroundExperienceTimeExperiencePage(false)
        setAroundExperienceAgeExperiencePage(false)
        setAroundExperienceWorkingExperiencePage(true)
        history.push("/experiences/experience-page/team-or-solo")
    }

    const handleExperienceYourStoryClickAboutMe = () => {
        setAroundExperienceYourStoryAboutMe(true)
        setAroundExperienceSkillsAboutMe(false)
        setAroundExperienceImagesAboutMe(false)
        history.push("/experiences/about-me/your-story")
    }
    const handleExperienceSkillsClickAboutMe = () => {
        setAroundExperienceYourStoryAboutMe(false)
        setAroundExperienceSkillsAboutMe(true)
        setAroundExperienceImagesAboutMe(false)
        history.push("/experiences/about-me/skills")
    }
    const handleExperienceImagesClickAboutMe = () => {
        setAroundExperienceYourStoryAboutMe(false)
        setAroundExperienceSkillsAboutMe(false)
        setAroundExperienceImagesAboutMe(true)
        history.push("/experiences/about-me/images")
    }


    const handleExperienceLocationClick = () => {
        setAroundExperienceType(false)
        setAroundExperienceTheme(false)
        setAroundExperienceLanguage(false)
        setAroundExperienceLocation(true)
        history.push("/experiences/location")
    }


    const handleExperienceThemeClick = () => {
        setAroundExperienceType(false)
        setAroundExperienceTheme(true)
        setAroundExperienceLanguage(false)
        setAroundExperienceLocation(false)
        history.push("/experiences/themes")
    }



    const handleExperienceLanguageClick = () => {
        setAroundExperienceType(false)
        setAroundExperienceTheme(false)
        setAroundExperienceLanguage(true)
        setAroundExperienceLocation(false)
        history.push("/experiences/language")
    }


    return (
        <div className="experienceType">
            <div className="experienceType__left">
            <Link to="/"> <img className="experienceType__logo" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="header logo" /></Link>
            <div className="experienceType__leftContainer">
                <h2>Submit your experience</h2>
                <div>
                {aroundOut ? <div className={around ? "experienceType__infoAround" : "experienceType__info"} onClick={experienceClickHandler}>
                    <ArrowDropDown />
                    <p>Your idea</p>
                </div> :
                <div className= "experienceType__info" onClick={experienceClickHandlerDown}>
                    <ArrowDropUpIcon />
                    <p>Your idea</p>
                </div>}
                {listItemShow && <ul className="experienceType__list">
                <li className="experienceType__listItems">
                <Button onClick={handleExperienceTypeClick} className={aroundExperienceType && "experienceType__Button"}>Experience Type</Button>
                </li>
                <li className="experienceType__listItems">
                <Button onClick={handleExperienceLocationClick} className={aroundExperienceLocation && "experienceType__Button"}>Location</Button>
                </li>
                <li className="experienceType__listItems">
                <Button onClick={handleExperienceThemeClick} className={aroundExperienceTheme && "experienceType__Button"}>Your theme</Button>
                </li>
                <li className="experienceType__listItems">
                <Button onClick={handleExperienceLanguageClick} className={aroundExperienceLanguage && "experienceType__Button"}>Language</Button>
                </li>
                </ul>}
                </div>


                <div>
                {aroundOutExperiencePage ? <div className={aroundExperiencePage ? "experienceType__infoAround" : "experienceType__info"} onClick={experienceClickHandlerExperiencePage}>
                    <ArrowDropDown />
                    <p>Experience Page</p>
                </div> :
                <div className= "experienceType__info" onClick={experienceClickHandlerDownExperiencePage}>
                    <ArrowDropUpIcon />
                    <p>Experience Page</p>
                </div>}
                {listItemShowExperiencePage && <ul className="experienceType__list">
                <li className="experienceType__listItems">
                <Button onClick={handleExperienceOverviewClickExperiencePage} className={aroundExperienceOverviewExperiencePage && "experienceType__Button"}>Overview</Button>
                </li>
                <li className="experienceType__listItems">
                <Button onClick={handleExperienceExpertiseClickExperiencePage} className={aroundExperienceExpertiseExperiencePage && "experienceType__Button"}>Expertise</Button>
                </li>
                <li className="experienceType__listItems">
                <Button onClick={handleExperienceWhatWeWillDoClickExperiencePage} className={aroundExperienceWhatWeWillDoExperiencePage && "experienceType__Button"}>What we'll do</Button>
                </li>
                <li className="experienceType__listItems">
                <Button onClick={handleExperienceGuestsBringClickExperiencePage} className={aroundExperienceGuestsBringExperiencePage && "experienceType__Button"}>What guests should bring</Button>
                </li>
                <li className="experienceType__listItems">
                <Button onClick={handleExperienceTitleClickExperiencePage} className={aroundExperienceTitleExperiencePage && "experienceType__Button"}>Title</Button>
                </li>
                <li className="experienceType__listItems">
                <Button onClick={handleExperiencePriceClickExperiencePage} className={aroundExperiencePriceExperiencePage && "experienceType__Button"}>Price</Button>
                </li>
                <li className="experienceType__listItems">
                <Button onClick={handleExperienceTimeClickExperiencePage} className={aroundExperienceTimeExperiencePage && "experienceType__Button"}>Time</Button>
                </li>
                <li className="experienceType__listItems">
                <Button onClick={handleExperienceAgeClickExperiencePage} className={aroundExperienceAgeExperiencePage && "experienceType__Button"}>Age</Button>
                </li>
                <li className="experienceType__listItems">
                <Button onClick={handleExperienceWorkingClickExperiencePage} className={aroundExperienceWorkingExperiencePage && "experienceType__Button"}>Team or Solo</Button>
                </li>
                </ul>}
                </div>


                <div>
                {aroundOutAboutMe ? <div className={aroundAboutMe ? "experienceType__infoAround" : "experienceType__info"} onClick={experienceClickHandlerAboutMe}>
                    <ArrowDropDown />
                    <p>About Me & Submit</p>
                </div> :
                <div className= "experienceType__info" onClick={experienceClickHandlerDownAboutMe}>
                    <ArrowDropUpIcon />
                    <p>About Me & Submit</p>
                </div>}
                {listItemShowAboutMe && <ul className="experienceType__list">
                <li className="experienceType__listItems">
                <Button onClick={handleExperienceYourStoryClickAboutMe} className={aroundExperienceYourStoryAboutMe && "experienceType__Button"}>Your Story</Button>
                </li>
                <li className="experienceType__listItems">
                <Button onClick={handleExperienceSkillsClickAboutMe} className={aroundExperienceSkillsAboutMe && "experienceType__Button"}>Skills</Button>
                </li>
                <li className="experienceType__listItems">
                <Button onClick={handleExperienceImagesClickAboutMe} className={aroundExperienceImagesAboutMe && "experienceType__Button"}>Images</Button>
                </li>
                </ul>}
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default SideBar
