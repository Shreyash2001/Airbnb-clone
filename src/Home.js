import React, { useEffect, useState } from 'react'
import "./Home.css"
import Banner from "./Banner"
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { hostGetPlaces } from './actions/hostActions'
import { Button, CircularProgress, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';


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

        function sideScroll(element,direction,speed,distance,step){
          var scrollAmount = 0;
           var slideTimer = setInterval(function(){
               if(direction === 'left'){
                   element.scrollLeft -= step;
               } else {
                   element.scrollLeft += step;
               }
               scrollAmount += step;
               if(scrollAmount >= distance){
                   window.clearInterval(slideTimer);
               }
           }, speed);
       }

       const scrollOnClickRightTopRated = () => {
        sideScroll(document.getElementById("topRated"),'right',10,1500,20); 
    }
    const scrollOnClickLeftTopRated = () => { 
        sideScroll(document.getElementById("topRated"),'left',10,1500,20);
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
                <div className="home__experienceSectionImage4" onClick={() => history.push("/entire-homes")}></div>
                <div>
                  <div>
                    <h2 style={{marginLeft:"120px", marginTop:"10px"}}>Entire Homes</h2>
                  </div>
                </div>
                </div>
                <div className="home__experienceSectionFirst">
                <div className="home__experienceSectionImage5" onClick={() => history.push("/unique-stays")}></div>
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
            
            <div className="home__heading">
                <h1>Top Rated</h1>
                <div style={{display:"flex"}}>
            <div className="home__rightArrowPopular" onClick={scrollOnClickLeftTopRated}>
            <ArrowBackIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
            </div>
           
            <div className="home__leftArrowPopular" onClick={scrollOnClickRightTopRated}>
            <ArrowForwardIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
                </div>
                </div>
            </div>

            <div id="topRated" className="home__section" style={{overflowX:"scroll"}}>
            {loading && <CircularProgress style={{width:"120px", height:"120px", margin:"100px 500px 400px 600px", color:"#ff7779"}}/>}
            {error && <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}><Alert severity="error">{error}</Alert></Snackbar>}
            {allHostPlaces && allHostPlaces?.map(allHostPlace => (
              
                  <Card 
                  key={allHostPlace._id} 
                  id={allHostPlace._id}
                  images={allHostPlace.images[0]} 
                  title={allHostPlace.title} 
                  season={allHostPlace.season}
                  selectedValue={allHostPlace.selectedValue}
                  price={allHostPlace.price}
                  country={allHostPlace.country}
                  value={allHostPlace.rating} 
                  created={allHostPlace.createdAt}
                  recommended={allHostPlace.numReviews}
                  />
                  

                  
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
              {userInfo ? <Button onClick={() => history.push("/host")}>Host a Place</Button> : <Button onClick={() => history.push("/login")}>Sign In to Become Host</Button>}
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
                <div className="home__experienceSectionImage2" onClick={() => history.push("/experiences/in-person")}></div>
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
                <div className="home__experienceSectionImage3" onClick={() => history.push("/experiences/adventures")}></div>
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
