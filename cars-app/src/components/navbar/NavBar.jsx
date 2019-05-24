import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';
import './navbar.css';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  logoutUser = () =>{
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);  
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["user"]})
  }

  render() {
  if(this.state.loggedInUser) {
    // ROLE ADMIN
    if(this.state.loggedInUser.role === 'ADMIN') {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <img className="logo" src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558576846/logo_white_k8pynd.png"/>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active ">
               <button className="btn btn-dark add-car btn-desk btn-home" >Home</button><Link to='/'></Link>
              </li>
              <li class="nav-item margin-btn">
                <a>{this.state.loggedInUser.name}</a>
              </li>
              <li class="nav-item">
                <Link to={`/bestcars/${this.state.loggedInUser._id}`}><button className="btn btn-dark add-car btn-desk" >Best Cars</button></Link>
              </li>
              <li class="nav-item">
                <Link to='/admin/addcar'><button className="btn btn-dark add-car btn-desk" >Add Car</button></Link>
              </li>
              <li class="nav-item">
                <Link to={`/profile/${this.state.loggedInUser._id}`} getUser={this.props.getUser}><button type="button" className="btn btn-dark add-car">Profile</button></Link>
              </li>
              <li class="nav-item">
                <Link to='/'><button type="button" className="btn btn-dark add-car" onClick={() => this.logoutUser()}>Logout</button></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  } else {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <img className="logo" src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558576846/logo_white_k8pynd.png"/>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active ">
                <Link to='/'><button className="btn btn-dark add-car btn-desk btn-home" >Home</button></Link>
              </li>
              <li class="nav-item margin-btn">
                <a>{this.state.loggedInUser.name}</a>
              </li>
              <li class="nav-item">
                <Link to={`/bestcars/${this.state.loggedInUser._id}`}><button className="btn btn-dark add-car btn-desk" >Best Cars</button></Link>
              </li>
              <li class="nav-item">
                <Link to={`/profile/${this.state.loggedInUser._id}`} getUser={this.props.getUser}><button type="button" className="btn btn-dark add-car">Profile</button></Link>
              </li>
              <li class="nav-item">
                <Link to='/'><button type="button" className="btn btn-dark add-car" onClick={() => this.logoutUser()}>Logout</button></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      )
    }
  } else {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <img className="logo" src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558576846/logo_white_k8pynd.png"/>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active ">
                <Link to='/'><button className="btn btn-dark add-car btn-desk btn-home" >Home</button></Link>
              </li>
              <li class="nav-item margin-btn-log">
                <Link to='/login'><button type="button" className="btn btn-light btn-desk">Login</button></Link>
              </li>
              <li class="nav-item">
                <Link to='/signup'><button type="button" className="btn btn-light btn-desk nav-right">Signup</button></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
}

export default NavBar;