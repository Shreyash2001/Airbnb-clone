import { CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hostedPlaceCottages } from './actions/hostActions'
import Card from './Card'
import "./Cottages.css"

function Cottages() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(hostedPlaceCottages())
    }, [dispatch])

    const {cottagesPlaces, loading, error} = useSelector(state => state.cottagesResult)

    return (
        <div>
            <div className="cottages">
            <div style={{paddingLeft:"80px"}}>
            <h2 style={{fontSize:"33px", fontWeight:"400", marginBottom:"20px"}}>{cottagesPlaces?.length} Places</h2>
            </div>
            {loading ? <CircularProgress style={{width:"10%", height:"15%", margin:"10% 35% 10% 40%", color:"#ff7779"}} /> :
            
            <div className="cottages__container">
            {error && <h2 style={{color:"red"}}>{error}</h2>}
            {cottagesPlaces?.map(places => (
                <Card 
                  key={places._id} 
                  id={places._id}
                  images={places.images[0]} 
                  title={places.title} 
                  season={places.season}
                  selectedValue={places.selectedValue}
                  price={places.price}
                  country={places.country}
                  value={places.rating} 
                  />
        
            ))}
            </div>
            }
        </div>
        </div>
    )
}

export default Cottages
