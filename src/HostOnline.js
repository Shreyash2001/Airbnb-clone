import { Button } from '@material-ui/core'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./HostOnline.css"

function HostOnline() {
    const history = useHistory()

    return (
        <div className="hostOnline">
            <Link to="/"> <img className="hostOnline__logo" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="header logo" /></Link>
            <div style={{marginBottom:"100px"}}></div>
            <div className="hostOnline__headings">
            
                <h4>AIRBNB EXPERIENCES</h4>
                <h2>Host an online experience</h2>
                <p>Join a community of hosts bringing the world together in a whole new way.</p>
                <Button onClick={() => history.push("/experiences/host-onboarding")}>Get Started</Button>
            </div>
            <div className="hostOnline__imageContainer">
            <div className="hostOnline__image">
            </div>
            </div>
            <div className="hostOnline__text">
                <p>Airbnb Experiences are engaging activities designed by locals that go beyond the typical tour or class. And now you can host them for anyone, from anywhere.</p>
            </div>
            <div className="hostOnline__basicInfoContainer">
            <div className="hostOnline__basicInfo">
            <div>
                <img style={{height:"48px", width:"48px"}} src="https://a0.muscache.com/pictures/b0fe7d1b-2c8b-48ba-9310-5cbeb3f25a32.jpg" alt="home" />
                <div className="hostOnline__basicInfoDetails">
                    <h3>Host from home</h3>
                    <p>Share your expertise and a window to your world.</p>
                </div>
            </div>
            <div>
                <img style={{height:"48px", width:"48px"}} src="https://a0.muscache.com/pictures/eba31c9e-9c99-4a7e-bb58-bc1dd3c58dd5.jpg" alt="guests" />
                <div className="hostOnline__basicInfoDetails">
                    <h3>Meet global guests</h3>
                    <p>Make the world feel a little smaller and a lot friendlier.</p>
                </div>
            </div>
            <div>
                <img style={{height:"48px", width:"48px"}} src="https://a0.muscache.com/pictures/70888c58-8a67-4b03-9b07-3beed0f97275.jpg" alt="guests" />
                <div className="hostOnline__basicInfoDetails">
                    <h3>Build a business</h3>
                    <p>Earn money doing something you love with support from Airbnb.</p>
                </div>
            </div>
            </div>
            </div>
            <div style={{marginTop:"100px", marginBottom:"80px"}}>
                <img style={{width:"100%"}} src="https://a0.muscache.com/pictures/0db2bf2e-2135-4363-b01d-e8baa34b5c04.jpg" alt="" />
            </div>
            <div className="hostOnline__headings">
                <h2 style={{marginBottom:"90px"}}>How it works?</h2>
                <p style={{textAlign:"center", fontSize:"30px", fontWeight:"400", color:"#484848", maxWidth:"700px", marginLeft:"auto", marginRight:"auto"}}>If you’re already an experience host, welcome back! To start hosting online, you’ll need to create an entirely new experience and submit it for review following the process below.</p>
            </div>

            <div className="hostOnline__howItWorksMainContainer">
                <div className="hostOnline__howItWorksContainer">
                    <div className="hostOnline__howItWorks">
                        <img src="https://a0.muscache.com/pictures/54019d2c-f00e-4d2b-9eb2-7b738e6b9eb8.jpg" alt="" />
                        </div>
                        <div className="hostOnline__howItWorksInfo">
                            <h2>Design your experience</h2>
                            <p>All experiences start with our quality standards – expertise, access, and connection. But also think about how to engage with guests online and minimise the supplies they might need to participate. When you have an idea, start the submission process.</p>
                        </div>
                </div>
                <div className="hostOnline__howItWorksContainer">
                    <div className="hostOnline__howItWorks">
                        <img src="https://a0.muscache.com/pictures/2130d5de-c676-41bf-88bf-ab4b8a1c4d74.jpg" alt="" />
                        </div>
                        <div className="hostOnline__howItWorksInfo">
                            <h2>Share your idea</h2>
                            <p>Next, you'll need to describe your activity for both the application and your future experience page. We recommend sharing the value of what you’re offering in detail, starting with a lower price until you have some reviews, and setting the length to 90 minutes or less.</p>
                        </div>
                </div>
                <div className="hostOnline__howItWorksContainer">
                    <div className="hostOnline__howItWorks">
                        <img src="https://a0.muscache.com/pictures/ec94d108-9dcc-49c3-91f3-921ba1826e54.jpg" alt="" />
                        </div>
                        <div className="hostOnline__howItWorksInfo">
                            <h2>Set up and start hosting</h2>
                            <p>While you wait, you can choose a location that represents you and your activity and start planning for your camera setup, lighting and sound. You can also start getting to know the Zoom conference platform. Don't worry – before you start hosting, we'll share lots of resources to set you up for success.</p>
                        </div>
                </div>
            </div>
            <div className="hostOnline__startWorkButton">
                <Button onClick={() => history.push("/experiences/host-onboarding")}>Start Creating your experience</Button>
            </div>
        </div>
    )
}

export default HostOnline
