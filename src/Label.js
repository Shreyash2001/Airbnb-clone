import React from 'react'
import "./Label.css"

function Label({isNew, isRecommended}) {
    return (
        <div>
        {isNew &&
            <div className="label">
                <span>New</span>
            </div>
        }
        {isRecommended && 
            <div className="label__recommended">
                <span>Recommended</span>
            </div>
        }
        
        </div>
    )
}

export default Label
