import React, { useEffect } from 'react'
import "./ExperienceAllHaveFun.css"
import ExperienceContainedCard from './ExperienceContainedCard'
import { useDispatch, useSelector } from 'react-redux'
import { getEverydayExperience } from './actions/experienceActions'
import { CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'

function ExperienceAllHaveFun() {

    const {everydayExperience, loading, error} = useSelector(state => state.getEverydayExperience)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEverydayExperience())
    }, [dispatch])

    return (
        <div>
            <div className="experienceAllHaveFun">
            <div className="experienceAllHaveFun__image">
            <div style={{paddingLeft:"80px"}}>
               <Link to="/"><img style={{width:"140px", paddingBottom:"180px", paddingTop:"10px"}} src="https://www.heroes.liftoff.io/wp-content/uploads/2018/01/airbnb-logo-white.png" alt="logo" /></Link>
            </div>
                <div className="experienceAllHaveFun__imageSideInfo">
                    <h1>Fun for Everyday to Enjoy</h1>
                </div>
            </div>
            <div style={{paddingLeft:"80px", paddingTop:"50px"}}>
            <h2 style={{fontSize:"33px", fontWeight:"400"}}>Fun for Everyday</h2>
            </div>
            {loading ? <CircularProgress style={{width:"10%", height:"15%", margin:"10% 35% 10% 40%", color:"#ff7779"}} /> :
            
            <div className="experienceAllHaveFun__container">
            {error && <h2 style={{color:"red"}}>{error}</h2>}
            {everydayExperience?.map(experience => (
                <ExperienceContainedCard
                  key={experience._id}
                  id={experience._id}
                  image={experience.image[0]}
                  location={experience.location}
                  theme={experience.theme}
                  typeOfExperience={experience.typeOfExperience}
                  title={experience.title}
                  price={experience.price}
                  value={experience.rating}
                  />
            ))}
            </div>
            }
        </div>
        </div>
    )
}

export default ExperienceAllHaveFun
