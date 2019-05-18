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
    if(this.state.loggedInUser.role === 'ADMIN') {
    return (
      <div>
      <nav className="nav justify-content-between nav-style">
        <h1 className='adjust logo'><Link to='/'>PROJECT CARS</Link></h1>
        <div className='adjust row'>
          <div>
          <Link to='/admin/addcar'>
            <button className="btn btn-dark" >Add Car</button>
          </Link>
        </div>
        <div>
          {this.state.loggedInUser.username}
        </div>
          <div><Link to='/'>
            <button type="button" className="btn btn-dark" onClick={() => this.logoutUser()}>Logout</button>
          </Link></div>
        </div>
      </nav>
      </div>
    )
    } else {
      return (
        <div>
        <nav className="nav justify-content-between nav-style">
          <h1 className='adjust logo'><Link to='/'>PROJECT CARS</Link></h1>
          <div className='adjust row'>
            <div>
            {this.state.loggedInUser.username}
            </div>
            <div><Link to='/'>
              <button type="button" className="btn btn-dark" onClick={() => this.logoutUser()}>Logout</button>
            </Link></div>
          </div>
        </nav>
        </div>
      )
    }
  } else {
    return (
      <div>
        <nav className="nav justify-content-between nav-style">
          <h1 className='adjust logo'><Link to='/'>PROJECT CARS</Link></h1>
          <div className='row adjust'>
          <div><Link to='/login'><button type="button" className="btn btn-dark">Login</button></Link></div>
          <div><Link to='/signup'><button type="button" className="btn btn-dark">Signup</button></Link></div>
          </div>
      </nav>
      </div>
    )
  }
}
}

export default NavBar;