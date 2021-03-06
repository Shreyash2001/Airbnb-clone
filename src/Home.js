import React, { useEffect, useState } from 'react'
import "./Home.css"
import Banner from "./Banner"
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { hostGetPlaces } from './actions/hostActions'
import { Button, CircularProgress, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router'


function Home() {
      const [open, setOpen] = useState(false);
      const history = useHistory()      

      const dispatch = useDispatch()
      const hostGet = useSelector(state => state.hostGet)
      const { loading, error, allHostPlaces } = hostGet

      const userLogin = useSelector(state => state.userLogin)
      const { userInfo } = userLogin

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
            <div className="home__experienceSection">
              <div className="home__experienceSectionImages">
              <div className="home__experienceSectionFirst">
                <div className="home__experienceSectionImage4" onClick={() => history.push("/entirehomes")}></div>
                <div>
                  <div>
                    <h2 style={{marginLeft:"120px", marginTop:"10px"}}>Entire Homes</h2>
                  </div>
                </div>
                </div>
                <div className="home__experienceSectionFirst">
                <div className="home__experienceSectionImage5" onClick={() => history.push("/uniquestays")}></div>
                <div>
                  <div>
                    <h2 style={{marginLeft:"120px", marginTop:"10px"}}>Unique Stays</h2>
                  </div>
                </div>
                </div>
                <div className="home__experienceSectionFirst">
                <div className="home__experienceSectionImage6" onClick={() => history.push("/cottages")}></div>
                <div>
                  <div>
                    <h2 style={{marginLeft:"120px", marginTop:"10px"}}>Cabins & Cottages</h2>
                  </div>
                </div>
                </div>
              </div>
            </div>
            
            <h1 style={{paddingLeft:"100px", color:"#222222", fontSize:"32px", fontWeight:"700"}}>Top Stays</h1>
            <div className="home__section">
            {loading && <CircularProgress style={{width:"120px", height:"120px", margin:"100px 500px 400px 600px", color:"#ff7779"}}/>}
            {error && <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}><Alert severity="error">{error}</Alert></Snackbar>}
            {allHostPlaces && allHostPlaces.map(allHostPlace => (
              
                  <Card key={allHostPlace._id} 
                  id={allHostPlace._id}
                  src={allHostPlace.image} 
                  title={allHostPlace.title} 
                  description={allHostPlace.description.substring(0, 75)}
                  price={allHostPlace.price}
                  country={allHostPlace.country}
                  value={allHostPlace.rating} />
                  
            ))}
            
            </div>
            
            <div className="home__hostSection">
            <div className="home__hostSectionImage">
              <div className="home__hostInfo">
              <h1>Your world is worth sharing</h1>
              </div>
              <div className="home__hostInfoBelow">
                <h3>Turn your extra space into your next opportunity.</h3>
              </div>
              <div className="home__hostInfoButton">
              {userInfo ?   <Button onClick={() => history.push("/host")}>Host a Place</Button> : <Button onClick={() => history.push("/login")}>Sign In to Become Host</Button>}
              </div>
            </div>
            
            </div>

            <div className="home__experienceSection">
              <div className="home__experienceSectionHeading">
              <h1>Experience the world</h1>
              <span>Unique activities with local experts – in person or online.</span>
              </div>
              <div className="home__experienceSectionImages">
              <div className="home__experienceSectionFirst">
                <div className="home__experienceSectionImage1" onClick={() => history.push("/experiences/online")}></div>
                <div>
                  <div>
                    <h2 style={{marginTop:"10px"}}>Online Experiences</h2>
                  </div>
                  <div>
                    <span>Travel the world without leaving home.</span>
                  </div>
                </div>
                </div>
                <div className="home__experienceSectionFirst">
                <div className="home__experienceSectionImage2" onClick={() => history.push("/experiences/inperson")}></div>
                <div>
                  <div>
                    <h2 style={{marginTop:"10px"}}>Experiences</h2>
                  </div>
                  <div>
                    <span>Things to do wherever you are.</span>
                  </div>
                </div>
                </div>
                <div className="home__experienceSectionFirst">
                <div className="home__experienceSectionImage3" onClick={() => history.push("/adventures")}></div>
                <div>
                  <div>
                    <h2 style={{marginTop:"10px"}}>Adventures</h2>
                  </div>
                  <div>
                    <span>Multi-day trips with meals and stays.</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Home
