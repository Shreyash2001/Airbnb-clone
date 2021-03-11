import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar'
import { Button, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useDispatch, useSelector } from 'react-redux';
import { experienceImagesAdd, experienceSubmit } from '../actions/experienceActions';
import "./ExperienceImages.css"
import { useHistory } from 'react-router';
import { EXPERIENCE_SUBMIT_RESET } from '../constants/experienceConstants';

function ExperienceImages() {
    const useStyles = makeStyles((theme) => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        paper: {
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          width: "80%",
          height:"690px"
        },
      }));

        const classes = useStyles();
        const [open, setOpen] = useState(false);


        const handleClose = () => {
            setOpen(false);
        };


    const [images, setImages] = useState([])
    const [show, setShow] = useState(false)
    const [showOne, setShowOne] = useState(false)
    const [showTwo, setShowTwo] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const {tempData} = useSelector(state => state.experience)
    const {success, error, loading} = useSelector(state => state.experienceSubmit)
    const {userInfo} = useSelector(state => state.userLogin)
    

    const data = {
        typeOfExperience: tempData.experience,
        location: tempData.location,
        theme: tempData.theme,
        language: tempData.language,
        isHosted: tempData.isHosted,
        description: tempData.description,
        spaceOfBroadCast: tempData.broadcast,
        story: tempData.story,
        isWorkingSolo: tempData.isWorkingSolo,
        guestBring: tempData.item,
        age: tempData.age,
        skill: tempData.skills,
        image:tempData.images,
        title: tempData.title,
        price: Number(tempData.price),
        time: tempData.numberOfHours,
        startTime: tempData.time,
        availability: tempData.availability
    }

    const handleClickNext = () => {
        setOpen(true);
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

    const handleClickSubmit = () => {
        dispatch(experienceSubmit(data))
        
    }

    useEffect(() => {
        if(success) {
            dispatch({type:EXPERIENCE_SUBMIT_RESET})
            history.push("/experiences/online")
        }
    }, [success, history, dispatch])

    return (
        <div className="experienceImages">
        <div className="experienceImages__left">
        <SideBar images={"images"} />
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
               <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={open}>
            <div className={classes.paper}>

            {!(Object.keys(tempData).length === 0) ?    <div className="experienceImages__previewContainer">
                <div className="experienceImages__previewContainerInfo">
                <div>
                <h1>{tempData.title && tempData.title}</h1>
                <span>{tempData?.experience}</span>
                </div>
                    
                    <div className="experienceImages__previewContainerInfoImages">
                    {!(tempData.images === undefined) && tempData.images.map(image => <img src={image} alt="" />) }
                    </div>

                    <div className="experienceImages__previewContainerGeneralInfo">
                    <div className="experienceImages__previewContainerGeneralInfoLeft">
                    <div>
                    <h2>Description</h2>
                    <p>{ tempData.description && tempData.description.substring(0, 100)}...</p>
                    </div>
                    <div style={{display:"flex", alignItems:"center", paddingTop:"10px"}}>
                    <h2 style={{marginRight:"10px"}}>Price:</h2>
                    <h2>₹{tempData.price && tempData.price} / person</h2>
                    </div>
                    <div style={{display:"flex", alignItems:"center", paddingTop:"10px"}}>
                    <h2 style={{marginRight:"10px"}}>Location:</h2>
                    <h2>{tempData.location && tempData.location}</h2>
                    </div>
                    <div style={{display:"flex", alignItems:"center", paddingTop:"10px", marginBottom:"10px"}}>
                    <h2 style={{marginRight:"10px"}}>language:</h2>
                    <h2>{tempData.language && tempData.language}</h2>
                    </div> 
                    <div style={{display:"flex", alignItems:"center", paddingTop:"10px", marginBottom:"10px"}}>
                    <h2 style={{marginRight:"10px"}}>Theme:</h2>
                    <h2>{tempData.theme && tempData.theme}</h2>
                    </div> 
                    <div>
                    <h3 style={{color:"red"}}>Minimum Age: {tempData.age && tempData.age}+</h3>
                    </div> 
                </div>

                <div className="experienceImages__previewContainerGeneralInfoRight">
                <div>
                <h2>Your Story </h2>
                <p>{tempData.story && tempData?.story.substring(0, 100)}...</p>
                </div>
                    <div style={{paddingTop:"10px"}}>
                    <h2>Skill</h2>
                    <p>{tempData.skills && tempData?.skills}</p>
                    </div>
                    <div className="experienceImages__previewContainerGeneralInfoRightTime">
                    <h2>Time</h2>
                    <p style={{marginBottom:"5px"}}>Duration: {tempData.numberOfHours && tempData.numberOfHours}</p>
                    <p style={{marginBottom:"5px"}}>Start Time: {tempData.time && tempData.time}</p>
                    <p style={{marginBottom:"5px"}}>Availability: {tempData.availability && tempData.availability}</p>
                    {error && <h2 style={{color:"red"}}>{error}</h2>}
                    {loading && <CircularProgress style={{color:"#ff7779"}} />}
                   {userInfo ?  <Button onClick={handleClickSubmit}>Submit Experience</Button> : <Button disabled style={{backgroundColor:"#98989870"}}>Submit Experience</Button> }
                    </div>
                </div>

                </div>
                </div>
            </div> : <div style={{display:"flex", alignItems:"center"}}> 
            <img src="https://res.cloudinary.com/cqn/image/upload/v1615382067/problem-solving-creative-decision-difficult-task-lateral-thinking-man-assembling-puzzle-cartoon-character-right-choice-missing-item_335657-2108_agoiwk.jpg" alt="something is missing" /> 
            <h1 style={{fontSize:"60px"}}>Please! fill all the fields to see the Preview.</h1>
            </div> }
            </div> 
            </Fade>
        </Modal>
            </div>
        </footer>
        </div>
        </div>
    )
}

export default ExperienceImages
