import React, { Component } from "react";


// import the service file since we need it to send (and get) the data to(from) server
import service from '../../api/service';
import Axios from "axios";

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
      review: "",
      abs: false,
      parkSensor: false,
      airBag: false,
      fogLights: false,
      backupCam: false,
      alarm: false,
      airCondit: false,
      heightSeat: false,
      autoPilot: false,
      leatherSeat: false,
      sunRoof: false,
      steeringWheelAdjust: false,
      alloyWheel: false,
      headlightSensor: false,
      radio: true,
      usb: false,
      gps: false,
      boardPc: false,
      steeringMultiFunction: false,
      bluetooth: false,
    }
  }
  
  // handleImage = e => {
  //   e.preventDefault();
  //   Axios.post('/upload', uploader.single('imageUrl'), (req, res, next) => {
  //     .then(response => {
  //     this.setState({imageUrl: response})
  //     })
  //     .catch(error => console.log(error))
  //   }
  // }

  handleChange = e => {  
        const { name, value } = e.target;
        this.setState({ [name]: value });
  }
    
  handleSwitch = e => {  
      const { name, checked } = e.target;
      this.setState({ [name]: checked });
    }

  // this method handles just the file upload
  handleFileUpload = e => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);

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
    service.saveNewCar(this.state)
    .then(res => {
        console.log('added: ', res);
        // here you would redirect to some other page 
    })
    .catch(err => {
        console.log("Error while adding the thing: ", err);
    });
  }  
  
  render() {
    console.log(this.state)
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
            {/* FORM */}
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
              <input type="checkbox" id="customSwitch1" class="custom-control-input" name='abs' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch1">ABS</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch2" class="custom-control-input" name='parkSensor' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch2">Park Sensor</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch3" class="custom-control-input" name='airBag' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch3">Airbag</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch4" class="custom-control-input" name='fogLights' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch4">Fog Lights</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch5" class="custom-control-input" name='backupCam' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch5">Backup Cam</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch6" class="custom-control-input" name='alarm' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch6">Alarm</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch7" class="custom-control-input" name='airCondit' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch7">Air Conditioner</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch8" class="custom-control-input" name='heightSeat' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch8">Height Seat</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch9" class="custom-control-input" name='autoPilot' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch9">Auto Pilot</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch10" class="custom-control-input" name='leatherSeat' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch10">Leather Seat</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch11" class="custom-control-input" name='sunRoof' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch11">Sun Roof</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch12" class="custom-control-input" name='steeringWheelAdjust' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch12">Steering Wheel Adjust</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch13" class="custom-control-input" name='alloyWheel' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch13">Alloy Wheel</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch14" class="custom-control-input" name='headlightSensor' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch14">Headlight Sensor</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch15" class="custom-control-input" name='radio' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch15">Radio</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch16" class="custom-control-input" name='usb' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch16">USB</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch17" class="custom-control-input" name='gps' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch17">GPS</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch18" class="custom-control-input" name='boardPc' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch18">Computer Board</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch19" class="custom-control-input" name='steeringMultiFunction' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch19">Steering Multifunction</label>
            </li>
            <li className="custom-control custom-switch">
              <input type="checkbox" id="customSwitch20" class="custom-control-input" name='bluetooth' onChange={e => this.handleSwitch(e)} />
              <label className="custom-control-label" for="customSwitch20">Bluetooth</label>
            </li>
            {/* BUTTOM SAVE */}
            <li>
              <input 
                type="file" 
                onChange={(e) => this.handleFileUpload(e)} /> 
              <button type="submit">Save Car</button>
            </li>
          </ul>   
        </form>
      </div>
    );
  }
}

export default AddCar;