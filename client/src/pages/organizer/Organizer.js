import React from 'react'
import "./organizer.css"
import Header from '../../components/Header/Header'
import BottomWave from "../../SVG/footerWaves.svg"

const Organizer = () => {
  return (
    <div className="organizer-container">
        <Header />
        <div className="organizer-data">
          <div className="organizer-header">Tender Requests</div>
          <div className="organizer-requests">
          <div className="request">
              <p className='EventName'>Hackathon</p>
              <p className='EventName'>18000</p>
              <div style={{display: 'flex'}}>
              <button className="btn">Accept</button>
              <button className="btn" style={{backgroundColor : "#ff6961"}}>Decline</button>
              </div>
            </div>
            <div className="request">
              <p className='EventName'>Hackathon</p>
              <p className='EventName'>18000</p>
              <div style={{display: 'flex'}}>
              <button className="btn">Accept</button>
              <button className="btn" style={{backgroundColor : "#ff6961"}}>Decline</button>
              </div>
            </div>
            
          </div>
        </div>
        <div className='footer'>
      <img className="waves" src={BottomWave} alt="waves"/>
      <p>copyright &#169;2023 EventRizer</p>
    </div>
    </div>
  )
}

export default Organizer;
