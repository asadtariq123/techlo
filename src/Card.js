import React from 'react'

const Card = (props) => {
    return (
        <div className="col-md-4 col-12 col-sm-6  mx-auto">
            <div className="card" >
  <img className="card-img-top" id="imgsr" src={props.imgsrc}  alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
        </div>
    )
}

export default Card
