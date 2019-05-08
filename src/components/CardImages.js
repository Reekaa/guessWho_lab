import React from 'react';
import CardImage from './CardImage.js';
import './CardImages.css';

const CardImages = (props) => {
    const imageList = props.people.map((person, index)=>{
      return <CardImage image ={person.image} key ={index} />
    })

    return(
      <div className = "cards">
      {imageList}
      </div>
    );

}

export default CardImages
