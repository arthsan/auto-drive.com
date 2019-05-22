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
        <nav className="navbar navbar-dark bg-dark">
          <h3 className='logo'><Link to='/'>Project Cars</Link></h3>
            <div>
              {this.state.loggedInUser.name}
              <div className="links">
              <Link to='/admin/addcar'><button className="btn btn-dark add-car" >Add Car</button></Link>
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
          <h3 className='logo'><Link to='/'>Project Cars</Link></h3>
                <div>
                <a className="btn btn-dark" href="#" role="button" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">
                  {this.state.loggedInUser.username}
                </a>
                <div className="links">
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
        <h3 className='logo'><Link to='/'>Project Cars</Link></h3>
          <div className='links'>
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