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
        <nav className="navbar navbar-dark bg-dark">
          <div className="nav-desk">
            <img src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558576846/logo_white_k8pynd.png"/>
            <Link to='/'><button className="btn btn-dark add-car btn-desk btn-home" >Home</button></Link>
          </div>
            <div>
              {this.state.loggedInUser.name}
              <div className="links">
              <Link to={`/bestcars/${this.state.loggedInUser._id}`}><button className="btn btn-dark add-car btn-desk" >Best Cars</button></Link>
              <Link to='/admin/addcar'><button className="btn btn-dark add-car btn-desk" >Add Car</button></Link>
              <Link to={`/profile/${this.state.loggedInUser._id}`} getUser={this.props.getUser}><button type="button" className="btn btn-dark add-car">Profile</button>
              </Link>
              <Link to='/'><button type="button" className="btn btn-dark add-car" onClick={() => this.logoutUser()}>Logout</button>
              </Link>
            </div>
            </div>
        </nav>
      </div>
    )
  } else {
    return (
      <div>
          <nav className="navbar navbar-dark bg-dark"> 
          <div className="nav-desk">
            <img src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558576846/logo_white_k8pynd.png"/>
            <Link to='/'><button className="btn btn-dark add-car btn-desk btn-home" >Home</button></Link>
            <a className="btn user" href="#" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">
              {this.state.loggedInUser.username}
            </a>
          </div>
                <div>
                <div className="links">
                <Link to={`/bestcars/${this.state.loggedInUser._id}`}><button className="btn btn-dark add-car btn-desk" >Best Cars</button></Link>
                  <Link to={`/profile/${this.state.loggedInUser._id}`} getUser={this.props.getUser}><button type="button" className="btn btn-dark add-car">Profile</button>
                  </Link>
                  <Link to='/'><button type="button" className="btn btn-dark add-car" onClick={() => this.logoutUser()}>Logout</button>
                  </Link>
                </div>
                </div>
          </nav>
        </div>
      )
    }
  } else {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
        <div className="nav-desk">
          <img src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558576846/logo_white_k8pynd.png"/>
          <Link to='/'><button className="btn btn-dark add-car btn-desk btn-home" >Home</button></Link>
        </div>
          <div className='links'>
          <div><Link to='/login'><button type="button" className="btn btn-light btn-desk">Login</button></Link></div>
          <div><Link to='/signup'><button type="button" className="btn btn-light btn-desk nav-right">Signup</button></Link></div>
          </div>
      </nav>
      </div>
    )
  }
}
}

export default NavBar;