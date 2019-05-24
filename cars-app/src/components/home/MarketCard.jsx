import React from 'react';
import './market-card.css'

const MarketCard = (props) => {
  return (
    <div className="block-market">
      {/* <section className="container" > */}
      <div className="card-size">
        <img src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558538177/car-wheel_2_ngqyou.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h4>Tyres discount</h4>
          <p className="card-text">Use our services to get discount<br/>buying new Pirelli tyres.</p>
        </div>
      </div>
      <div className="card-size">
        <img src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558538104/repairing-car_2_noqhzu.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h4>Maintenance bonus</h4>
          <p className="card-text">Don't worry about maintenance,<br/> we can provide support for you.</p>
        </div>
      </div>
      <div className="card-size">
        <img src="https://image.flaticon.com/icons/png/512/97/97365.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h4>Tax free</h4>
          <p className="card-text">Buying a car from our database,<br/> your IPVA in the first year is free.</p>
        </div>
      </div>
      {/* </section> */}
    </div>
  )    
}

export default MarketCard;