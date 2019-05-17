import React from 'react';
import './carrousel.css'

const Carrousel = (props) => {
  return (
    <div class="bd-example car">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
          <div class="carousel-item active">
              <img src="https://pontoon-e.com/wp-content/uploads/2018/05/pexels-photo-241316-1920x1080.jpeg" class="d-block w-100" alt="porshe" />
              <div class="carousel-caption d-none d-md-block">
              <h5>We help you to choose your new veichle</h5>
              <p>Have you ever thought driving a Porshe?</p>
              </div>
          </div>
          <div class="carousel-item">
              <img src="https://images.wallpaperscraft.com/image/honda_civic_turbo_sports_car_113816_1920x1080.jpg" class="d-block w-100" alt="lambo" />
              <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
          </div>
          <div class="carousel-item">
              <img src="http://www.hdcarwallpapers.com/download/nissan_kicks_concept-1920x1080.jpg" class="d-block w-100" alt="bugati" />
              <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
          </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
          </a>
      </div>
      </div>
  )    
}

export default Carrousel;