import React, { useState } from 'react'
import SideBar from '../SideBar'
import "./ExperienceTypeOriginal.css"
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { experienceThemeAdd } from '../actions/experienceActions';
import "./ExperienceTheme.css"
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


function ExperienceTheme() {
    const useStyles = makeStyles((theme) => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          
        },
        paper: {
          backgroundColor: theme.palette.background.paper,
          border: '1px solid #ffffff',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          width:"80%", 
          height:"80%"
        },
      }));

      const classes = useStyles();

      //closing and opening of modals states
      const [openArts, setOpenArts] = useState(false);
      const [openCulture, setOpenCulture] = useState(false);
      const [openEntertainment, setOpenEntertainment] = useState(false);
      const [openFood, setOpenFood] = useState(false);
      const [openSports, setOpenSports] = useState(false);
      const [openHistory, setOpenHistory] = useState(false);

      //Arts & Culture states
      const [architecture, setArchitecture] = useState("Architecture Tour")
      const [artClass, setArtClass] = useState("Art Class")
      const [artExhibition, setArtExhibition] = useState("Art Exhibition")
      const [photoshoot, setphotoshoot] = useState("Photoshoot")
      const [streetArtTour, setStreetArtTour] = useState("Street Art Tour")
      const [fashionClass, setFashionClass] = useState("Fashion Class")

      //Culture & Science States
      const [dancing, setDancing] = useState("Cultural Dancing")
      const [festival, setFestival] = useState("Cultural Festival")
      const [tour, setTour] = useState("Culture Tour")
      const [talk, setTalk] = useState("Cultural Talk")
      const [scienceTour, setScienceTour] = useState("Cultural Science Tour")
      const [scienceClass, setScienceClass] = useState("Cultural Science Class")


      //Entertainment States
      const [gaming, setGaming] = useState("Gaming")
      const [magic, setMagic] = useState("Magic")
      const [fireworks, setFireworks] = useState("Fireworks")
      const [circus, setCircus] = useState("Circus")
      const [dance, setDance] = useState("Dancing")
      const [comedy, setComedy] = useState("Comedy")
      const [nightlife, setNightlife] = useState("Nightlife")
      const [music, setMusic] = useState("Music")
      const [movies, setMovies] = useState("Movies")

      //Food States
      const [cooking, setCooking] = useState("Cooking & Food Making")
      const [foodTour, setFoodTour] = useState("Food & Market tours")
      const [tasting, setTasting] = useState("Food tasting")
      const [dining, setDining] = useState("Social dining")


      //Sports States
      const [teamSports, setTeamSports] = useState("Team sports")
      const [outdoorSports, setOutdoorSports] = useState("Outdoor Sports")
      const [mountainSports, setMountainSports] = useState("Mountain Sports")
      const [adrenalineSports, setAdrenalineSports] = useState("Adrenaline Sports")


      //History & Literature States
      const [historyMuseumTour, setHistoryMuseumTour] = useState("History Museum Tour")
      const [historyMuseumTalk, setHistoryMuseumTalk] = useState("History Museum Talk")
      const [literatureTour, setLiteratureTour] = useState("Literature Tour")
      const [literatureTalk, setLiteratureTalk] = useState("Literature Talk")

      const {tempData} = useSelector(state => state.experience)
      const {theme} = tempData

      const show =  theme === undefined


    //Handles Closing of Modal
  const handleOpenArts = () => {
    setOpenArts(true);
  };
  const handleCloseArts = () => {
    setOpenArts(false);
  };
  const handleOpenCulture = () => {
    setOpenCulture(true);
  };
  const handleCloseCulture = () => {
    setOpenCulture(false);
  };
  const handleOpenEntertainment = () => {
    setOpenEntertainment(true);
  };
  const handleCloseEntertainment = () => {
    setOpenEntertainment(false);
  };
  const handleOpenFood = () => {
    setOpenFood(true);
  };
  const handleCloseFood = () => {
    setOpenFood(false);
  };
  const handleOpenSports = () => {
    setOpenSports(true);
  };
  const handleCloseSports = () => {
    setOpenSports(false);
  };
  const handleOpenHistory = () => {
    setOpenHistory(true);
  };
  const handleCloseHistory = () => {
    setOpenHistory(false);
  };


  //Dispatch requests for Arts & Design
  const handleArchitecture = () => {
    setArchitecture("Architecture Tour")
    setOpenArts(false)
    dispatch(experienceThemeAdd(architecture))
  }
  const handleArtClass = () => {
    setArtClass("Art Class")
    setOpenArts(false)
    dispatch(experienceThemeAdd(artClass))
  }
  const handleExhibition = () => {
    setArtExhibition("Art Exhibition")
    setOpenArts(false)
    dispatch(experienceThemeAdd(artExhibition))
  }
  const handlePhotoshoot = () => {
    setphotoshoot("Photoshoot")
    setOpenArts(false)
    dispatch(experienceThemeAdd(photoshoot))
  }
  const handleStreetArtTour = () => {
    setStreetArtTour("Street Art Tour")
    setOpenArts(false)
    dispatch(experienceThemeAdd(streetArtTour))
  }
  const handleFashion = () => {
    setFashionClass("Fashion Class")
    setOpenArts(false)
    dispatch(experienceThemeAdd(fashionClass))
  }


  //Dispatch requests for Culture & Science
  const handleCulturalDance = () => {
    setDancing("Dancing")
    setOpenCulture(false)
    dispatch(experienceThemeAdd(dancing))
  }
  const handleFestival = () => {
    setFestival("Cultural Festival")
    setOpenCulture(false)
    dispatch(experienceThemeAdd(festival))
  }
  const handleTour = () => {
    setTour("Culture Tour")
    setOpenCulture(false)
    dispatch(experienceThemeAdd(tour))
  }
  const handleTalk = () => {
    setTalk("Cultural Talk")
    setOpenCulture(false)
    dispatch(experienceThemeAdd(talk))
  }
  const handleScienceTour = () => {
    setScienceTour("Cultural Science Tour")
    setOpenCulture(false)
    dispatch(experienceThemeAdd(scienceTour))
  }
  const handleScienceClass = () => {
    setScienceClass("Cultural Science Class")
    setOpenCulture(false)
    dispatch(experienceThemeAdd(scienceClass))
  }


  //Dispatch requests for Entertainment
  const handleGaming = () => {
    setGaming("Gaming")
    setOpenEntertainment(false)
    dispatch(experienceThemeAdd(gaming))
  }
  const handleMagic = () => {
    setMagic("Magic")
    setOpenEntertainment(false)
    dispatch(experienceThemeAdd(magic))
  }
  const handleFireworks = () => {
    setFireworks("Fireworks")
    setOpenEntertainment(false)
    dispatch(experienceThemeAdd(fireworks))
  }
  const handleCircus = () => {
    setCircus("Circus")
    setOpenEntertainment(false)
    dispatch(experienceThemeAdd(circus))
  }
  const handleEntertainmentDance = () => {
    setDance("Dancing")
    setOpenEntertainment(false)
    dispatch(experienceThemeAdd(dance))
  }
  const handleComedy = () => {
    setComedy("Comedy")
    setOpenEntertainment(false)
    dispatch(experienceThemeAdd(comedy))
  }
  const handleNightlife = () => {
    setNightlife("Nightlife")
    setOpenEntertainment(false)
    dispatch(experienceThemeAdd(nightlife))
  }
  const handleMusic = () => {
    setMusic("Music")
    setOpenEntertainment(false)
    dispatch(experienceThemeAdd(music))
  }
  const handleMovies = () => {
    setMovies("Movies")
    setOpenEntertainment(false)
    dispatch(experienceThemeAdd(movies))
  }
 
  //Dispatch requests for Food
  const handleCooking = () => {
    setCooking("Cooking & Food Making")
    setOpenFood(false);
    dispatch(experienceThemeAdd(cooking))
  }
  const handleFoodTours = () => {
    setFoodTour("Food & Market tours")
    setOpenFood(false);
    dispatch(experienceThemeAdd(foodTour))
  }
  const handleFoodTasting = () => {
    setTasting("Food tasting")
    setOpenFood(false);
    dispatch(experienceThemeAdd(tasting))
  }
  const handleSocialDining = () => {
    setDining("Social Dining")
    setOpenFood(false);
    dispatch(experienceThemeAdd(dining))
  }


  //Dispatch requests for Sports
  const handleTeamSports = () => {
    setTeamSports("Team Sports")
    setOpenSports(false);
    dispatch(experienceThemeAdd(teamSports))
  }
  const handleOutdoorSports = () => {
    setOutdoorSports("Outdoor Sports")
    setOpenSports(false);
    dispatch(experienceThemeAdd(outdoorSports))
  }
  const handleMountainSports = () => {
    setMountainSports("Mountain Sports")
    setOpenSports(false);
    dispatch(experienceThemeAdd(mountainSports))
  }
  const handleAdrenalineSports = () => {
    setAdrenalineSports("Adrenaline Sports")
    setOpenSports(false);
    dispatch(experienceThemeAdd(adrenalineSports))
  }


  //Dispatch requests for History & Literature
  const handleHistoryMuseumTour = () => {
    setHistoryMuseumTour("History Museum Tour")
    setOpenHistory(false);
    dispatch(experienceThemeAdd(historyMuseumTour))
  }
  const handleHistoryMuseumTalk = () => {
    setHistoryMuseumTalk("History Museum Talk")
    setOpenHistory(false);
    dispatch(experienceThemeAdd(historyMuseumTalk))
  }
  const handleLiteratureTour = () => {
    setLiteratureTour("Literature Tour")
    setOpenHistory(false);
    dispatch(experienceThemeAdd(literatureTour))
  }
  const handleLiteratureTalk = () => {
    setLiteratureTalk("Literature Talk")
    setOpenHistory(false);
    dispatch(experienceThemeAdd(literatureTalk))
  }
  

    const dispatch = useDispatch()
    const history = useHistory()

    const handleClickNext = () => {
        history.push("/experiences/language")
    }
    const handleClickPrevious = () => {
        history.push("/experiences/location")
    }


    return (
        <div className="experienceTheme">
        <div className="experienceTheme__left">
        <SideBar />
        </div>
        <div className="experienceTheme__right">
            <p>Your theme</p>
            
        <div className="experienceTheme__container">
        <div className="experienceTheme__containerAbout">
            <h1>What type of experience will you host?</h1>
            <p>Select a theme that best describes what guests will mainly be doing on your experience. This will help guests find and book your experience.</p>
            </div>
            <div className="experienceTheme__containerButtons">
      <Button type="button" onClick={handleOpenArts}>
      <div style={{display:"flex", alignItems:"center"}}>
          <h4 style={{marginRight:"100px"}}>Art & Design</h4>
          <ArrowForwardIosIcon />
      </div> 
      </Button>
      <Button type="button" onClick={handleOpenCulture}>
      <div style={{display:"flex", alignItems:"center"}}>
          <h4 style={{marginRight:"50px"}}>culture & science</h4>
          <ArrowForwardIosIcon />
      </div> 
      </Button>
      <Button type="button" onClick={handleOpenEntertainment}>
      <div style={{display:"flex", alignItems:"center"}}>
          <h4 style={{marginRight:"90px"}}>Entertainment</h4>
          <ArrowForwardIosIcon />
      </div> 
      </Button>
      <Button type="button" onClick={handleOpenFood}>
      <div style={{display:"flex", alignItems:"center"}}>
          <h4 style={{marginRight:"170px"}}>Food</h4>
          <ArrowForwardIosIcon />
      </div> 
      </Button>
      <Button type="button" onClick={handleOpenSports}>
      <div style={{display:"flex", alignItems:"center"}}>
          <h4 style={{marginRight:"160px"}}>Sports</h4>
          <ArrowForwardIosIcon />
      </div> 
      </Button>
      <Button type="button" onClick={handleOpenHistory}>
      <div style={{display:"flex", alignItems:"center"}}>
          <h4 style={{marginRight:"20px"}}>History & Literature</h4>
          <ArrowForwardIosIcon />
      </div> 
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openArts}
        onClose={handleCloseArts}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openArts}>
          <div className={classes.paper}>
            <div>
                <h3 style={{marginBottom:"30px"}}>Select Theme</h3>
                <div style={{marginBottom:"10px"}}>
                    <h1>What exactly in Arts & Design?</h1>
                </div>
                <div className="experienceTheme__modalButton">
                    <Button onClick={handleArchitecture}>Architecture Tour</Button>
                    <Button onClick={handleArtClass}>Art Class</Button>
                    <Button onClick={handleExhibition}>Art Exhibition</Button>
                    <Button onClick={handlePhotoshoot}>Photoshoot</Button>
                    <Button onClick={handleStreetArtTour}>Street art tour</Button>
                    <Button onClick={handleFashion}>Fashion class</Button>
                </div>
            </div>
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openCulture}
        onClose={handleCloseCulture}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openCulture}>
          <div className={classes.paper}>
            <div>
                <h3 style={{marginBottom:"30px"}}>Select Theme</h3>
                <div style={{marginBottom:"10px"}}>
                    <h1>What exactly in Culture & Science?</h1>
                </div>
                <div className="experienceTheme__modalButton">
                    <Button onClick={handleCulturalDance}>Cultural Dancing</Button>
                    <Button onClick={handleFestival}>Cultural Festival</Button>
                    <Button onClick={handleTour}>Culture Tour</Button>
                    <Button onClick={handleTalk}>Culture Talk</Button>
                    <Button onClick={handleScienceTour}>Science Tour</Button>
                    <Button onClick={handleScienceClass}>Science Class</Button>
                </div>
            </div>
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openEntertainment}
        onClose={handleCloseEntertainment}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openEntertainment}>
          <div className={classes.paper}>
            <div>
                <h3 style={{marginBottom:"30px"}}>Select Theme</h3>
                <div style={{marginBottom:"10px"}}>
                    <h1>What exactly in Entertainment?</h1>
                </div>
                <div className="experienceTheme__modalButton">
                    <Button onClick={handleGaming}>Gaming</Button>
                    <Button onClick={handleMagic}>Magic</Button>
                    <Button onClick={handleCircus}>Circus</Button>
                    <Button onClick={handleFireworks}>Fireworks</Button>
                    <Button onClick={handleEntertainmentDance}>Dance</Button>
                    <Button onClick={handleComedy}>Comedy</Button>
                    <Button onClick={handleNightlife}>Nightlife</Button>
                    <Button onClick={handleMusic}>Music</Button>
                    <Button onClick={handleMovies}>Movies, TV, or radio</Button>
                </div>
            </div>
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openFood}
        onClose={handleCloseFood}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openFood}>
          <div className={classes.paper}>
            <div>
                <h3 style={{marginBottom:"30px"}}>Select Theme</h3>
                <div style={{marginBottom:"10px"}}>
                    <h1>What exactly in Food?</h1>
                </div>
                <div className="experienceTheme__modalButton">
                    <Button onClick={handleCooking}>Cooking & Food Making</Button>
                    <Button onClick={handleFoodTours}>Food & Market tours</Button>
                    <Button onClick={handleFoodTasting}>Food tasting</Button>
                    <Button onClick={handleSocialDining}>Social dining</Button>
                </div>
            </div>
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openSports}
        onClose={handleCloseSports}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openSports}>
          <div className={classes.paper}>
            <div>
                <h3 style={{marginBottom:"30px"}}>Select Theme</h3>
                <div style={{marginBottom:"10px"}}>
                    <h1>What exactly in Sports?</h1>
                </div>
                <div className="experienceTheme__modalButton">
                    <Button onClick={handleTeamSports}>Team sports</Button>
                    <Button onClick={handleOutdoorSports}>Outdoor sports</Button>
                    <Button onClick={handleMountainSports}>Mountain sports</Button>
                    <Button onClick={handleAdrenalineSports}>Adrenaline sports</Button>
                </div>
            </div>
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openHistory}
        onClose={handleCloseHistory}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openHistory}>
          <div className={classes.paper}>
            <div>
                <h3 style={{marginBottom:"30px"}}>Select Theme</h3>
                <div style={{marginBottom:"10px"}}>
                    <h1>What exactly in History & Literature?</h1>
                </div>
                <div className="experienceTheme__modalButton">
                    <Button onClick={handleHistoryMuseumTour}>History museum tour</Button>
                    <Button onClick={handleHistoryMuseumTalk}>History talk</Button>
                    <Button onClick={handleLiteratureTour}>Literature tour</Button>
                    <Button onClick={handleLiteratureTalk}>Literature talk</Button>
                </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
            
    <div style={{marginTop:"20px"}}>
        {!show && <h2>Theme Selected: {theme}</h2>}
    </div>
        </div>
        
        <footer className="experienceTheme__footer">
            <div className="experienceTheme__footerButtons">
                <Button onClick={handleClickPrevious} style={{border:"1px solid #222222"}}>Previous</Button>
                {!show ?  <Button onClick={handleClickNext} style={{backgroundColor:"#222222", color:"white"}}>Next</Button> : <Button disabled style={{backgroundColor:"#98989870"}}>Next</Button>}
            </div>
        </footer>
        </div>
        </div>
    )
}

export default ExperienceTheme
