import React from 'react'
import pin from "./images/pin.png"

function Cards(props) {
  return (
    <div className='card-container'>
        <div className="image">
            <img className="card-photo" src={props.item.imageUrl} alt="" />
        </div>
        <div className="details">
            <p><img className = "pin" src={pin} alt=""/> {props.item.location} <span><a href={props.item.googleMapsUrl}>View on Google Maps</a></span></p>
            <h1 className='place'>{props.item.title}</h1>
            <h3 className='date'>{props.item.startDate} - {props.item.endDate}</h3>
            <p className="description">{props.item.description}</p>
        </div>
    </div>
  )
}

export default Cards



// Australia
// https://source.unsplash.com/JmuyB_LibRo

// Norway
// https://source.unsplash.com/3PeSjpLVtLg