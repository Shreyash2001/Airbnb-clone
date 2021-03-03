import { Button, CircularProgress, FormControl, InputLabel, makeStyles, MenuItem, Select, Snackbar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hostedPlaceGetHighPriceDetails, hostedPlaceGetLowPriceDetails, hostedPlaceGetNumberOfBedroomsDetails, hostedPlaceGetSearchResultsDetails, hostedPlaceGetSuitedResultsDetails, hostedPlaceGetTopRatedDetails } from './actions/hostActions'
import MuiAlert from '@material-ui/lab/Alert';
import "./SearchPage.css"
import SearchResult from './SearchResult'
function SearchPage() {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
    const [open, setOpen] = useState(false);
    const [openSeason, setOpenSeason] = useState("");
    const classes = useStyles();
    const dispatch = useDispatch()
      const hostedPlaceTopRated = useSelector(state => state.hostedPlaceTopRated)
      const { loading, error, topRatedPlace } = hostedPlaceTopRated

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      }

      const handleChangeSeason = (event) => {
        setOpenSeason(event.target.value);
      };
      
      

      const handleClickClear = (event) => {
        dispatch(hostedPlaceGetTopRatedDetails())
        setOpenSeason("")
      }

      function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

      useEffect(() => {
          dispatch(hostedPlaceGetTopRatedDetails())
          setOpen(true)
      }, [dispatch])

      useEffect(() => {
        dispatch(hostedPlaceGetSuitedResultsDetails(openSeason))
      }, [dispatch, openSeason])

    return (
        <div className="searchPage">
           <div className="searchPage__info">
            <h1>Stays Nearby</h1>
            <Button variant="outlined" onClick={event => handleClickClear(event)}>Clear Filter</Button>
            <Button variant="outlined" onClick={() => dispatch(hostedPlaceGetNumberOfBedroomsDetails())}>Number Of Bedrooms</Button>
            <Button variant="outlined" onClick={() => dispatch(hostedPlaceGetLowPriceDetails())}>Price low to high</Button>
            <Button variant="outlined" onClick={() => dispatch(hostedPlaceGetHighPriceDetails())}>Price High to Low</Button>
            
            <input placeholder="search by country or city" type="text" onChange={e => dispatch(hostedPlaceGetSearchResultsDetails(e.target.value))} />
            <div className="searchPage__infoSeason">
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label" style={{top:"-9px"}}>Suited</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={openSeason}
          onChange={event => handleChangeSeason(event)}
          label="Season"
          style={{borderRadius:"44px", height:"40px"}}
        >
          <MenuItem value={"vacation"}>Vacation</MenuItem>
          <MenuItem value={"bussiness"}>Bussiness</MenuItem>
          <MenuItem value={"party"}>Party</MenuItem>
        </Select>
        </FormControl>
        
        </div>
           </div>
           {loading && <CircularProgress style={{width:"120px", height:"120px", margin:"100px 500px 400px 600px", color:"#ff7779"}} />}
            {error && <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}><Alert severity="error">{error}</Alert></Snackbar>}
           {topRatedPlace?.map(topRatedPlace => (
            <SearchResult 
                key={topRatedPlace?._id}
               img={topRatedPlace?.image}
               title={topRatedPlace?.title}
               description={topRatedPlace?.description}
               value={topRatedPlace?.rating}
               location={topRatedPlace?.country}
               price={topRatedPlace?.price}
               selectedValue={topRatedPlace?.selectedValue} 
               id={topRatedPlace?._id}
               numReviews={topRatedPlace?.numReviews}
           />
           ))}
           
          
        </div>
    )
}

export default SearchPage
