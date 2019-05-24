import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './tablecars.css'

class TableCars extends Component {
  constructor(props) {
    super(props)
  }

  clickCar = (carInfo) => {
    this.props.setCarInfo('teste', carInfo)
  }
  
  render () {  
    return (
      <div class="card mb-3">
        {
          this.props.carsList.map((element,idx) =>{
            return (
              <div key={idx} class="row no-gutters row-car">
                <div class="col-md-4">
                  <img src={element.imageUrl} className="card-img" alt="photo" />
                </div>
                <div class="col-md-8">
                  <div class="car-adj">
                    <h4 class="card-title">{element.model}</h4>
                    <p><b>Depreciation:</b> -{element.rank.depreciation}%</p> 
                    <p><b>Transmission:</b> {element.transmission}</p> 
                    <p><b>Year:</b> {element.rank.year}</p> 
                    <p><b>Price:</b> R$ {element.rank.price},00</p> 
                    {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    <Link to={{pathname:`/carpage/${element._id}`, state: element}} carInfo={this.props}><button onClick={this.clickCar} carInfo={this.props} type="button" class="btn btn-secondary btn-desk btn-row-car">More info</button></Link>
                  </div>
              </div>
              </div>

            )
          })    
        }
      </div>
      );    
  }
}

export default TableCars;