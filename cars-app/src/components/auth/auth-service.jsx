import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: `https://project-cars-app.herokuapp.com/auth`,
      withCredentials: true
    });
    this.service = service;
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }
  
  logout = () => {
    return this.service.get('/logout', {})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data)
  }

  signup = (username, password) => {
    return this.service.post('/signup', {username, password})
    .then(response => response.data)
  }

  // edit = (username, password, email, car, image, name) => {
  //   return this.service.put(`/profile/${this.props.loggedInUser._id}`, {username, password, email, car, image, name})
  //   .then(response => response.data)
  // }

}

export default AuthService;