import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5000/',
  // withCredentials: true // => you might need this when having the users in the app 
});

const errorHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service,

  handleUpload (theFile) {
    console.log('file in service: ', theFile)
    return service.post('/api/upload', theFile)
      .then(res => res.data)
      .catch(errorHandler);
  },

  saveNewCar(newCar) {
    console.log('new thing is: ', newCar)
    // return service.post('/')
    return service.post('/upload', newCar)
      .then(res => res.data)
      .catch(errorHandler);
  }
}