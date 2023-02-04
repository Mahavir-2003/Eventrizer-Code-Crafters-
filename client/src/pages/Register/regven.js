import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './register.css'
function RegistrationFormv() {
    return(
       <>
	    <div className="background"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      <form>
      <h3>Vendor</h3>

              
            
                  {/* <label className="form__label" for="lastName"></label> */}
                  <input  type="text"  id="lastName"  className="form__input" placeholder="Name"/>
              

              <div className="email">
                  {/* <label className="form__label" for="email"></label> */}
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
                </div>

              <div className="password">
                  {/* <label className="form__label" for="password"></label> */}
                  <input  type="password"  className="form__input"  id="password" placeholder="Password"/>
              </div>

              <div className='btn'>
                <input type="submit" className='btn'/>
              {/* <button type="submit">Register</button> */}
            </div>

            {/* <div className="confirm-password">
                  <label className="form__label" name="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div> */}
          {/* <Link> */}
          {/* </Link> */}  
    </form>
    </>     
    )       
}
export default RegistrationFormv;