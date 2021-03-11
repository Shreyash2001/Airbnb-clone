import React from 'react'
import "./Experiences.css"
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { Button } from '@material-ui/core';

function Experiences() {
    const scrollOnClickRight = () => {
        sideScroll(document.getElementById("d"),'right',5,600,10); 
    }
    const scrollOnClickLeft = () => { 
        sideScroll(document.getElementById("d"),'left',5,600,10);
    }

    
    function sideScroll(element,direction,speed,distance,step){
       var scrollAmount = 0;
        var slideTimer = setInterval(function(){
            if(direction === 'left'){
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if(scrollAmount >= distance){
                window.clearInterval(slideTimer);
            }
        }, speed);
    }
    
    return (
        <div className="experiences">
       
            <div>
            <h1 style={{padding:"10px 40px 0px 40px", fontSize:"35px", color:"#222222"}}>New this Week</h1>
                <div className="experiences__rightArrow" onClick={scrollOnClickRight}>
                    <ArrowForwardIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
                </div>
            </div>
            <div>
                <div className="experiences__leftArrow" onClick={scrollOnClickLeft}>
                    <ArrowBackIosRoundedIcon  style={{color:"#484848", marginLeft:"3px", marginTop:"2px"}} />
                </div>
            </div>
            <div id="d" className="experiences__container">
            <div className="experiences__containerImages">
                <div className="experiences__containerImagesImage1">
                <div className="experiences__containerImagesImage1Info">
                    <p>Collection</p>
                    <h2>Experience the world from home</h2>
                    <Button>Show all</Button>
                </div>
                </div>
            </div>
            <div className="experiences__containerImages">
                <div className="experiences__containerImagesImage2">
                <div className="experiences__containerImagesImage1Info">
                    <p>Collection</p>
                    <h2>Most popular around the world</h2>
                    <Button>Show all</Button>
                </div>
                </div>
            </div>
            <div className="experiences__containerImages">
                <div className="experiences__containerImagesImage3">
                <div className="experiences__containerImagesImage1Info">
                    <p>Collection</p>
                    <h2>Great for team building</h2>
                    <Button>Show all</Button>
                </div>
                </div>
            </div>
            <div className="experiences__containerImages">
                <div className="experiences__containerImagesImage4">
                <div className="experiences__containerImagesImage1Info">
                    <p>Collection</p>
                    <h2>Fun for the family & friends</h2>
                    <Button>Show all</Button>
                </div>
                </div>
            </div>
            <div className="experiences__containerImages">
                <div className="experiences__containerImagesImage5">
                <div className="experiences__containerImagesImage1Info">
                    <p>Collection</p>
                    <h2>Experiences for All to have fun</h2>
                    <Button>Show all</Button>
                </div>
                </div>
            </div>
            </div>

            <div className="experiences__filters">
            <Button variant="outlined">filters</Button>
            <Button variant="outlined">Themes</Button>
            </div>
        </div>
    )
}

export default Experiences
