import React, { useEffect, useState } from 'react'
import "./Home.css"
import Banner from "./Banner"
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { hostGetPlaces } from './actions/hostActions'
import { CircularProgress, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import { Link, useParams } from 'react-router-dom'

function Home() {
      const [open, setOpen] = useState(false);
      

      const dispatch = useDispatch()
      const hostGet = useSelector(state => state.hostGet)
      const { loading, error, allHostPlaces } = hostGet

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
            dispatch(hostGetPlaces())
            setOpen(true)
      }, [dispatch])

    return (
        <div className="home">
            <Banner />
            <div className="home__section">
            {loading && <CircularProgress />}
            {error && <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}><Alert severity="error">{error}</Alert></Snackbar>}
            {allHostPlaces && allHostPlaces.map(allHostPlace => (
              
                  <Card key={allHostPlace._id} 
                  id={allHostPlace._id}
                  src={allHostPlace.image} 
                  title={allHostPlace.title} 
                  description={allHostPlace.description.substring(0, 75)}
                  price={allHostPlace.price}
                  country={allHostPlace.country}
                  value={allHostPlace.reviews.length} />
                  
            ))}
            
            </div>
        </div>
    )
}

export default Home
