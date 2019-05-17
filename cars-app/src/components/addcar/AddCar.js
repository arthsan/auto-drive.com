import React, { Component } from "react";


// import the service file since we need it to send (and get) the data to(from) server
import service from '../../api/service';

class AddCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description:"",
      imageUrl: "",
      model: "",
      brand: "",
      transmission: "",
      category: "",
      rank: {
        rating: "",
        year: "",
        price: "",
        ipva: "",
        insurance: "",
        horsePower: "",
        fuelCost: "",
        speed: "",
        depreciation: "",
        maintenance: "",
        warranty: "",
        trunk: "",
      },
      review: "",
      accessories: {
        security: {
          abs: false,
          parkSensor: false,
          airBag: false,
          fogLights: false,
          backupCam: false,
          alarm: false,
        },
        comfort: {
          airCondit: false,
          heightSeat: false,
          autoPilot: false,
          leatherSeat: false,
          sunRoof: false,
          steeringWheelAdjust: false,
          alloyWheel: false,
          headlightSensor: false,
        },
        entertainment: {
          radio: false,
          usb: false,
          gps: false,
          boardPc: false,
          steeringMultiFunction: false,
          bluetooth: false,
        }
      }
    }
  }
    handleChange = e => {  
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    handleSwitch = e => {  
        const { name, value } = e.target;
        this.setState({ [name]: !value });
    }

    // this method handles just the file upload
    handleFileUpload = e => {
      console.log("The file to be uploaded is: ", e.target.files[0]);

      const uploadData = new FormData();
      // imageUrl => this name has to be the same as in the model since we pass
      // req.body to .create() method when creating a new thing in '/api/things/create' POST route
      uploadData.append("imageUrl", e.target.files[0]);
      
      service.handleUpload(uploadData)
      .then(response => {
          // console.log('response is: ', response);
          // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
          this.setState({ imageUrl: response.secure_url });
      })
        .catch(err => {
          console.log("Error while uploading the file: ", err);
      });
    }

    // this method submits the form
    handleSubmit = e => {
      e.preventDefault();
      
      service.saveNewThing(this.state)
      .then(res => {
          console.log('added: ', res);
          // here you would redirect to some other page 
      })
      .catch(err => {
          console.log("Error while adding the thing: ", err);
      });
    }  
  
    render() {
      return (
        <div>
          <h2>New Car</h2>
          <form onSubmit={e => this.handleSubmit(e)}>
            <ul>
              <li>
                <label>Name</label>
                <input type="text" 
                name="name" 
                value={ this.state.name } 
                onChange={ e => this.handleChange(e)} />
              </li>
              <li>
                <label>Description</label>
                <input
                  type="text" 
                  name="description" 
                  value={ this.state.description } 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li>
                <input 
                  type="file" 
                  onChange={(e) => this.handleFileUpload(e)} /> 
                <button type="submit">Save Car</button>
              </li>
              <li>
                <label>Model</label>
                <input
                  type="text" 
                  name="model" 
                  value={ this.state.model } 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li>
                <label>Brand</label>
                <input
                  type="text" 
                  name="brand" 
                  value={ this.state.brand } 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li>
                <label>Transmission</label>
                <input
                  type="text" 
                  name="transmission" 
                  value={ this.state.transmission } 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li>
                <label>Category</label>
                <input
                  type="text" 
                  name="category" 
                  value={ this.state.category } 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li>
                <label>rating????</label>
                <input
                  type="text" 
                  name="description" 
                  // value={ this.state.description } 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li>
                <label>Year</label>
                <input
                  type="text" 
                  name="year" 
                  value={ this.state.year } 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li>
              <label>Price</label>
                <input
                  type="text" 
                  name="price" 
                  value={ this.state.price } 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li>
                <label>IPVA</label>
                <input
                  type="text" 
                  name="ipva" 
                  value={ this.state.ipva } 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li>
              <label>Insurance</label>
                <input
                  type="text" 
                  name="insurance" 
                  value={ this.state.insurance } 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li>
              <label>Horsepower</label>
                <input
                  type="text" 
                  name="horsepower" 
                  value={ this.state.horsepower } 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li>
                <label>Fuel Consumption</label>
                <input
                  type="text" 
                  name="fuel consumption" 
                  value={ this.state.fuelCost } 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li>
                <label>Speed</label>
                <input
                  type="text" 
                  name="speed" 
                  value={ this.state.speed} 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li>
              <label>Depreciation</label>
                <input
                  type="text" 
                  name="depreciation" 
                  value={ this.state.depreciation } 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li>
              <label>Maintenance</label>
                <input
                  type="text" 
                  name="maintenance" 
                  value={ this.state.maintenance } 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li>
                <label>Warranty</label>
                <input
                  type="text" 
                  name="warranty" 
                  value={ this.state.warranty } 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li>
                <label>Trunk Size</label>
                <input
                  type="text" 
                  name="trunk" 
                  value={ this.state.trunk } 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li>
              <label>Review????</label>
                <input
                  type="text" 
                  name="review" 
                  // value={ this.state.description } 
                  onChange={ e => this.handleChange(e)} />
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.abs } />
                <label className="custom-control-label" >ABS</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.parkSensor } />
                <label className="custom-control-label" >Park Sensor</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.airBag } />/>
                <label className="custom-control-label" >Airbag</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.fogLights } />
                <label className="custom-control-label" >Fog Lights</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.backupCam } />
                <label className="custom-control-label" >Backup Cam</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.alarm } />
                <label className="custom-control-label" >Alarm</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.airCondit } />/>
                <label className="custom-control-label" >Air Conditioner</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.heightSeat } />
                <label className="custom-control-label" >Height Seat</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.autoPilot } />
                <label className="custom-control-label" >Auto Pilot</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.leatherSeat } />
                <label className="custom-control-label" >Leather Seat</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.sunRoof } />
                <label className="custom-control-label" >Sunroof</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.steeringWheelAdjust } />
                <label className="custom-control-label" >Steering Wheel Adjust</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.alloyWheel } />
                <label className="custom-control-label" >Alloy Wheel</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.headlightSensor } />
                <label className="custom-control-label" >Headlight</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.radio } />/>
                <label className="custom-control-label" >Radio</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.usb } />
                <label className="custom-control-label" >USB</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.gps } />
                <label className="custom-control-label" >GPS</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.boardPc } />/>
                <label className="custom-control-label" >Car Computer</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.steeringMultiFunction } />/>
                <label className="custom-control-label" >Steering Multifunction</label>
              </li>
              <li className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" onChange={ e => this.handleSwitch(e)} value={ this.state.bluetooth } />
                <label className="custom-control-label" >Bluetooth</label>
              </li>
            </ul>   
          </form>
        </div>
      );
    }
}

export default AddCar;