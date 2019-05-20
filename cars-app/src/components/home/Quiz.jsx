import React from 'react';
import { Link } from 'react-router-dom';

import './quiz.css'

const Quiz = (props) => {
  return (
    <div >
      <section className='quiz'>
        <form>
          <p>Check now the best oportunity for you and our robots will help based on your necessities</p>
          <Link to='/quizform'><button className="btn btn-dark add-car" >Start Simulation</button></Link>          
        </form>
      </section>
    </div>
  )    
}

export default Quiz;