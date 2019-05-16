import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar'
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import ProtectedRoute from './components/auth/protected-route';
import AuthService from './components/auth/auth-service';


// 
class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }
  
  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }
  
  
render() {
  {this.fetchUser()}
  if(this.state.loggedInUser){
    console.log(this.state.loggedInUser)
    return (
      <div className="App">
      <NavBar getUser={this.getTheUser} user={this.state.loggedInUser} />
        <Switch>
          <Route exact path='/' render={() => <Home getUser={this.getTheUser}/>}/>
          {/* <ProtectedRoute user={this.state.loggedInUser} path='/projects/:id' component={ProjectDetails} /> */}
        </Switch>
      </div> 
    );
  } else {
      return (
        <div className="App">
          <NavBar />
            <Switch> 
              <Route exact path='/' render={() => <Home getUser={this.getTheUser}/>}/>
              <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
              <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
              {/* <ProtectedRoute user={this.state.loggedInUser} path='/projects/:id' component={ProjectDetails} /> */}
            </Switch>
        </div>
      );
    }
  }
}

export default App;
