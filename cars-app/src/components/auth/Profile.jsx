import React, { Component } from "react";
import axios from 'axios';
// import the service file since we need it to send (and get) the data to(from) server
import service from '../../api/service';
import { Redirect } from 'react-router-dom';

import "../addcar/addcar.css"

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.loggedInUser.name,
      username: this.props.loggedInUser.username,
      password: this.props.loggedInUser.password,
      email: this.props.loggedInUser.email,
      image: this.props.loggedInUser.image,
      car: this.props.loggedInUser.car,
      passCheck: this.props.loggedInUser.passCheck,
      redirect: false,
    }
  }

  handleFormSubmit = (event) => {
    const name = this.state.name;
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;
    const image = this.state.image;
    const car = this.state.car;
    event.preventDefault();
    axios.put(`http://localhost:5000/auth/profile/${this.props.loggedInUser._id}`, { name, username, password, email, image, car })
    .then(() => {
      this.setState({redirect: !this.redirect})
    })
    .catch( error => console.log(error) )
  }

  handleFileUpload = e => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    service.handleUpload(uploadData)
    .then(response => {
        this.setState({ imageUrl: response.secure_url });
    })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
    });
  }

  handleChange = e => {  
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    if(this.state.redirect) {
      return(
      <Redirect to='/'/>
      );
    }else {
      return (
        <div>
          <h2>Profile Edit</h2>
          <form onSubmit={e => this.handleFormSubmit(e)}>
            {/* <div className="container"> */}
            <div className="row">
              <div className="col col-pad">
                {/* COLUNA 1 */}
                <div className="form-group">
                  <label>Name</label>
                  <div className="row">
                    <input type="text"
                      className="form-control" 
                      name="name" 
                      value={this.state.name} 
                      onChange={ e => this.handleChange(e)} />
                    </div>
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <div className="row">
                    <input type="text"
                      className="form-control" 
                      name="username" 
                      value={this.state.username} 
                      onChange={ e => this.handleChange(e)} />
                    </div>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="row">
                    <input type="password"
                      className="form-control" 
                      name="password" 
                      value={this.state.password} 
                      onChange={ e => this.handleChange(e)} />
                    </div>
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <div className="row">
                    <input type="password"
                      className="form-control" 
                      name="passCheck" 
                      value={this.state.passCheck} 
                      onChange={ e => this.handleChange(e)} />
                    </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <div className="row">
                    <input type="email"
                      className="form-control" 
                      name="email" 
                      value={this.state.email} 
                      onChange={ e => this.handleChange(e)} />
                    </div>
                </div>
                <div className="form-group">
                  <label>Car</label>
                  <div className="row">
                    <input type="text"
                      className="form-control" 
                      name="car" 
                      value={this.state.car} 
                      onChange={ e => this.handleChange(e)} />
                    </div>
                </div>
                <div className="buttons">
                  <input className='btn btn-dark' type="file" onChange={(e) => this.handleFileUpload(e)} /> 
                </div> 
                  <button className='btn btn-dark' type="submit">Save Profile</button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default Profile;