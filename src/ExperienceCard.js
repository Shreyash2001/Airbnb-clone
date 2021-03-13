import React from 'react'
import "./ExperienceCard.css"

function ExperienceCard({images, title, price, country, theme, typeOfExperience}) {
    return (
        <div className="experienceCard">
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
                  <span><strong>From ₹{price}</strong>/person</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard
