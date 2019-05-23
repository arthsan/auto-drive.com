import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import service from '../../api/service'

class BestCar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: [],
      quiz: {},
      result: '',
    }
    this.service = service;
  }
  
  filterQ1(arr, quiz){
    return arr.filter((element) => element.rank.price <= quiz.q1)
  }

  filterQ2(arr, quiz){
    return arr.filter((element) => {
      if (quiz.q2 && !element.used) {
        console.log(element)
        return element;
      } 
      if (!quiz.q2) {
        return element;
      }
    })
  }

  filterQ3(arr, quiz){
    return arr.filter((element) => {
      let costMonth = element.rank.ipva/12 + element.rank.maintenance/12 + element.rank.insurance/12;
      return costMonth <= quiz.q3})
  }

  filterQ4(arr, quiz){
    return arr.filter((element) => {
      if(quiz.q4 === 'Entertainment' && element.accessories.entertainment.steeringMultiFunction && element.accessories.entertainment.bluetooth && element.accessories.comfort.heightSeat && element.accessories.comfort.leatherSeat && element.accessories.comfort.alloyWheel &&
    element.accessories.comfort.headlightSensor &&
    element.rank.horsePower > 120) {
        return element;
      }
      if(quiz.q4 === 'Work' && element.accessories.comfort.airCondit && element.rank.trunk > 400) {
        return element;
      }
      if(quiz.q4 === 'Security' && element.accessories.security.airBag && element.accessories.security.backupCam && element.accessories.security.fogLights) {
        return element;
      }
    })
  }

  filterQ5(arr, quiz){
    return arr.filter((element) => {
      if(quiz.q5 && element.rank.fuelCost >= 9 && element.rank.speed > 180 && element.accessories.security.abs && element.accessories.security.airBag && element.rank.trunk > 345) {
        return element;
      }
      if(!quiz.q5) {
        return element;
      }
    })
  }

  filterQ6(arr, quiz){
    return arr.filter((element) => {
      if(quiz.q6 && element.accessories.entertainment.radio && element.accessories.security.alarm) {
        return element;
      }
      if(!quiz.q6) {
        return element;
      }
    })
  }

  filterQ7(arr, quiz){
    return arr.filter((element) => {
      if(quiz.q7 && element.rank.fuelCost >= 10 && element.rank.speed > 200 && element.accessories.security.abs && element.accessories.security.airBag && element.rank.trunk > 400) {
        return element;
      }
      if(!quiz.q7) {
        return element;
      }
    })
  }
  
  filterQ8(arr, quiz){
    return arr.filter((element) => {
      if(quiz.q8 && element.category === 'offroad'){
        return element;
      }
      if(!quiz.q8) {
        return element;
      }
    })
  }

  filterQ9(arr, quiz){
    return arr.filter((element) => {
      if(quiz.q9 >= 60 && element.accessories.security.abs && element.transmission === 'Automatic' && element.accessories.security.backupCam && element.accessories.security.airBag && element.accessories.comfort.heightSeat) {
        return element;
      }
      if(quiz.q9 < 60) {
        return element;
      }
    })
  }

  masterFilter(arr, quiz) {
    this.filterQ1(arr, quiz);
    // this.filterQ2(this.filterQ1(this.state.cars,this.state.quiz), this.state.quiz);
    // this.filterQ3(this.filterQ2(this.state.cars,this.state.quiz), this.state.quiz);
    // this.filterQ4(this.filterQ3(this.state.cars,this.state.quiz), this.state.quiz);
    // this.filterQ5(this.filterQ4(this.state.cars,this.state.quiz), this.state.quiz);
    // this.filterQ6(this.filterQ5(this.state.cars,this.state.quiz), this.state.quiz);
    // this.filterQ7(this.filterQ6(this.state.cars,this.state.quiz), this.state.quiz);
    // this.filterQ8(this.filterQ7(this.state.cars,this.state.quiz), this.state.quiz);
    // this.filterQ9(this.filterQ8(this.state.cars,this.state.quiz), this.state.quiz);
  }

  componentDidMount() {
    this.service.getAllCars(this.state)
    .then(response => {
      this.service.getQuiz(this.props.loggedInUser._id)
        .then((quiz) => {
          const cars = this.filterQ1(response, quiz)
          this.setState({ cars: cars, quiz: quiz }, () => {
            console.log(this.state);
          })
        })
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
                      <img src={element.imageUrl} className="card-img" alt="photo" />
                    </div>
                    <div class="col-md-8">
                      <div class="car-adj">
                        <h4 class="card-title">{element.model}</h4>
                        <p>Depreciation: -{element.rank.depreciation}%</p> 
                        <p>Transmission: {element.transmission}</p> 
                        <p>Year: {element.rank.year}</p> 
                        <p>Price: R$ {element.rank.price},00</p> 
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

export default BestCar;