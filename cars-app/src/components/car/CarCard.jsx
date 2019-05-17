import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = (props) => {
  return (
    <div className="box">
      <Link to={`/car/${props._id}`}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={props.imageUrl} width='50px'/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <article>
                <h3>{props.name}</h3> <br />
                <p>Rating:   {props.rank.rating}</p>
                <p>Users Rating:   {props.review}</p>
              </article>
            </div>
          </div>
        </article>
        </Link>
      </div>
  )    
}

export default CarCard;