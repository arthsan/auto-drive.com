import React from 'react';
import './review.css'

const Review = (props) => {
  return (
  <div>
    <div className="review-car box">
        <div className="user-data">
          <h5 className="review-title">Reviews</h5>
          <p>Rodrigo Leclerc</p>
        </div>
        <p className="text-review">Carro apaixonante para dirigir, estabilidade sem igual, espaço interno com saídas de ar condicionado para os ocupantes do banco de trás, coloca o carro acima da maioria dos concorrente.<br/>
        Os pontos negativos ficam pra revenda desvaloriza muito, seguro e peças muito caras! Jogo de pastilhas gastei mais de R$ 500,00 reais.
        </p>
    </div>
  </div>
  )
}

export default Review;