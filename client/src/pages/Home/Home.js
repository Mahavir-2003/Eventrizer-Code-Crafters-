import React from 'react'
import "./Home.css"
import Logo from "../../SVG/Group 1.svg"
import BottomWave from "../../SVG/footerWaves.svg"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="Home-Container">
      <div className="main">
      <img className="Logo" src={Logo} alt="Logo"/>
      <a href="#scroll">Login</a>
      </div>
      <div className="tagline">
      <p>Bring event planning to your fingertips</p>
      <p id="scroll">EventRiser streamlines event planning for organizers & boosts growth for small businesses. Improve work process & expand online presence for revenue generation</p>
      </div>
      <div className="option">
        <div className="option-1">
          <text className="Heading">Organizer</text>
          <text className="Sub-Heading">Start your journey as a organizer</text>
          <div className="btn-container">
          <Link className="btn" to="/organizerSignUp">
          SignUp
          </Link>
          <Link className="btn" to="/organizerLogin">
          Login
          </Link>
          </div>
        </div>
        <div className="option-1">
          <p className="Heading">Vendor</p>
          <p className="Sub-Heading">Start your journey as a Vendor</p>
          <div className="btn-container">
          <Link className="btn" to="/vendorSignUp">
          SignUp
          </Link>
          <Link className="btn" to="/vendorLogin">
          Login
          </Link>
          </div>
        </div>
      </div>
      <div className="tagline">
      <p>Our future Vision</p>
      <p>EventRizer poised to be a valuable resource for sellers, providing them with a platform to expand their business. This presents a great opportunity for business growth. Additionally, event organizers will benefit from the platform as it enables easy communication with sellers and offers a wide range of options for selection.</p>
      </div>
      <div className='footer'>
      <img className="waves" src={BottomWave} alt="waves"/>
      <p>copyright &#169;2023 EventRizer</p>
    </div>
    </div>
  )
}

export default Home
