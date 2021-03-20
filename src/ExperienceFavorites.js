import React, {useEffect} from 'react'
import "./ExperienceFavorites.css"
import ExperienceContainedCard from './ExperienceContainedCard'
import { useDispatch, useSelector } from 'react-redux'
import { getTopRatedExperience } from './actions/experienceActions'
import { CircularProgress } from '@material-ui/core'


function ExperienceFavorites() {

    const {saveExperiences, loading, error} = useSelector(state => state.saveExperience)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopRatedExperience())
    }, [dispatch])

    return (
        <div>
            <div className="experienceFavorites">
            <div style={{paddingLeft:"80px"}}>
            <h2 style={{fontSize:"33px", fontWeight:"400"}}>Favorites</h2>
            </div>
            {loading ? <CircularProgress style={{width:"10%", height:"15%", margin:"10% 35% 10% 40%", color:"#ff7779"}} /> :
            
            <div className="experienceFavorites__container">
            {error && <h2 style={{color:"red"}}>{error}</h2>}
            {saveExperiences?.map(experience => (
                <ExperienceContainedCard
                  key={experience.experienceId}
                  id={experience.experienceId}
                  image={experience.image}
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

export default ExperienceFavorites
