import React from 'react';
import './carrousel.css'

const Carrousel = (props) => {
  return (
    <div className="bd-example car">
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
          <div className="carousel-item active">
              <img src="https://pontoon-e.com/wp-content/uploads/2018/05/pexels-photo-241316-1920x1080.jpeg" className="d-block w-100" alt="porshe" />
              <div className="carousel-caption d-none d-md-block">
              <h5>We help you to choose your new veichle</h5>
              <p>Have you ever thought driving a Porshe?</p>
              </div>
          </div>
          <div className="carousel-item">
              <img src="https://images.wallpaperscraft.com/image/honda_civic_turbo_sports_car_113816_1920x1080.jpg" className="d-block w-100" alt="lambo" />
              <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
          </div>
          <div className="carousel-item">
              <img src="http://www.hdcarwallpapers.com/download/nissan_kicks_concept-1920x1080.jpg" className="d-block w-100" alt="bugati" />
              <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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