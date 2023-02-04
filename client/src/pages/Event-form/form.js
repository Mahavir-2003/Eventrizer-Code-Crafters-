import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
import '../Register/register.css';
function EventForm() {
    return(
        <>
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">Name</label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Date of Start</label>
                  <input  type="Date" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email"></div>
              <label className="form__label" for="email">Date of End</label>
                  <input  type="Date" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="Time">
                  <label className="form__label" for="password">Password </label>
                  <input className="Time" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" name="confirmPassword">Venue</label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
              <div className="Description">
                  <label className="Description" name="confirmPassword">Description</label>
                  <input className="Description" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
          {/* <Link> */}
              <button type="submit" className="btn">Register</button>
          {/* </Link> */}  
          </div>  
      </>    
    )       
}
export default EventForm;