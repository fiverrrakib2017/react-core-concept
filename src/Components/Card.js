import React from 'react';
import './Card.css'

const Card=(props)=>{
    return(
        <div className="cards">
      <div className="card">
        <img src={props.cardImg} alt="" className="card_img"/>
        <div className="card_info">
          <span className="card_category">{props.carCategory}</span>
          <h3 className="card_title">{props.cardTitle}</h3>
          <a href={props.link} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
    )
}
export default Card;