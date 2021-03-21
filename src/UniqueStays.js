import { CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hostedPlaceUniqueStays } from './actions/hostActions'
import Card from './Card'
import "./UniqueStays.css"

function UniqueStays() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(hostedPlaceUniqueStays())
    }, [dispatch])

    const {uniqueStays, loading, error} = useSelector(state => state.uniquePlacesResult)

    return (
        <div>
            <div className="uniqueStays">
            <div style={{paddingLeft:"80px"}}>
            <h2 style={{fontSize:"33px", fontWeight:"400", marginBottom:"20px"}}>{uniqueStays?.length} Places</h2>
            </div>
            {loading ? <CircularProgress style={{width:"10%", height:"15%", margin:"10% 35% 10% 40%", color:"#ff7779"}} /> :
            
            <div className="uniqueStays__container">
            {error && <h2 style={{color:"red"}}>{error}</h2>}
            {uniqueStays?.map(places => (
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

export default UniqueStays
