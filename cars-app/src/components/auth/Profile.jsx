import React, { Component } from "react";

// import the service file since we need it to send (and get) the data to(from) server
import service from '../../api/service';

import "../addcar/addcar.css"

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    }
  }

  handleChange = e => {  
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h2>Username</h2>
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
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Profile;