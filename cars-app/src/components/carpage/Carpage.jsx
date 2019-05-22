import React from 'react';
import StarRating from '../starrating/StarRating';
import './carpage.css'
import Review from '../reviews/Review'

const CarPage = (props) => {
  console.log(props.location.state)
  return (
    <div>
      <div className="box-car">
        <div>
          <img src={props.location.state.imageUrl} className="" alt="porshe" />
        </div>
        <div>
          <h3>{props.location.state.model}</h3>
          <p>Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. Paisis, filhis, espiritis santis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Sapien in monti palavris qui num significa nadis i pareci latim.</p>
          <h4>Review Project Cars</h4>
          <h4>Review Owners</h4>
          <div className='itens-car'>
            <div >
              <ul>
                <li>abs: {0}</li>
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
        <p>Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. A ordem dos tratores não altera o pão duris. In elementis mé pra quem é amistosis quis leo. Quem num gosta di mim que vai caçá sua turmis! Manduma pindureta quium dia nois paga. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Viva Forevis aptent taciti sociosqu ad litora torquent.
          Atirei o pau no gatis, per gatis num morreus. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.
          Sapien in monti palavris qui num significa nadis i pareci latim. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Si num tem leite então bota uma pinga aí cumpadi! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
          Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Mé faiz elementum girarzis, nisi eros vermeio. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.
        </p>
      </div>
      <h5>Reviews</h5>
      <Review />
    </div>           
  )    
}

export default CarPage;