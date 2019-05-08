import React from 'react'

const CardImage = (props) =>{

  return(
    <>
      <div className="card">
          <img src = {props.image} width="200" height="200"/>
      </div>
    </>
  );

}

export default CardImage
