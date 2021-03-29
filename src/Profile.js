import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Profile.css"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Button, Card, CardActions, CardContent, CircularProgress, Snackbar } from '@material-ui/core';
import { updateUser } from './actions/userActions';
import { deleteHostedPlace, hostedPlaceCreatedByDetails, hostedPlaceUpdateDetails } from './actions/hostActions';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router';
import { deleteExperiences, getCreatedByUserExperiences, getUpdatedExperiences } from './actions/experienceActions';
import { Link } from 'react-router-dom';

function Profile() {

    const {userInfo} = useSelector(state => state.userLogin)
    const {success, loading} = useSelector(state => state.userUpdateDetails)
    const {success:successDeleted, loading:loadingDeleted} = useSelector(state => state.deletedHostedPlace)
    const {success:successExperienceDeleted, loading:loadingExperienceDeleted} = useSelector(state => state.deletedExperience)
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState(userInfo.name)
    const [email, setEmail] = useState(userInfo.email)
    const [isDisabled, setIsDisabled] = useState("true")
    const [isDisabledExperience, setIsDisabledExperience] = useState("true")
    
    

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleClickUserDetails = () => {
        dispatch(updateUser(name, email))
    }

    useEffect(() => {
        dispatch(hostedPlaceCreatedByDetails())
        dispatch(getCreatedByUserExperiences())
    }, [dispatch, successDeleted, successExperienceDeleted])

    const {userCreated} = useSelector(state => state.hostedPlaceCreatedByUser)
    const {createdByUserExperiences} = useSelector(state => state.getCreatedByUserResult)
    const {error:errorHostedPlace, success: successHostedPlace} = useSelector(state => state.updatedHostedPlace)
    const {error:errorExperiences, success: successExperiences} = useSelector(state => state.updatedExperienceResult)

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [images, setImages] = useState([])

    const [titleExperience, setTitleExperience] = useState("")
    const [priceExperience, setPriceExperience] = useState("")
    const [imagesExperience, setImagesExperience] = useState([])

    const [open, setOpen] = useState(true);

    const handleChangeImage1 = (e) => {
        setImages([...images, e.target.value])
    }

    const handleChangeImage2 = (e) => {
        setImages([...images, e.target.value])
    }

    const handleChangeImage3 = (e) => {
        setImages([...images, e.target.value])
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleChangeImageExperience1 = (e) => {
        setImagesExperience([...imagesExperience, e.target.value])
    }

    const handleChangeImageExperience2 = (e) => {
        setImagesExperience([...imagesExperience, e.target.value])
    }

    const handleChangeImageExperience3 = (e) => {
        setImagesExperience([...imagesExperience, e.target.value])
    }

    const handleChangeTitleExperience = (e) => {
        setTitleExperience(e.target.value)
    }
    const handleChangePriceExperience = (e) => {
        setPriceExperience(e.target.value)
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

      const handleCloseHostedPlace = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return (
        <div className="profile">
        <div>
        <Link to="/"> <img className="profile__Headerlogo" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="header logo" /></Link>
        </div>
            <div className="profile__container">
                <div>
                <Avatar style={{width:"250px", height:"250px", marginLeft:"10px"}} />
                <h1>Welcome, {userInfo.name}</h1>
                <div style={{display:"flex", padding:"10px"}}>
                    <p style={{borderRight:"1px solid gray", color:"#222222", marginRight:"10px", paddingRight:"10px"}}><b>{userCreated?.length}</b> Hosted Places</p>
                    <p style={{color:"#222222"}}><b>{createdByUserExperiences?.length}</b> Hosted Experiences</p>
                </div>
                </div>
                {/*/////////// USER DETAILS SECTION //////////// */}
                <div style={{width:"50%", padding:"30px"}}>

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:"30px"}}>User Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
         
          <div className="profile__userDetails">
          <input type="text" defaultValue={name} onChange={handleChangeName} />
          <input type="email" defaultValue={email} onChange={handleChangeEmail} />
          <Button onClick={handleClickUserDetails}>Submit</Button>
         {loading && <CircularProgress style={{color:"#ff7779"}} />} 
         {success && <p style={{color:"green"}}>Detail Updated Successfully.<br /> Please Login again to see changes.</p>}
          </div>
          
        </AccordionDetails>
      </Accordion>
                </div>

        {/*/////////// HOSTED PLACES SECTION //////////// */}

            <div style={{width:"70%", padding:"30px"}}>
                <div>
                <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:"30px"}}>Hosted Place Details</Typography>
        </AccordionSummary>

        <AccordionDetails style={{display:"flex", flexWrap:"wrap", padding:"20px"}}>
        {userCreated?.length > 0 && 
        <Button size="small" 
        style={{color:"#fff", 
        textTransform:"inherit", 
        position:"absolute", 
        left:"16px",
        top:"80px", 
        width:"140px",
        backgroundColor:"#ff7779"
        }} onClick={() => setIsDisabled("false")}>
        <EditIcon />Edit
        </Button> }

        {userCreated?.length > 0 ? userCreated?.map(userCreate => (
            <Typography>
          <Card variant="outlined" style={{marginRight:"30px", marginTop:"40px", minWidth:"300px"}}>
      <CardContent>
      <div>
      {userCreate.images.map(image => (
        <img style={{width:"80px", height:"80px", marginRight:"10px", marginBottom:"10px"}} src={image} alt={userCreate.title} />
      ))}
          
      </div>
      <div style={{display:"flex", flexDirection:"column"}}>
      <div>
        <label>Title:</label>
        {isDisabled === "true" ? 
          <input type="text" defaultValue={userCreate.title} disabled
          style={{
              marginBottom:"10px", 
              height:"20px", 
              padding:"5px", 
              marginLeft:"12px", 
              width:"70%"
            }} />
            :
            <input type="text" defaultValue={userCreate.title} onChange={handleChangeTitle}
          style={{
              marginBottom:"10px", 
              height:"20px", 
              padding:"5px", 
              marginLeft:"12px", 
              width:"70%"
            }} />
            }
        </div>

        <div>
        <label>Price:</label>
        {isDisabled === "true" ? 
         <input type="number" defaultValue={userCreate.price}  disabled
         style={{
             marginBottom:"10px", 
             height:"20px", 
             padding:"5px", 
             marginLeft:"5px", 
             width:"70%"
            }} />
            :
         <input type="number" defaultValue={userCreate.price} onChange={handleChangePrice}
         style={{
             marginBottom:"10px", 
             height:"20px", 
             padding:"5px", 
             marginLeft:"5px", 
             width:"70%"
            }} /> }
         </div>
        
            <div>
            <label>Url:</label>
            {isDisabled === "true" ? 
        <input type="text" defaultValue={userCreate?.images[0]} disabled
        style={{
            marginBottom:"10px", 
            height:"20px", 
            padding:"5px", 
            marginLeft:"22px", 
            width:"70%"
        }}  />
        :
        <input type="text" defaultValue={userCreate?.images[0]} onChange={handleChangeImage1}
        style={{
            marginBottom:"10px", 
            height:"20px", 
            padding:"5px", 
            marginLeft:"22px", 
            width:"70%"
        }}  /> }
        </div>

        <div>
            <label>Url:</label>
            {isDisabled === "true" ? 
        <input type="text" defaultValue={userCreate?.images[1]} disabled
        style={{
            marginBottom:"10px", 
            height:"20px", 
            padding:"5px", 
            marginLeft:"22px", 
            width:"70%"
        }}  />
        :
        <input type="text" defaultValue={userCreate?.images[1]} onChange={handleChangeImage2}
        style={{
            marginBottom:"10px", 
            height:"20px", 
            padding:"5px", 
            marginLeft:"22px", 
            width:"70%"
        }}  /> }
        </div>

        <div>
            <label>Url:</label>
            {isDisabled === "true" ? 
        <input type="text" defaultValue={userCreate?.images[2]} disabled
        style={{
            marginBottom:"10px", 
            height:"20px", 
            padding:"5px", 
            marginLeft:"22px", 
            width:"70%"
        }}  />
        :
        <input type="text" defaultValue={userCreate?.images[2]} onChange={handleChangeImage3}
        style={{
            marginBottom:"10px", 
            height:"20px", 
            padding:"5px", 
            marginLeft:"22px", 
            width:"70%"
        }}  /> }
        </div>
    
        </div>
      </CardContent>
      <CardActions>
     {isDisabled === "false" && <Button size="small" style={{color:"#fff", textTransform:"inherit", backgroundColor:"green"}} onClick={() => dispatch(hostedPlaceUpdateDetails(userCreate._id, title, price, images))} >Submit</Button>}
        <Button size="small" style={{color:"red", textTransform:"inherit"}} onClick={() => dispatch(deleteHostedPlace(userCreate._id))}><DeleteIcon />Delete</Button>
        
      </CardActions>
    </Card>
          </Typography>
        )) : <img src="https://image.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg" alt="nothing" />}
          
        </AccordionDetails>
      </Accordion>
                </div>
            </div>


            {/* //////////// EXPERIENCES SECTION ////////////// */}


            <div style={{width:"70%", padding:"30px"}}>
                <div>
                <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:"30px"}}>Experiences Details</Typography>
        </AccordionSummary>

        <AccordionDetails style={{display:"flex", flexWrap:"wrap", padding:"20px"}}>
        {createdByUserExperiences?.length > 0 &&
        <Button 
        style={{color:"#fff", 
        textTransform:"inherit", 
        position:"absolute", 
        left:"16px",
        top:"80px", 
        width:"140px",
        backgroundColor:"#ff7779"
        }} onClick={() => setIsDisabledExperience("false")}>
        <EditIcon />Edit
        </Button>}
        {createdByUserExperiences?.length > 0 ? createdByUserExperiences?.map(createdByUserExperience => (
            <Typography>
          <Card variant="outlined" style={{marginRight:"30px", marginTop:"40px"}}>
      <CardContent>
      <div>
      {createdByUserExperience.image.map(image => (
        <img style={{width:"80px", height:"80px", marginRight:"10px", marginBottom:"10px"}} src={image} alt={createdByUserExperience.title} />
      ))}
          
      </div>
      <div style={{display:"flex", flexDirection:"column"}}>
      <div>
        <label>Title:</label>
        {isDisabledExperience === "true" ? 
          <input type="text" defaultValue={createdByUserExperience.title} disabled
          style={{
              marginBottom:"10px", 
              height:"20px", 
              padding:"5px", 
              marginLeft:"12px", 
              width:"70%"
            }} />
            :
            <input type="text" defaultValue={createdByUserExperience.title} onChange={handleChangeTitleExperience}
          style={{
              marginBottom:"10px", 
              height:"20px", 
              padding:"5px", 
              marginLeft:"12px", 
              width:"70%"
            }} />
            }
        </div>

        <div>
        <label>Price:</label>
        {isDisabledExperience === "true" ? 
         <input type="number" defaultValue={createdByUserExperience.price}  disabled
         style={{
             marginBottom:"10px", 
             height:"20px", 
             padding:"5px", 
             marginLeft:"5px", 
             width:"70%"
            }} />
            :
         <input type="number" defaultValue={createdByUserExperience.price} onChange={handleChangePriceExperience}
         style={{
             marginBottom:"10px", 
             height:"20px", 
             padding:"5px", 
             marginLeft:"5px", 
             width:"70%"
            }} /> }
         </div>
        
            <div>
            <label>Url:</label>
            {isDisabledExperience === "true" ? 
        <input type="text" defaultValue={createdByUserExperience?.image[0]} disabled
        style={{
            marginBottom:"10px", 
            height:"20px", 
            padding:"5px", 
            marginLeft:"22px", 
            width:"70%"
        }}  />
        :
        <input type="text" defaultValue={createdByUserExperience?.image[0]} onChange={handleChangeImageExperience1}
        style={{
            marginBottom:"10px", 
            height:"20px", 
            padding:"5px", 
            marginLeft:"22px", 
            width:"70%"
        }}  /> }
        </div>

        <div>
            <label>Url:</label>
            {isDisabledExperience === "true" ? 
        <input type="text" defaultValue={createdByUserExperience?.image[1]} disabled
        style={{
            marginBottom:"10px", 
            height:"20px", 
            padding:"5px", 
            marginLeft:"22px", 
            width:"70%"
        }}  />
        :
        <input type="text" defaultValue={createdByUserExperience?.image[1]} onChange={handleChangeImageExperience2}
        style={{
            marginBottom:"10px", 
            height:"20px", 
            padding:"5px", 
            marginLeft:"22px", 
            width:"70%"
        }}  /> }
        </div>

        <div>
            <label>Url:</label>
            {isDisabledExperience === "true" ? 
        <input type="text" defaultValue={createdByUserExperience?.image[2]} disabled
        style={{
            marginBottom:"10px", 
            height:"20px", 
            padding:"5px", 
            marginLeft:"22px", 
            width:"70%"
        }}  />
        :
        <input type="text" defaultValue={createdByUserExperience?.image[2]} onChange={handleChangeImageExperience3}
        style={{
            marginBottom:"10px", 
            height:"20px", 
            padding:"5px", 
            marginLeft:"22px", 
            width:"70%"
        }}  /> }
        </div>
    
        </div>
      </CardContent>
      <CardActions>
     {isDisabledExperience === "false" && <Button size="small" style={{color:"#fff", textTransform:"inherit", backgroundColor:"green"}} onClick={() => dispatch(getUpdatedExperiences(createdByUserExperience._id, titleExperience, priceExperience, imagesExperience))} >Submit</Button>}
        <Button size="small" style={{color:"red", textTransform:"inherit"}} onClick={() => dispatch(deleteExperiences(createdByUserExperience._id))}><DeleteIcon />Delete</Button>
        
      </CardActions>
    </Card>
          </Typography>
        )) : <img src="https://image.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg" alt="nothing" />}
          
        </AccordionDetails>
      </Accordion>
                </div>
            </div>
            {successHostedPlace && <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseHostedPlace}>
        <Alert onClose={handleCloseHostedPlace} severity="success">
          Updated Successfully
        </Alert>
      </Snackbar>}
            {successExperiences && <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseHostedPlace}>
        <Alert onClose={handleCloseHostedPlace} severity="success">
          Updated Successfully
        </Alert>
      </Snackbar>}
            {successDeleted && <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseHostedPlace}>
        <Alert onClose={handleCloseHostedPlace} severity="warning">
          Deleted Successfully
        </Alert>
      </Snackbar>}
            
            {errorHostedPlace && <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseHostedPlace}>
        <Alert onClose={handleCloseHostedPlace} severity="error">
          {errorHostedPlace}
        </Alert>
      </Snackbar>}
            {errorExperiences && <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseHostedPlace}>
        <Alert onClose={handleCloseHostedPlace} severity="error">
          {errorExperiences}
        </Alert>
      </Snackbar>}
      {successExperienceDeleted && <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseHostedPlace}>
        <Alert onClose={handleCloseHostedPlace} severity="warning">
          Deleted Successfully
        </Alert>
      </Snackbar>}
            </div>
        </div>
    )
}

export default Profile
