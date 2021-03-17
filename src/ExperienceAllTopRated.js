import React, {useEffect} from 'react'
import "./ExperienceAllTopRated.css"
import ExperienceContainedCard from './ExperienceContainedCard'
import { useDispatch, useSelector } from 'react-redux'
import { getTopRatedExperience } from './actions/experienceActions'
import { CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'

function ExperienceAllTopRated() {

    const {topRatedExperience, loading, error} = useSelector(state => state.getTopRated)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopRatedExperience())
    }, [dispatch])

    return (
        <div>
            <div className="experienceAllTopRated">
            <div className="experienceAllTopRated__image">
            <div style={{paddingLeft:"80px"}}>
               <Link to="/"><img style={{width:"140px", paddingBottom:"80px", paddingTop:"10px"}} src="https://www.heroes.liftoff.io/wp-content/uploads/2018/01/airbnb-logo-white.png" alt="logo" /></Link>
            </div>
                <div className="experienceAllTopRated__imageSideInfo">
                    <h1>Most popular around the world</h1>
                </div>
            </div>
            <div style={{paddingLeft:"80px", paddingTop:"50px"}}>
            <h2 style={{fontSize:"33px", fontWeight:"400"}}>Top sellers</h2>
            </div>
            {loading ? <CircularProgress style={{width:"10%", height:"15%", margin:"10% 35% 10% 40%", color:"#ff7779"}} /> :
            
            <div className="experienceAllTopRated__container">
            {error && <h2 style={{color:"red"}}>{error}</h2>}
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
        </div>
    )
}

export default ExperienceAllTopRated
