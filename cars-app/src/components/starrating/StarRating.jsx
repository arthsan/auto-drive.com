import React from 'react';

import './starrating.css'

// https://codepen.io/jexordexan/pen/yyYEJa

const StarRating = (props) => {
  return ( 
    <div>   
    <div class="cont">
        <div class="title">
          <h1>stars<span>.css</span></h1>
        </div>
      <div class="stars">
        <form action="">
            <input class="star star-5" id="star-5" type="radio" name="star"/>
            <label class="star star-5" for="star-5"></label>
            <input class="star star-4" id="star-4" type="radio" name="star"/>
            <label class="star star-4" for="star-4"></label>
            <input class="star star-3" id="star-3" type="radio" name="star"/>
            <label class="star star-3" for="star-3"></label>
            <input class="star star-2" id="star-2" type="radio" name="star"/>
            <label class="star star-2" for="star-2"></label>
            <input class="star star-1" id="star-1" type="radio" name="star"/>
            <label class="star star-1" for="star-1"></label>
        </form>
      </div>
      <p>click the stars</p>
    </div>
    <div className="cont">
      <div className="stars">
      <form action="">
        <input className="star star-5" id="star-5-2" type="radio" name="star"/>
        <label className="star star-5" for="star-5-2"></label>
        <input className="star star-4" id="star-4-2" type="radio" name="star"/>
        <label className="star star-4" for="star-4-2"></label>
        <input className="star star-3" id="star-3-2" type="radio" name="star"/>
        <label className="star star-3" for="star-3-2"></label>
        <input className="star star-2" id="star-2-2" type="radio" name="star"/>
        <label className="star star-2" for="star-2-2"></label>
        <input className="star star-1" id="star-1-2" type="radio" name="star"/>
        <label className="star star-1" for="star-1-2"></label>
        <div className="rev-box">
          <textarea className="review" col="30" name="review"></textarea>
          <label className="review" for="review">Breif Review</label>
        </div>
      </form>
      </div>
    </div>
    </div>
  )
}

export default StarRating;