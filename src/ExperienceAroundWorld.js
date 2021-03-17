import React, { useEffect } from 'react'
import "./ExperienceAroundWorld.css"
import ExperienceContainedCard from './ExperienceContainedCard'
import { useDispatch, useSelector } from 'react-redux'
import { getNewExperiences } from './actions/experienceActions'
import { CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'

function ExperienceAroundWorld() {

    const {newExperiences, loading, error} = useSelector(state => state.newExperiences)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewExperiences())
    }, [dispatch])


    return (
        <div className="experienceAroundWorld">
            <div className="experienceAroundWorld__image">
            <div style={{paddingLeft:"80px"}}>
               <Link to="/"><img style={{width:"140px", paddingBottom:"80px", paddingTop:"10px"}} src="https://www.heroes.liftoff.io/wp-content/uploads/2018/01/airbnb-logo-white.png" alt="logo" /></Link>
            </div>
                <div className="experienceAroundWorld__imageSideInfo">
                    <h1>A whole world to explore</h1>
                    <p>All themed Online Experiences to inspire your next great getaway.</p>
                </div>
            </div>
            <div style={{paddingLeft:"80px", paddingTop:"50px"}}>
            <h2 style={{fontSize:"33px", fontWeight:"400"}}>All Around the World</h2>
            </div>
            {loading ? <CircularProgress style={{width:"10%", height:"15%", margin:"10% 35% 10% 40%", color:"#ff7779"}} /> :
            <div className="experienceAroundWorld__container">
            {error && <h2 style={{color:"red"}}>{error}</h2>}
            {newExperiences?.map(newExperience => (
                <ExperienceContainedCard
                  key={newExperience._id}
                  id={newExperience._id}
                  image={newExperience.image[0]}
                  location={newExperience.location}
                  theme={newExperience.theme}
                  typeOfExperience={newExperience.typeOfExperience}
                  title={newExperience.title}
                  price={newExperience.price}
                  value={newExperience.rating}
                  />
            ))}
            </div>
            }
        </div>
    )
}

export default ExperienceAroundWorld
