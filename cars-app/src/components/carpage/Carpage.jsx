import React from 'react';
import StarRating from '../starrating/StarRating';
import './carpage.css'
import Review from '../reviews/Review'

const CarPage = (props) => {
  console.log(props.location.state)
  return (
    <div>
      <div className="box-car">
        <div className="box-img">
          <img className="img-car" src={props.location.state.imageUrl}  alt="photo" />
        </div>
        <div>
          <h3>{props.location.state.model}</h3>
          <p>Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. Paisis, filhis, espiritis santis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Sapien in monti palavris qui num significa nadis i pareci latim.</p>
          <h4>Review Project Cars</h4>
          <h4>Review Owners</h4>
          <div className='itens-car'>
            <div >
              <ul>
                <li>abs: </li>
                <li>parkSensor: </li>
                <li>airBag: </li>
                <li>fogLights:</li>
                <li>backupCam: </li>
                <li>alarm: </li>
                <li>airCondit: </li>
                <li>heightSeat: </li>
                <li>autoPilot: </li>
                <li>leatherSeat: </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>sunRoof: </li>
                <li>steeringWheelAdjust:</li> 
                <li>alloyWheel: </li>
                <li>headlightSensor: </li>
                <li>radio: </li>
                <li>usb: </li>
                <li>gps: </li>
                <li>boardPc: </li>
                <li>steeringMultiFunction: </li>
                <li>bluetooth: </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="description-car">
        <h5>{props.location.state.model}</h5>
        <p>{props.location.state.text}</p>
      </div>
      <h5>Reviews</h5>
      <Review />
      
    </div>           
  )    
}

export default CarPage;