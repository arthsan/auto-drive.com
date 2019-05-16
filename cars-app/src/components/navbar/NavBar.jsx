import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';
import Home from '../home/Home'

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
    return (
      <nav className="nav-style">
        <h1><Link component={Home} to='/'>PROJECT CARS</Link></h1>
        <div>
          <Link to='/'>
            <button onClick={() => this.logoutUser()}>Logout</button>
          </Link>
        </div>
      </nav>
    )
  } else {
    return (
      <nav>
        <h1><Link to='/'>PROJECT CARS</Link></h1>
        <div><Link to ='/login'>Login</Link></div>
        <div><Link to='/signup'>Signup</Link></div>
      </nav>
    )
  }
}
}

export default NavBar;