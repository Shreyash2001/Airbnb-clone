import React, {useEffect} from 'react'
import "./ExperienceInPerson.css"
import ExperienceContainedCard from './ExperienceContainedCard'
import { useDispatch, useSelector } from 'react-redux'
import { getInPersonExperience, getTopRatedExperience } from './actions/experienceActions'
import { CircularProgress } from '@material-ui/core'


function ExperienceInPerson() {

    const {inPersonExperience, loading, error} = useSelector(state => state.getInPersonExperience)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getInPersonExperience())
    }, [dispatch])

    return (
        <div>
            <div className="experienceInPerson">
            <div style={{paddingLeft:"80px"}}>
            <h2 style={{fontSize:"33px", fontWeight:"400"}}>{inPersonExperience?.length} experiences</h2>
            </div>
            {loading ? <CircularProgress style={{width:"10%", height:"15%", margin:"10% 35% 10% 40%", color:"#ff7779"}} /> :
            
            <div className="experienceInPerson__container">
            {error && <h2 style={{color:"red"}}>{error}</h2>}
            {inPersonExperience?.map(experience => (
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

export default ExperienceInPerson
