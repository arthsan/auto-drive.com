import React from 'react';
import './carrousel.css'
import { Link } from 'react-router-dom';


const Carrousel = (props) => {
  return (
    <div className="carousel slide">
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">

            <div className="carousel-item active">
                <img src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558564222/cars/amg_ku8zsa.jpg" className="d-block w-100 img-one" alt="amg" />
                <div class="carousel-caption">
                  <h1>Searching for a new car?</h1>
                  <h4 class="">We can help you!</h4>
                  <Link to='/login'><a class="btn-desk btn btn-dark add-car btn-lg" href="#">Simulation</a></Link>
                </div>
            </div>

            <div className="carousel-item">
                <img src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558564444/cars/civic-carrousel_tofwsn.jpg" className="d-block w-100" alt="civic" />
                <div class="carousel-caption">
                  <h1>Used cars?</h1>
                  <h4 class="">We have the choice for you</h4>
                  <Link to='/login'></Link><a class="btn-desk btn btn-dark add-car btn-lg" href="#">Sign up today</a>
                </div>
            </div>

            <div className="carousel-item">
                <img src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558564567/cars/kickscarousel_iaxdrw.jpg" className="d-block w-100" alt="kicks" />
                <div class="carousel-caption">
                  <h1>IPVA free</h1>
                  <h4 class="">Buying a car from our database,<br/> your IPVA in the first year is free</h4>
                  <Link to='/login'><a class="btn-desk btn btn-dark add-car btn-lg" href="#">Sign up today</a></Link>
                </div>
            </div>

          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
          </a>
      </div>
      </div>
  )    
}

export default Carrousel;