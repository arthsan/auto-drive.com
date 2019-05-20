import React from 'react';
import { Link } from 'react-router-dom';

import './tablecars.css'

const TableCars = (props) => {
  return (    

    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558375583/cars/civic.jpg.jpg" className="card-img" alt="porshe" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <br/>
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558374130/cars/cruze.png.png" className="card-img" alt="porshe" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <br/>
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558373970/cars/jetta.png.png" className="card-img" alt="porshe" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>

  )    
}

export default TableCars;