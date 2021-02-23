import React from 'react'
import "./Home.css"
import Banner from "./Banner"
import Card from './Card'
function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card src="https://media.cntraveler.com/photos/5b97ea9959ff057868b4ea22/master/pass/The-Peninsula-Bangkok_2018_The-Peninsula-Bangkok_The-Pool-11.jpg"
                      title="abcd"
                      description="acfdgfv"
                      price="Rs. 4555"
                />
                <Card src="https://media.cntraveler.com/photos/5b97ea9959ff057868b4ea22/master/pass/The-Peninsula-Bangkok_2018_The-Peninsula-Bangkok_The-Pool-11.jpg"
                      title="abcd"
                      description="acfdgfv"
                      price="Rs. 4555"
                />
                <Card src="https://media.cntraveler.com/photos/5b97ea9959ff057868b4ea22/master/pass/The-Peninsula-Bangkok_2018_The-Peninsula-Bangkok_The-Pool-11.jpg"
                      title="abcd"
                      description="acfdgfv"
                      price="Rs. 4555"
                />
            </div>
            <div className="home__section">
            <Card src="https://media.cntraveler.com/photos/5b97ea9959ff057868b4ea22/master/pass/The-Peninsula-Bangkok_2018_The-Peninsula-Bangkok_The-Pool-11.jpg"
                      title="abcd"
                      description="acfdgfv"
                      price="Rs. 4555"
                />
                <Card src="https://media.cntraveler.com/photos/5b97ea9959ff057868b4ea22/master/pass/The-Peninsula-Bangkok_2018_The-Peninsula-Bangkok_The-Pool-11.jpg"
                      title="abcd"
                      description="acfdgfv"
                      price="Rs. 4555"
                />
                <Card src="https://media.cntraveler.com/photos/5b97ea9959ff057868b4ea22/master/pass/The-Peninsula-Bangkok_2018_The-Peninsula-Bangkok_The-Pool-11.jpg"
                      title="abcd"
                      description="acfdgfv"
                      price="Rs. 4555"
                />
            </div>
        </div>
    )
}

export default Home
