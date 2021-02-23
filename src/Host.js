import { Button, InputLabel, MenuItem, Radio, Select } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { hostAddPlace, hostEmpty } from './actions/hostActions';
import "./Host.css"
function Host() {
    const [selectedValue, setSelectedValue] = useState("");
    const [season, setSeason] = useState("");
    const [open, setOpen] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);

    const [title, setTitle] = useState("");
    const [country, setCountry] = useState("");
    const [image, setImage] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [rules, setRules] = useState("");
    const [price, setPrice] = useState(0);

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
       

        dispatch(hostAddPlace(title, image, price, description, country, address, rules, season))
    }

    useEffect(() => {
        if(title.length !== 0 && country.length !== 0 && image.length !== 0 && address.length !== 0 && 
            description.length !== 0 && rules.length !== 0 && price.length !== 0) {
                setBtnDisabled(false)
            }

            if(success){
                history.push("/")
                dispatch(hostEmpty())
            }
    }, [title, country, image, address, description, rules, price, history, success, dispatch])
    return (
        <div className="host">
            <div className="host__form">
            
                    <div className="host__content">
                    <h3 style={{color:"#858484", marginBottom:"10px", marginTop:"10px"}}>Name Your Place</h3>
                    <input type="text" placeholder="  Name" onChange={(e) => setTitle(e.target.value)} required/>
                    <h3 style={{color:"#858484", marginBottom:"10px", marginTop:"10px"}}>Country</h3>
                    <input type="text" placeholder="  Country" onChange={(e) => setCountry(e.target.value)} required/>
                    <h3 style={{color:"#858484", marginBottom:"10px", marginTop:"10px"}}>Image</h3>
                    <input type="text" placeholder="  Image Url" onChange={(e) => setImage(e.target.value)} required/>
                    <h3 style={{color:"#858484", marginBottom:"10px", marginTop:"10px"}}>Address</h3>
                    <input type="text" placeholder="  Address" onChange={(e) => setAddress(e.target.value)} required/>
                    <h3 style={{color:"#858484", marginBottom:"2px", marginTop:"10px"}}>Price</h3>
                    <input style={{width:"30%", marginBottom:"100px"}} type="number" placeholder="₹" onChange={(e) => setPrice(e.target.value)} required/>
                   {btnDisabled ?  <Button className="host__contentDisabledButton" disabled={btnDisabled}>Add The Place</Button> :  <Button className="host__contentButton" onClick={submitHandler}>Add The Place</Button>}
                    </div>
                    
               
            </div>
            
            <div className="host__right">
                <h2 style={{color:"#858484", padding:"10px"}}>What Does Your Place Serves Better?</h2>
            
            <div className="host__cards">
                    
                    <img className="host__cardsVacation" src="https://4.bp.blogspot.com/-TE6_KfBTh20/WQO1aBdwtiI/AAAAAAAB7aw/_iM5fTWGjEUD646NHIaqF5Mn5EbFoGfTQCLcB/s1600/ppap1.jpg" alt=""/>
                    <Radio className="host__cardsRadioVacation" style={{ backgroundColor: 'transparent' }} checked={selectedValue === "vacation"} onChange={(e) => setSelectedValue("vacation")}/>
                    

                    <img className="host__cardsBussiness" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-10_dsc2437-table-10.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b50210fdf53798ae65c0f65b8603c0b7" alt=""/>
                    <Radio className="host__cardsRadioBussiness" style={{ backgroundColor: 'transparent' }} checked={selectedValue === "bussiness"} onChange={(e) => setSelectedValue("bussiness")}/>
                    

                    <img className="host__cardsParty" src="https://pastels-salon.com/wp-content/uploads/festive-party.jpg" alt=""/>
                    <Radio className="host__cardsRadioParty" style={{ backgroundColor: 'transparent' }} checked={selectedValue === "party"} onChange={(e) => setSelectedValue("party")}/>
                    
            </div>
            <h2 style={{color:"#858484", marginBottom:"10px", marginTop:"20px"}}>Describe Your Place</h2>
            <textarea placeholder="Tell users about your place and rooms" onChange={(e) => setDescription(e.target.value)}/>

            <h3 style={{color:"#858484", marginBottom:"10px", marginTop:"10px"}}>Best Season Of Year to Visit</h3>
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

            <h3 style={{color:"#858484", marginBottom:"2px", marginTop:"10px"}}>Rules to follow</h3>
            <textarea placeholder="Rules to follow at your place" onChange={(e) => setRules(e.target.value)}/>

            </div>
        </div>
    )
}

export default Host
