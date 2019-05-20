import React, { Component } from "react";

// import the service file since we need it to send (and get) the data to(from) server
import service from '../../api/service';

import "./addcar.css"

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
      radio: false,
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
    return (
      <div>
        <h2>New Car</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          {/* <div className="container"> */}
            <div className="row">
              <div className="col col-pad">
              {/* COLUNA 1 */}
                <div className="form-group">
                  <label>Name</label>
                  <input type="text"
                    className="form-control" 
                    name="name" 
                    value={ this.state.name } 
                    onChange={ e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="description" 
                    value={ this.state.description } 
                    onChange={ e => this.handleChange(e)} />
                </div>
                {/* FORM */}
                <div className="form-group">
                  <label>Model</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="model" 
                    value={ this.state.model } 
                    onChange={ e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <label>Brand</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="brand" 
                    value={ this.state.brand } 
                    onChange={ e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <label>Transmission</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="transmission" 
                    value={ this.state.transmission } 
                    onChange={ e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="category" 
                    value={ this.state.category } 
                    onChange={ e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <label>rating????</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="description" 
                    // value={ this.state.description } 
                    onChange={ e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <label>Year</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="year" 
                    value={ this.state.year } 
                    onChange={ e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                <label>Price</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="price" 
                    value={ this.state.price } 
                    onChange={ e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <label>IPVA</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="ipva" 
                    value={ this.state.ipva } 
                    onChange={ e => this.handleChange(e)} />
                </div>
              </div>
              <div className="col col-pad">
                {/* COLUNA 2 */}
                <div className="form-group">
                 <label>Insurance</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="insurance" 
                    value={ this.state.insurance } 
                    onChange={ e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                <label>Horsepower</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="horsepower" 
                    value={ this.state.horsepower } 
                    onChange={ e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <label>Fuel Consumption</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="fuelCost" 
                    value={ this.state.fuelCost }
                    onChange={ e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <label>Speed</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="speed" 
                    value={ this.state.speed} 
                    onChange={ e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                <label>Depreciation</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="depreciation" 
                    value={ this.state.depreciation } 
                    onChange={ e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                <label>Maintenance</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="maintenance" 
                    value={ this.state.maintenance } 
                    onChange={ e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <label>Warranty</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="warranty" 
                    value={ this.state.warranty } 
                    onChange={ e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <label>Trunk Size</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="trunk" 
                    value={ this.state.trunk } 
                    onChange={ e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                <label>Review????</label>
                  <input
                    type="text" 
                    className="form-control"
                    name="review" 
                    // value={ this.state.description } 
                    onChange={ e => this.handleChange(e)} />
                </div>
              </div>
            </div>
          {/* </div> */}

          {/* <div className="container"> */}
            <div className="row">
              <div className="col col-pad">
              {/* COLUNA 1 -ITENS*/}
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch1" className="custom-control-input" name='abs' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch1">ABS</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch2" className="custom-control-input" name='parkSensor' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch2">Park Sensor</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch3" className="custom-control-input" name='airBag' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch3">Airbag</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch4" className="custom-control-input" name='fogLights' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch4">Fog Lights</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch5" className="custom-control-input" name='backupCam' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch5">Backup Cam</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch6" className="custom-control-input" name='alarm' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch6">Alarm</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch7" className="custom-control-input" name='airCondit' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch7">Air Conditioner</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch8" className="custom-control-input" name='heightSeat' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch8">Height Seat</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch9" className="custom-control-input" name='autoPilot' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch9">Auto Pilot</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch10" className="custom-control-input" name='leatherSeat' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch10">Leather Seat</label>
                </div>
              </div>

              <div className="col col-pad">
                {/* COLUNA 2 -ITENS */} 
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch11" className="custom-control-input" name='sunRoof' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch11">Sun Roof</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch12" className="custom-control-input" name='steeringWheelAdjust' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch12">Steering Wheel Adjust</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch13" className="custom-control-input" name='alloyWheel' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch13">Alloy Wheel</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch14" className="custom-control-input" name='headlightSensor' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch14">Headlight Sensor</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch15" className="custom-control-input" name='radio' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch15">Radio</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch16" className="custom-control-input" name='usb' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch16">USB</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch17" className="custom-control-input" name='gps' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch17">GPS</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch18" className="custom-control-input" name='boardPc' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch18">Computer Board</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch19" className="custom-control-input" name='steeringMultiFunction' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch19">Steering Multifunction</label>
                </div>
                <div className="custom-control custom-switch">
                  <input type="checkbox" id="customSwitch20" className="custom-control-input" name='bluetooth' onChange={e => this.handleSwitch(e)} />
                  <label className="custom-control-label" htmlFor="customSwitch20">Bluetooth</label>
                </div>
              </div>
            </div>
          {/* </div> */}

          {/* BUTTOM SAVE */}
          <div>
            <input 
              type="file" 
              onChange={(e) => this.handleFileUpload(e)} /> 
            <button type="submit">Save Car</button>
          </div> 
        </form>
      </div>
    );
  }
}

export default AddCar;