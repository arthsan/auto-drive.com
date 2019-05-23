import React from 'react';
import { Link } from 'react-router-dom';

import './quiz.css'

const Quiz = (props) => {
  return (
    <div className='quiz'>
          <p>Check now the best oportunity for you and our robots will help based on your necessities</p>
          <Link to={`/quizform`}><button className="btn-desk btn btn-dark add-car btn-lg" >Start Simulation</button></Link>          
    </div>
  )    
}

export default Quiz;