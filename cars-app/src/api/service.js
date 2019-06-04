import axios from 'axios';

const service = axios.create({
  baseURL: 'https://project-cars-app.herokuapp.com/api',
  // withCredentials: true // => you might need this when having the users in the app 
});

const errorHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service,

  handleUpload (theFile) {
    return service.post('/upload', theFile)
      .then(res => res.data)
      .catch(errorHandler);
  },

  saveNewCar(newCar) {
    console.log('new car is: ', newCar)
    return service.post('/cars/create', newCar)
      .then(res => res.data)
      .catch(errorHandler);
  },

  saveNewQuiz(newQuiz) {
    return service.post('/quizform', newQuiz)
      .then(res => res.data)
      .catch(errorHandler);
  },

  editUser(userId, quizId) {
    return service.patch(`/user-update/${userId}`, { quizId })
      .then(res => res.data)
      .catch(errorHandler)
  },

  getAllCars(user) {
    return service.get('/cars')
      .then(res => res.data)
      .catch(errorHandler);
  },

  getQuiz(userId) {
    return service.get(`/quiz/${userId}`)
      .then(res => res.data)
      .catch(errorHandler);
  },

  editQuiz(userId, quizInfo) {
    return service.put(`/quiz/${userId}`, { quizInfo })
      .then(res => res.data)
      .catch(errorHandler)
  },
}