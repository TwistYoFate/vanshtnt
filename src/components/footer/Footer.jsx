import React from 'react'
import './Footer.scss'
import logo from '../../assets/logo/logo-white.png'

function Footer() {
  return (
    <div id="footer" className="bg-primary">
      <div class="footer-left">
      <h2 class="text-black">
          VANSH TOURS AND TRAVELS
        </h2>
        <p class="text-white">
        E-154 <br />
        New Vijay Nagar, <br />
        Ghaziabad,<br />
        Uttar Pradesh - 201009 <br />
        <br/>
        <strong>Email :</strong> shikhatomar85@gmail.com <br />
        <strong>Contact :</strong> 9871590183                  
        </p>
        <p>
        </p>
     
      </div>
      <div class="footer-right">
      <img id="footer-logo" src={logo} onClick={()=>{window.scrollTo(0,0)}} >
      </img>
      </div>
    </div>
  )
}

export default Footer