import React, {useEffect} from 'react'
import "./Adventures.css"
import ExperienceContainedCard from './ExperienceContainedCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAdventureExperience } from './actions/experienceActions'
import { CircularProgress } from '@material-ui/core'


function Adventures() {

    const {adventure, loading, error} = useSelector(state => state.getAdventure)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAdventureExperience())
    }, [dispatch])

    return (
        <div>
            <div className="adventures">
            <div className="adventures__image">
                <div className="adventures__imageSideInfo">
                    <h1>Airbnb Adventures</h1>
                    <p>Multi-day trips led by local experts – activities, meals, and stays included.</p>
                </div>
            </div>
            <div style={{paddingLeft:"100px", paddingTop:"50px"}}>
            <h2 style={{fontSize:"33px", fontWeight:"400"}}>Top sellers</h2>
            </div>
            {loading ? <CircularProgress style={{width:"10%", height:"15%", margin:"10% 35% 10% 40%", color:"#ff7779"}} /> :
            
            <div className="adventures__container">
            {error && <h2 style={{color:"red"}}>{error}</h2>}
            {adventure?.map(experience => (
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

export default Adventures
