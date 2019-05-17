
import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link , Redirect } from 'react-router-dom';
import './login.css'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { 
      username: '',
      password: '',
      redirect: false, 
    };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "", password: "", redirect: !this.state.redirect });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render(){
    if(this.state.redirect) {
      return(
      <Redirect to='/'/>
      );
    }else {
      return(
        <div className='log-body'>
          <form className='login' onSubmit={this.handleFormSubmit}>
            <label>Username:</label>
            <input type="text" name="username" className='btn btn-light' value={this.state.username} onChange={ e => this.handleChange(e)}/>
            <label>Password:</label>
            <input type='password' name="password" className='btn btn-light' value={this.state.password} onChange={ e => this.handleChange(e)} />
            
            <input type="submit" className='btn btn-dark' value="Login" />
          </form>
          <p>Don't have account? 
              <Link to={"/signup"}> Signup</Link>
          </p>
        </div>
      )
    }
  }
}

export default Login;