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
      if (quiz.q2 && element.rank.year >= 2018) {
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
      if(quiz.q4 === 'Work') {
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
    console.log(arr)
    const filter1 = this.filterQ1(arr, quiz);
    console.log(filter1)
    const filter2 = this.filterQ2(this.filterQ1(filter1,quiz), quiz);
    console.log(filter2)
    const filter3 = this.filterQ3(this.filterQ2(filter2,quiz), quiz);
    console.log(filter3)
    const filter4 = this.filterQ4(this.filterQ3(filter3,quiz), quiz);
    console.log(filter4)
    const filter5 = this.filterQ5(this.filterQ4(filter4,quiz), quiz);
    console.log(filter5)
    const filter6 = this.filterQ6(this.filterQ5(filter5,quiz), quiz);
    console.log(filter6)
    const filter7 = this.filterQ7(this.filterQ6(filter6,quiz), quiz);
    console.log(filter7)
    const filter8 = this.filterQ8(this.filterQ7(filter7,quiz), quiz);
    console.log(filter8)
    const filter9 = this.filterQ9(this.filterQ8(filter8,quiz), quiz);
    console.log(filter9)
    return filter9;
  }

  componentDidMount() {
    this.service.getAllCars()
    .then(response => {
      this.service.getQuiz(this.props.loggedInUser._id)
        .then((quiz) => {
          const cars = this.masterFilter(response, quiz)
          this.setState({ cars: cars, quiz: quiz }, () => {
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