import React, { useState } from 'react'
import "./Vendor.css"
import Logo from "../../SVG/Group 1.svg"
import BottomWave from "../../SVG/footerWaves.svg"
import axios from "axios"

const Vendor = () => {


  const [Data , setData] = useState([]);

  axios.get('http://localhost:5000/getEvents')
  .then(async function (response) {
    //console log json object
    console.log(response.data.events);
    //set data to json object
    setData(response.data.events);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  console.log(Data);

  return (
    <div className="vendor-container">
    <div className="header">
    <img src={Logo} alt="Logo" />
  </div>
        <div className="organizer-data">
          <div className="organizer-header">Active Events</div>
          <div className="organizer-requests">

          {Data.map((event) => {
            return(
              <div className="vendor-request">
                <p className="spacer">Name : {event.name}</p>
                <p className="spacer">Location : {event.location}</p>
                <p className="spacer">budget : {event.budget}</p>
                <p className="spacer">Starting date : {event.startingDate}</p>
                <p className="spacer">Ending date : {event.endingDate}</p>
                <p className="spacer">Description : {event.description}</p>
                <input placeholder="tender amount" className='Amount-input' type='number'></input>
                <button className='btn-vendor'>Request</button>
              </div>
            )
          })}

          <div className="vendor-request">
            <p className="spacer">Name : Hack Infinity</p>
            <p className="spacer">Location : kherva</p>
            <p className="spacer">budget : 20033</p>
            <p className="spacer">Starting date : 20-oct-2033</p>
            <p className="spacer">Ending date : 20-oct-2033</p>
            <p className="spacer">Description : lorekjlkfjldjlj kldjlkjl lkdjlkfj jf lkj lkasjflkaj j ljlkj l jalkjf lj lksj f jlkaj  ajflaj j lkf  jlsfjlk  ljfsl lkj fjal </p>
            <input placeholder="tender amount" className='Amount-input' type='number'></input>
            <button className='btn-vendor'>Request</button>
          </div>
          </div>
          <div className="vendor-header">Accepted Events</div>
          <div className="organizer-requests">
          <div className="vendor-request">
          <p className="spacer">Name : Hack Infinity</p>
            <p className="spacer">Location : kherva</p>
            <p className="spacer">budget : 20033</p>
            <p className="spacer">Starting date : 20-oct-2033</p>
            <p className="spacer">Ending date : 20-oct-2033</p>
            <p className="spacer">Description : lorekjlkfjldjlj kldjlkjl lkdjlkfj jf lkj lkasjflkaj j ljlkj l jalkjf lj lksj f jlkaj  ajflaj j lkf  jlsfjlk  ljfsl lkj fjal </p>
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

export default Vendor;
