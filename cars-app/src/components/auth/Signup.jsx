import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import AuthService from './auth-service';
import './login.css'

// https://mdbootstrap.com/docs/jquery/forms/basic/
class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: false,
    };
    this.service = new AuthService();
  }

  // handleChange() and handleSubmit() will be added here

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
  
    this.service.signup(username, password)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
        });
        this.setState({
          redirect: !this.state.redirect,
        }, () => {
          this.props.getUser(response);
        });
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render(){
    if (this.state.redirect) {
      return(
        <Redirect to="/" />
      );
    } else {
      return(
        <div class="text-center body-login">
          <form class="form-signin form-container" onSubmit={this.handleFormSubmit}>

              <h1 class="h3 mb-3 font-weight-normal">Sign up</h1>
              
              <div class="inputs-login">
                  <label for="inputusername" class="sr-only">Username</label>
                  <input name="username" type="text" id="inputusername" class="form-control input-control" placeholder="Username" value={this.state.username} onChange={ e => this.handleChange(e)} required autofocus/>
              </div>    
              
              <div class="inputs-login">
                  <label for="inputPassword" class="sr-only">Password</label>
                  <input type="password" name="password" id="inputPassword" class="form-control input-control" placeholder="Password" value={this.state.password} onChange={ e => this.handleChange(e)} required/>
              </div>                
              <button class="btn btn-lg btn-log-sig btn-block " type="submit">Sign up</button>
              <br/>
              <a>Already have account?</a>
              <Link className="link-log-sig"to={"/login"}> Login</Link>                                     
          </form>
        </div>

      );
    }
  }
}


export default Signup;