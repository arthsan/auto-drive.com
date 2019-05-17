import React from 'react';
import './quiz.css'

const Quiz = (props) => {
  return (
    <div >
      <section className='quiz'>
        <form>
          <p>Check now the best oportunity for you and our robots will help based on your necessities</p>
          <input type="submit" value="Start Simulation" className="p-3 mb-2 bg-dark text-white" />
        </form>
      </section>
    </div>
  )    
}

export default Quiz;