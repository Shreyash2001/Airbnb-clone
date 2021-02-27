import { Button, Checkbox, CircularProgress, FormControlLabel, InputLabel, MenuItem, Radio, Select, Snackbar } from '@material-ui/core'
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

function Host() {
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedValueOfBed, setSelectedValueOfBed] = useState("");
    const [season, setSeason] = useState("");
    const [open, setOpen] = useState(false);
    const [amenitiesOpen, setAmenitiesOpen] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);

    const [title, setTitle] = useState("");
    const [country, setCountry] = useState("");
    const [image, setImage] = useState("");
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
        dispatch(hostAddPlace(title, image, price, description, country, address, season, selectedValue, airConditioning, breakfast, food, cableTv, wifi, freeParking, selectedValueOfBed, numberOfBedrooms))
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

    useEffect(() => {
        if(title.length !== 0 && country.length !== 0 && image.length !== 0 && address.length !== 0 && 
            description.length > 700 && price.length !== 0 && selectedValueOfBed !== 0 && numberOfBedrooms !== 0) {
                setBtnDisabled(false)
            }

            if(success){
                history.push("/")
                dispatch(hostEmpty())
            }
    }, [title, country, image, address, description, price, history, success, selectedValueOfBed, numberOfBedrooms, dispatch])
    return (
        <div className="host">
        {loading && <CircularProgress />}
            {error && <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}><Alert severity="error">{error}</Alert></Snackbar>}
            <div className="host__form">
            
                    <div className="host__content">
                    <h3 style={{ marginBottom:"10px", marginTop:"10px"}}>Name Your Place</h3>
                    <input type="text" placeholder="  Name" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    <h3 style={{ marginBottom:"10px", marginTop:"10px"}}>Country & City</h3>
                    <input type="text" placeholder="  Country" value={country} onChange={(e) => setCountry(e.target.value)} required/>
                    <h3 style={{ marginBottom:"10px", marginTop:"10px"}}>Image</h3>
                    <input type="text" placeholder="  Image Url" value={image} onChange={(e) => setImage(e.target.value)} required/>
                    <h3 style={{ marginBottom:"10px", marginTop:"10px"}}>Address</h3>
                    <input type="text" placeholder="  Address" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                    <h3 style={{ marginBottom:"2px", marginTop:"10px"}}>Price</h3>
                    <input style={{width:"30%", marginBottom:"262px"}} type="number" placeholder="₹" value={price} onChange={(e) => setPrice(e.target.value)} required/>
                   {btnDisabled ?  <Button className="host__contentDisabledButton" disabled={btnDisabled}>Add The Place</Button> :  <Button className="host__contentButton" onClick={submitHandler}>Add The Place</Button>}
                    </div>
                    
               
            </div>
            
            <div className="host__right">
                <h2 style={{ padding:"10px"}}>What Does Your Place Serves Better?</h2>
            
            <div className="host__cards">
                    
                    <img className="host__cardsVacation" src="https://4.bp.blogspot.com/-TE6_KfBTh20/WQO1aBdwtiI/AAAAAAAB7aw/_iM5fTWGjEUD646NHIaqF5Mn5EbFoGfTQCLcB/s1600/ppap1.jpg" alt=""/>
                    <Radio className="host__cardsRadioVacation" style={{ backgroundColor: 'transparent' }} checked={selectedValue === "vacation"} onChange={(e) => setSelectedValue("vacation")}/>
                    

                    <img className="host__cardsBussiness" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-10_dsc2437-table-10.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b50210fdf53798ae65c0f65b8603c0b7" alt=""/>
                    <Radio className="host__cardsRadioBussiness" style={{ backgroundColor: 'transparent' }} checked={selectedValue === "bussiness"} onChange={(e) => setSelectedValue("bussiness")}/>
                    

                    <img className="host__cardsParty" src="https://pastels-salon.com/wp-content/uploads/festive-party.jpg" alt=""/>
                    <Radio className="host__cardsRadioParty" style={{ backgroundColor: 'transparent' }} checked={selectedValue === "party"} onChange={(e) => setSelectedValue("party")}/>
                    
            </div>
            <h2 style={{ marginBottom:"10px", marginTop:"20px"}}>Describe Your Place</h2>
            <textarea placeholder="Tell users about your place and rooms in minimum 700 words." onChange={(e) => setDescription(e.target.value)}/>

            <h3 style={{ marginBottom:"10px", marginTop:"10px"}}>Best Season Of Year to Visit</h3>
        <InputLabel id="demo-controlled-open-select-label">Season</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={season}
          onChange={handleChange}
          style={{marginBottom:"10px"}}
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
   
    <h3 style={{marginBottom:"10px"}}>Number Of Bedrooms</h3>
    <input type="number" style={{width:"200px", marginBottom:"20px"}} onChange={e => setNumberOfBedrooms(e.target.value)}/>
    
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
    )
}

export default Host
