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
        <div className='log-body'>
          <form className='login' onSubmit={this.handleFormSubmit}>
            <label>Username:</label>
            <input type="text" name="username" className='btn btn-light' value={this.state.username} onChange={ e => this.handleChange(e)}/>
            
            <label>Password:</label>
            <input name="password" type='password' className='btn btn-light' value={this.state.password} onChange={ e => this.handleChange(e)} />
            
            <input type="submit" className='btn btn-dark' value="Signup" />
          </form>
    
          <p>Already have account? 
              <Link to={"/"}> Login</Link>
          </p>
    
        </div>
      );
    }
  }
}


export default Signup;