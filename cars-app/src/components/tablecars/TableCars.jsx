import React from 'react';
import { Link } from 'react-router-dom';
import './tablecars.css'

const TableCars = (props) => {
    return (
       <div class="card mb-3">
         {
              props.carsList.map(e =>{
                return (
         <div class="row no-gutters row-car">
           <div class="col-md-4 ">
             <img src={e.imageUrl} className="card-img" alt="porshe" />
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h4 class="card-title">{e.model}</h4>
                 
                <p>Rating: {e.rank.rating}</p> 
                <p>Users Rating: {e.review}</p> 
               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
               <Link to='/carpage'><button type="button" class="btn btn-secondary">More info</button></Link>
             </div>
           </div>
         </div>

                )
              })    
            }
       </div>
    );    
}

export default TableCars;