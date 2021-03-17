import React from 'react'
import { Link } from 'react-router-dom'
import "./ExperienceContainedCard.css"
import Rating from './Rating'

function ExperienceContainedCard({image, id, value, theme, typeOfExperience, price, location, title}) {

    return (
        <div className="experienceContainedCard">
            <div>
            <div>
            <Link to={`/experiences/online/${id}`}> <div className="experienceContainedCard__container">
                <div style={{padding:"20px"}}>
                   <div>
                   <div style={{backgroundImage: `url(${image})`,
                backgroundSize:"cover",  
                height:"300px", 
                minWidth:"400px", 
                backgroundRepeat:"no-repeat", 
                backgroundPosition:"center", 
                borderRadius:"12px",
                marginBottom:"8px",
                border: "1px solid lightgray",
                }}></div>
                   </div>
                <div style={{display:"flex", alignItems:"center", marginBottom:"10px"}}>
                   <p>{location}</p> 
                   <div style={{margin:"0 8px 0 8px"}}>·</div>
                   <p>{theme}</p>
                   <div style={{margin:"0 8px 0 8px"}}>·</div>
                   <p>{typeOfExperience}</p> 
                </div>

                   <h2 style={{marginBottom:"10px"}}>{title}</h2> 
                   <div className="experienceContainedCard__price">
                  <span><strong>From ₹{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price)}</strong>/person</span>
                </div>
                    
                   <Rating value={value} />
                </div>
                
                </div>
                </Link>
                </div>
                
            </div>
            
        </div>
    )
}

export default ExperienceContainedCard
