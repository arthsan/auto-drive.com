import React from 'react';
import './market-card.css'

const MarketCard = (props) => {
  return (
    <section className="container cards " >
    <div className="card card-size">
      <img src="http://www.redefaisao.com.br/wp-content/uploads/2016/05/AUTOMOVEIS-PNEUS.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h3>Tyres discount</h3>
        <p className="card-text">Use our services to get discount buying new Pirelli tyres.</p>
      </div>
    </div>
    <div className="card card-size">
      <img src="https://image.flaticon.com/icons/png/512/7/7646.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h3>Maintenance bonus</h3>
        <p className="card-text">Don't worry about maintenance, we can provide support for you.</p>
      </div>
    </div>
    <div className="card card-size">
      <img src="https://image.flaticon.com/icons/png/512/97/97365.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <h3>Tax free</h3>
        <p className="card-text">Buying a car from our database, your IPVA in the first year is free.</p>
      </div>
    </div>
    </section>
  )    
}

export default MarketCard;