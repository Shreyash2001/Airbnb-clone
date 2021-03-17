import React from 'react'
import { useHistory } from 'react-router'
import "./ExperienceCard.css"
import Rating from './Rating'

function ExperienceCard({images, title, price, country, theme, typeOfExperience, id, value}) {
    const history = useHistory()
    return (
        <div className="experienceCard" onClick={() => history.push(`/experiences/online/${id}`)} >
            <div>
            <div>
                <div style={{backgroundImage: `url(${images})`,
                backgroundSize:"cover",  
                height:"300px", 
                width:"100%", 
                backgroundRepeat:"no-repeat", 
                backgroundPosition:"center", 
                borderRadius:"12px",
                marginBottom:"8px",
                border: "1px solid lightgray"
                }}></div>
            </div>
                <div style={{display:"flex", alignItems:"center"}}>
                    <p>{country}</p>
                    <div style={{marginLeft:"4px", marginRight:"4px"}}>·</div>
                    <p>{theme}</p>
                    <div style={{marginLeft:"4px", marginRight:"4px"}}>·</div>
                    <p>{typeOfExperience}</p>
                </div>
                <div className="experienceCard__info">
                <div>
                    <h3>{title}</h3>
                </div>
                <div className="experienceCard__infoPrice">
                  <span><strong>From ₹{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(price)}</strong>/person</span>
                </div>
                <div>
                    <Rating value={value} />
                </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard
