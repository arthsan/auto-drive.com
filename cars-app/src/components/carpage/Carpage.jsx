import React from 'react';
import './carpage.css'
import Review from '../reviews/Review'

// AUX VARIABLES
const noIcon = <img src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558616854/baseline_cancel_black_18dp_rauogz.png"/>
const yesIcon = <img src="https://res.cloudinary.com/dqtp9um44/image/upload/v1558618219/check-green2-18_gkpjxy.png"/>



const CarPage = (props) => {
  console.log(props.location.state)
  return (
    <div>
      <div className="box-car">
        <div className="box-img">
          <img className="img-car" src={props.location.state.imageUrl}  alt="carphoto" />
        </div>
        <hr/>
        <div className="data-car">
          <div className='itens-car'>
            <div >
              <ul>
              <h3>{props.location.state.model}</h3>
              <h5><b>Year:</b> {props.location.state.rank.year}</h5>
              <h5><b>Price:</b> R$ {props.location.state.rank.price},00</h5>
              <h5><b>IPVA:</b> R$ {props.location.state.rank.ipva},00</h5>
              <h5><b>Insurance:</b> R$ {props.location.state.rank.insurance},00</h5>
              <h5><b>Maintenance:</b> R$ {props.location.state.rank.maintenance},00</h5>
              </ul>
            </div>
            <div>
              <ul>
              <br/>
              <br/>
              <h5><b>HorsePower:</b> {props.location.state.rank.horsePower} cv</h5>
              <h5><b>Fuel Consumption:</b> {props.location.state.rank.fuelCost} km/l</h5>
              <h5><b>Speed Max:</b> {props.location.state.rank.speed} km/h</h5>
              <h5><b>Warranty:</b> {props.location.state.rank.warranty} years</h5>
              <h5><b>Trunk:</b> {props.location.state.rank.trunk} l</h5>
              </ul>
            </div>
          </div>
          <div className='itens-car'>
            <div >
              {/* ACCESSORIES */}
              <ul>
                <li>{props.location.state.accessories.security.abs ? yesIcon : noIcon} ABS</li>
                <li>{props.location.state.accessories.security.parkSensor ? yesIcon : noIcon} Park Sensor</li>
                <li>{props.location.state.accessories.security.airBag ? yesIcon : noIcon} AirBag</li>
                <li>{props.location.state.accessories.security.fogLights ? yesIcon : noIcon} Fog Lights</li>
                <li>{props.location.state.accessories.security.backupCam ? yesIcon : noIcon} BackupCam</li>
                <li>{props.location.state.accessories.security.alarm ? yesIcon : noIcon} Alarm</li>
                <li>{props.location.state.accessories.comfort.airCondit ? yesIcon : noIcon} Air Conditioner</li>
                <li>{props.location.state.accessories.comfort.heightSeat ? yesIcon : noIcon} Height Seat</li>
                <li>{props.location.state.accessories.comfort.autoPilot ? yesIcon : noIcon} AutoPilot</li>
                <li>{props.location.state.accessories.comfort.leatherSeat ? yesIcon : noIcon} Leather Seat</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>{props.location.state.accessories.comfort.sunRoof ? yesIcon : noIcon} Sunroof</li>
                <li>{props.location.state.accessories.comfort.steeringWheelAdjust ? yesIcon : noIcon} Steering Wheel Adjust</li> 
                <li>{props.location.state.accessories.comfort.alloyWheel ? yesIcon : noIcon} Alloy Wheel</li>
                <li>{props.location.state.accessories.comfort.headlightSensor ? yesIcon : noIcon} Headlight Sensor</li>
                <li>{props.location.state.accessories.entertainment.radio ? yesIcon : noIcon} Radio</li>
                <li>{props.location.state.accessories.entertainment.usb ? yesIcon : noIcon} USB</li>
                <li>{props.location.state.accessories.entertainment.gps ? yesIcon : noIcon} GPS</li>
                <li>{props.location.state.accessories.entertainment.boardPc ? yesIcon : noIcon} BoardPc</li>
                <li>{props.location.state.accessories.entertainment.steeringMultiFunction ? yesIcon : noIcon} Steering MultiFunction</li>
                <li>{props.location.state.accessories.entertainment.bluetooth ? yesIcon : noIcon} Bluetooth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="description-car">
        <h5>{props.location.state.model}</h5>
        <p>{props.location.state.text}</p>
      </div>
      <button type="button" class="btn btn-desk btn-lg">I'm interested!</button>
      <Review />
    </div>           
  )    
}

export default CarPage;