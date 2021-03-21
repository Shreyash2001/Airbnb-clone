import { Button, Checkbox, CircularProgress, FormControlLabel, InputLabel, makeStyles, MenuItem, Radio, Select, Snackbar } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { hostAddPlace, hostEmpty } from './actions/hostActions';
import "./Host.css"
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

function Host() {

  const [selectedValue, setSelectedValue] = useState("");
    const [selectedValueHomes, setSelectedValueHomes] = useState("");
    const [selectedValueOfBed, setSelectedValueOfBed] = useState("");
    const [season, setSeason] = useState("");
    const [open, setOpen] = useState(false);
    const [amenitiesOpen, setAmenitiesOpen] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);

    const [title, setTitle] = useState("");
    const [country, setCountry] = useState("");
    const [images, setImages] = useState([]);
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [numberOfBedrooms, setNumberOfBedrooms] = useState("");
    const [price, setPrice] = useState(0);
    
    const [airConditioning, setAirConditioning] = useState("")
    const [breakfast, setBreakfast] = useState("")
    const [cableTv, setCableTv] = useState("")
    const [wifi, setWifi] = useState("")
    const [freeParking, setFreeParking] = useState("")
    const [food, setFood] = useState("")

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  
  function getSteps() {
    return ['Basic Info About your place', 'What Does Your Place Serves Better?', 'Type Of Place', 'Description', 'Other details'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div className="host__form">
            
                    <div className="host__content">
                    <h3 style={{ marginBottom:"10px"}}>What is Your Place called?</h3>
                    <input type="text" placeholder="Name" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    <h3 style={{ marginBottom:"10px", marginTop:"10px"}}>Country & City</h3>
                    <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required/>
                    <h3 style={{ marginBottom:"10px", marginTop:"10px"}}>Images <span style={{fontSize:"10px", color:"red"}}>*Please fill all the images.</span></h3>
                    <input type="text" placeholder="Image Url" onChange={handleChangeImage1} required/>
                    <input type="text" placeholder="Image Url" onChange={handleChangeImage2} required/>
                    <input type="text" placeholder="Image Url" onChange={handleChangeImage3} required/>
                    <h3 style={{ marginBottom:"10px", marginTop:"10px"}}>Address</h3>
                    <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                    <h3 style={{ marginBottom:"2px", marginTop:"10px"}}>Price</h3>
                    <input style={{width:"30%"}} type="number" placeholder="₹" value={price} onChange={(e) => setPrice(e.target.value)} required/>
                    </div>
            </div>
        );
      case 1:
        return (
          <div style={{paddingLeft:"40px", paddingBottom:"38vh"}}>
          <h2 style={{ padding:"10px", color:"#222222"}}>What Does Your Place Serves Better?</h2>
            
            <div className="host__SuitedFor">
                    <div>
                    <Radio checked={selectedValue === "vacation"} onChange={(e) => setSelectedValue("vacation")}/>
                    <label>Suited For Vacation</label>
                    </div>
                    <div>
                    <Radio checked={selectedValue === "bussiness"} onChange={(e) => setSelectedValue("bussiness")}/>
                    <label>Suited For Bussiness & Trips</label>
                    </div>
                    <div>
                    <Radio checked={selectedValue === "party"} onChange={(e) => setSelectedValue("party")}/>
                    <label>Suited For Party</label>
                    </div>
                    
            </div>
            </div>
        );
      case 2:
        return (
          <div style={{paddingLeft:"40px", paddingBottom:"38vh"}}>
          <h2 style={{ padding:"10px", color:"#222222"}}>Type of your Place?</h2>
            
            <div className="host__SuitedFor">
                    <div>
                    <Radio checked={selectedValueHomes === "Entire Homes"} onChange={(e) => setSelectedValueHomes("Entire Homes")}/>
                    <label>Entire Homes</label>
                    </div>
                    <div>
                    <Radio checked={selectedValueHomes === "Unique Stays"} onChange={(e) => setSelectedValueHomes("Unique Stays")}/>
                    <label>Unique Stays</label>
                    </div>
                    <div>
                    <Radio checked={selectedValueHomes === "Cabins & Cottages"} onChange={(e) => setSelectedValueHomes("Cabins & Cottages")}/>
                    <label>Cabins & Cottages</label>
                    </div>
                    
            </div>
            </div>
        );

        case 3: 
          return (
            <div className="host__description">
              <h2 style={{ marginBottom:"10px", marginTop:"20px"}}>Describe Your Place</h2>
            <textarea placeholder="Tell Customers about your place and rooms.(minimum 400 words required)" onChange={(e) => setDescription(e.target.value)}/>
            </div>
          );
        case 4: 
          return (
            <div style={{paddingLeft:"40px", paddingBottom:"2vh"}}>
            
            <div>
              <h2 style={{ marginBottom:"10px", marginTop:"10px"}}>Best Season Of Year to Visit</h2>
        <InputLabel id="demo-controlled-open-select-label" style={{fontSize:"20px", color:"#222222"}}>Season</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={season}
          onChange={handleChange}
          style={{marginBottom:"30px", marginTop:"20px", width:"40%"}}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"summer"}>Summer</MenuItem>
          <MenuItem value={"autumn"}>Autumn</MenuItem>
          <MenuItem value={"spring"}>Spring</MenuItem>
          <MenuItem value={"winter"}>Winter</MenuItem>
          <MenuItem value={"fall"}>Fall</MenuItem>
        </Select>
        </div>

        <div>
      <h3 style={{marginBottom:"10px"}}>What are the amenities you will provide to customers?</h3>
      <Button style={{backgroundColor:"#ff7779", color:"white", marginBottom:"30px"}} onClick={handleClickOpenAmenities}>
        Select Amenities
      </Button>
      <Dialog open={amenitiesOpen} onClose={handleCloseAmenities} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Select the amenities you would give to your customers</DialogTitle>
        <DialogContent>

        
        <FormControlLabel
          value="Air Conditioning"
          control={<Checkbox color="primary" />}
          label="AC"
          labelPlacement="end"
          onChange={(e) => setAirConditioning(e.target.value)}
        />
        <FormControlLabel
          value="Breakfast"
          control={<Checkbox color="primary" />}
          label="Breakfast"
          labelPlacement="end"
          onChange={(e) => setBreakfast(e.target.value)}
        />
        <FormControlLabel
          value="Cable TV"
          control={<Checkbox color="primary" />}
          label="Cable TV"
          labelPlacement="end"
          onChange={(e) => setCableTv(e.target.value)}
        />
        <FormControlLabel
          value="Wifi"
          control={<Checkbox color="primary" />}
          label="Wifi"
          labelPlacement="end"
          onChange={(e) => setWifi(e.target.value)}
        />
        <FormControlLabel
          value="Free Parking"
          control={<Checkbox color="primary" />}
          label="Free Parking"
          labelPlacement="end"
          onChange={(e) => setFreeParking(e.target.value)}
        />
        <FormControlLabel
          value="food"
          control={<Checkbox color="primary" />}
          label="Food"
          labelPlacement="end"
          onChange={(e) => setFood(e.target.value)}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddAmenities} color="primary">
            Add
          </Button>
          <Button onClick={handleCloseAmenities} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
            
            <div className="host__numberOfBed">
            <h3 style={{marginBottom:"10px"}}>Number Of Bedrooms</h3>
            <input type="number" onChange={e => setNumberOfBedrooms(e.target.value)}/>
            <h3>Type of Bed</h3>
            <div className="host__bedroomInfo">
            <Radio style={{ color: '#ff7779' }} value="King Size" checked={selectedValueOfBed === "King Size"} onChange={(e) => setSelectedValueOfBed(e.target.value)} />
            <p>King Size</p>
            <Radio style={{ color: '#ff7779' }} value="Queen Size" checked={selectedValueOfBed === "Queen Size"} onChange={(e) => setSelectedValueOfBed(e.target.value)} />
            <p>Queen Size</p>
            <Radio style={{ color: '#ff7779' }} value="Regular Size" checked={selectedValueOfBed === "Regular Size"} onChange={(e) => setSelectedValueOfBed(e.target.value)} />
            <p>Regular</p>
            </div>
            </div>
            
            </div>
          );
      default:
        return 'Unknown step';
    }
  }
    
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const steps = getSteps();

  

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };



    
    

    const dispatch = useDispatch();
    const hostAdd = useSelector(state => state.hostAdd);
    const {success, loading, error} = hostAdd

    const history = useHistory();


  const handleChange = (event) => {
    setSeason(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
    const submitHandler = () => {
        dispatch(hostAddPlace(title, images, price, description, country, address, season, selectedValue, airConditioning, breakfast, food, cableTv, wifi, freeParking, selectedValueOfBed, numberOfBedrooms, selectedValueHomes))
    }

    const handleClickOpenAmenities = () => {
      setAmenitiesOpen(true);
    };

    const handleCloseAmenities = () => {
      setAmenitiesOpen(false);
      setBreakfast("");
      setFood("");
      setFreeParking("");
      setAirConditioning("");
      setWifi("");
      setCableTv("");
    };

    const handleAddAmenities = () => {
      setAmenitiesOpen(false);
    };

    function Alert(props) {
      return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleChangeImage1 = (e) => {
      setImages([...images, e.target.value])
    }
    const handleChangeImage2 = (e) => {
      setImages([...images, e.target.value])
    }
    const handleChangeImage3 = (e) => {
      setImages([...images, e.target.value])
    }

    useEffect(() => {
        if(title.length !== 0 && country.length !== 0 && images.length !== 0 && address.length !== 0 && 
            description.length >= 400 && price.length !== 0 && selectedValueOfBed !== 0 && numberOfBedrooms !== 0) {
                setBtnDisabled(false)
            }

            if(success){
                history.push("/")
                dispatch(hostEmpty())
            }
    }, [title, country, images, address, description, price, history, success, selectedValueOfBed, numberOfBedrooms, dispatch])

    

    return (
        <div>
            {error && <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}><Alert severity="error">{error}</Alert></Snackbar>}
            
            <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <>
          <div style={{paddingLeft:"40px", paddingBottom:"55vh", textAlign:"center"}}>
            <Typography>
              <h1 style={{marginBottom:"20px"}}>Ready to Submit the Place?</h1>
            </Typography>
            <Button onClick={handleReset} style={{marginRight:"40px"}}>
              Reset
            </Button>
            {btnDisabled ? 
              <Button disabled style={{backgroundColor:"gray", color:"white"}}>
              Submit
            </Button>
            :
            <Button onClick={submitHandler} className="host__button">
              Submit
            </Button>
            
            }
            {loading && <CircularProgress style={{color:"#ff7779"}} />}
          </div>
          
          </>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div style={{display:"flex", justifyContent:"space-between", padding:"10px"}}>
              <Button disabled={activeStep === 0} onClick={handleBack} style={{width:"100px", textTransform:"inherit"}}>
                Back
              </Button>

              <Button
                onClick={handleNext}
                className="host__button"
              >
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>

        </div>
    )
}

export default Host
