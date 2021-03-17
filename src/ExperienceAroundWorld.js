import React, { useEffect } from 'react'
import "./ExperienceAroundWorld.css"
import ExperienceContainedCard from './ExperienceContainedCard'
import { useDispatch, useSelector } from 'react-redux'
import { getTopRatedExperience } from './actions/experienceActions'
import { CircularProgress } from '@material-ui/core'

function ExperienceAroundWorld() {

    const {topRatedExperience, loading, error} = useSelector(state => state.getTopRated)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopRatedExperience())
    }, [dispatch])


    return (
        <div className="experienceAroundWorld">
            <div className="experienceAroundWorld__image">
                <div>
                    <h1>Most popular around the world</h1>
                </div>
            </div>
            <div style={{paddingLeft:"80px", paddingTop:"50px"}}>
            <h2 style={{fontSize:"33px", fontWeight:"400"}}>Top Sellers</h2>
            </div>
            {loading ? <CircularProgress style={{width:"10%", height:"15%", margin:"10% 35% 10% 40%", color:"#ff7779"}} /> :
            <div className="experienceAroundWorld__container">
            {topRatedExperience?.map(topRated => (
                <ExperienceContainedCard
                  key={topRated._id}
                  id={topRated._id}
                  image={topRated.image[0]}
                  location={topRated.location}
                  theme={topRated.theme}
                  typeOfExperience={topRated.typeOfExperience}
                  title={topRated.title}
                  price={topRated.price}
                  value={topRated.rating}
                  />
            ))}
            </div>
            }
        </div>
    )
}

export default ExperienceAroundWorld
