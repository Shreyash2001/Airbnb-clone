import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import "./HostOnboarding.css"

function HostOnboarding() {
    const history = useHistory()
    return (
        <div className="hostOnboarding">
            <div className="hostOnBoarding__info">
                <h1>Welcome! Your hosting journey starts here.</h1>
                <p>Airbnb Experiences are small-group activities led by passionate local hosts.</p>
                <p>All experience ideas are reviewed by a small team at Airbnb. If your idea meets our quality standards, you’ll get to add dates and start hosting.</p>
                <p>We’re excited to learn more about you, and what you’d like to share with the world.</p>
                <Button onClick={() => history.push("/experiences/experience-type")}>Continue</Button>
            </div>
            <div className="hostOnboarding__image">
                <img src="https://res.cloudinary.com/cqn/image/upload/v1615102929/nux-large.f54b9800_pgteie.png" alt="" />
            </div>
        </div>
    )
}

export default HostOnboarding
