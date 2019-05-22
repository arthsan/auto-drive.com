import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import service from '../../api/service'

class BestCar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: [],
    }
    this.service = service;
  }

  filterCars(arr){
   return arr.filter((element) => element.rank.price <= 70000)
  }

  componentDidMount() {
    this.service.getAllCars()
    .then(response => {
      console.log('@@@@@@@@@',response)
      const cars = this.filterCars(response)
      console.log(cars)
      this.setState({ cars: cars })
    })
  }
  

  render () {  
    return (
      <div class="card mb-3">
        {
          this.state.cars.map((element,idx) =>{
            return (
              <div key={idx} class="row no-gutters row-car">
                <div class="col-md-4">
                  <img src={element.imageUrl} className="card-img " alt="photo" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h4 class="card-title">{element.model}</h4>
                    <p>Rating: {element.rank.rating}</p> 
                    <p>Users Rating: {element.review}</p> 
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <Link to={{pathname:`/carpage/${element._id}`, state: element}} carInfo={this.props}><button onClick={this.clickCar} carInfo={this.props} type="button" class="btn btn-secondary">More info</button></Link>
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

export default BestCar;