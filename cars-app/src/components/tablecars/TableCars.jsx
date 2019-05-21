import React from 'react';
import { Link } from 'react-router-dom';

import './tablecars.css'
import StarRating from '../starrating/StarRating';

const TableCars = (props) => {
  return (
     <div class="card mb-3">
       <div class="row no-gutters row-car">
         <div class="col-md-4 ">
           <img src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558375583/cars/civic.jpg.jpg" className="card-img" alt="porshe" />
         </div>
         <div class="col-md-8">
           <div class="card-body">
             <h4 class="card-title">Card title</h4>
              {/* <h4>{props.name}</h4> <br /> 
              <p>Rating: {props.rank.rating}</p> 
              <p>Users Rating: {props.review}</p>  */}
             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             <Link to='/carpage'><button type="button" class="btn btn-secondary">More info</button></Link>
           </div>
         </div>
       </div>
       <br/>
       <div class="row no-gutters row-car">
         <div class="col-md-4">
           <img src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558374130/cars/cruze.png.png" className="card-img" alt="porshe" />
         </div>
         <div class="col-md-8">
           <div class="card-body">
             <h4 class="card-title">Card title</h4>
             {/* <h4>{props.name}</h4> <br /> */}
             {/* <p>Rating: {props.rank.rating}</p> */}
             {/* <p>Users Rating:   {props.review}</p> */}
             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             <Link to='/carpage'><button type="button" class="btn btn-secondary">More info</button></Link>
           </div>
         </div>
       </div>
       <br/>
       <div class="row no-gutters row-car">
         <div class="col-md-4">
           <img src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558373970/cars/jetta.png.png" className="card-img" alt="porshe" />
         </div>
         <div class="col-md-8">
           <div class="card-body">
             <h4 class="card-title">Card title</h4>
             {/* <h4>{props.name}</h4> <br /> */}
             {/* <p>Rating: {props.rank.rating}</p> */}
             {/* <p>Users Rating: {props.review}</p> */}
             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             <Link to='/carpage'><button type="button" class="btn btn-secondary">More info</button></Link>
           </div>
         </div>
       </div>
     </div>

  )    
}

export default TableCars;