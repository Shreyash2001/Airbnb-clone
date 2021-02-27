import { Button, CircularProgress, Snackbar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hostedPlaceGetTopRatedDetails } from './actions/hostActions'
import MuiAlert from '@material-ui/lab/Alert';
import "./SearchPage.css"
import SearchResult from './SearchResult'
function SearchPage() {
    const [open, setOpen] = useState(false);
    
    const dispatch = useDispatch()
      const hostedPlaceTopRated = useSelector(state => state.hostedPlaceTopRated)
      const { loading, error, topRatedPlace } = hostedPlaceTopRated

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      }

      function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

      useEffect(() => {
          dispatch(hostedPlaceGetTopRatedDetails())
          setOpen(true)
      }, [dispatch])

    return (
        <div className="searchPage">
           <div className="searchPage__info">
            <h1>Stays Nearby</h1>
            <Button variant="outlined">Type Of Place</Button>
            <Button variant="outlined">Price</Button>
            <Button variant="outlined">Rooms & Beds</Button>
            <Button variant="outlined">More Filters</Button>
           </div>
           {loading && <CircularProgress style={{width:"120px", height:"120px", margin:"300px", color:"#ff7779"}} />}
            {error && <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}><Alert severity="error">{error}</Alert></Snackbar>}
           {topRatedPlace?.map(topRatedPlace => (
            <SearchResult 
               img={topRatedPlace?.image}
               title={topRatedPlace?.title}
               description={topRatedPlace?.description}
               value={topRatedPlace?.rating}
               location={topRatedPlace?.country}
               price={topRatedPlace?.price}
               total={topRatedPlace?.selectedValue} 
               id={topRatedPlace?._id}
               numReviews={topRatedPlace?.numReviews}
           />
           ))}
           
          
        </div>
    )
}

export default SearchPage
