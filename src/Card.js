import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
import Rating from './Rating'
function Card({ src, title, description, price, country, value, id}) {
    return (
        <div className="card">
        <img src={src} alt="" />

           <Link to={`/host/${id}`}> <div className="card__info">
                <p>{country}</p>
                <h2>{title}</h2>
                <h4>{description}{"....."}<Link to="/">read more</Link></h4>
                <h3>₹{price} /night</h3>
                <Rating value={value} />
            </div>
            </Link>
        </div>
    )
}

export default Card
