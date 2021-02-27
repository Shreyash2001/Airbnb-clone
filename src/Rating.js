import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
function Rating({ value, text, color }) {
    return (
        <div className="rating">
            <span>
                {value >=1 ? <StarIcon style={{color}} /> : value>=0.5 ? <StarHalfIcon style={{color}} /> : <StarOutlineIcon style={{color}} />}
            </span>
            <span>
                {value >=2 ? <StarIcon style={{color}} /> : value>=1.5 ? <StarHalfIcon style={{color}} /> : <StarOutlineIcon style={{color}} />}
            </span>
            <span>
                {value >=3 ? <StarIcon style={{color}} /> : value>=2.5 ? <StarHalfIcon style={{color}} /> : <StarOutlineIcon style={{color}} />}
            </span>
            <span>
                {value >=4 ? <StarIcon style={{color}} /> : value>=3.5 ? <StarHalfIcon style={{color}} /> : <StarOutlineIcon style={{color}} />}
            </span>
            <span>
                {value >=5 ? <StarIcon style={{color}} /> : value>=4.5 ? <StarHalfIcon style={{color}} /> : <StarOutlineIcon style={{color}} />}
            </span>
            <span style={{padding:"10px", marginTop:"2px"}}>{text && text}</span>
        </div>
    )
}
Rating.defaultProps = {
    color:"rgb(90 195 183)"
}

export default Rating
