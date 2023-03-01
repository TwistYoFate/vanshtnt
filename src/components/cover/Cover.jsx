import React from 'react'
import './Cover.scss'
import logo from '../../assets/logo/logo-white.png'
import Button from '../button/Button'
import { Typewriter } from 'react-simple-typewriter'

function Cover() {

  const scrollToProducts = (e)=>{
    document.querySelector("#gallery-heading").scrollIntoView();
  }

  return (
    <div id="cover">
      <div class="cover-left">
      <img id="cover-logo" src={logo} onClick={()=>{document.querySelector("#footer").scrollIntoView()}}>
      </img>
      </div>
      <div class="cover-right">
        <h2 class="text-primary">
          <Typewriter 
            words={ ['VANSH TOUR AND TRAVELS','BRINGING JOY TO EVERY JOURNEY','BEST CARS IN BEST PRICES']}
            typeSpeed={200}
            loop={0}
            cursor={true}
            cursorBlinking={true}
          />
          <br/>
        </h2>
        <p class="text-white">
        We are an emerging Ghaziabad based Tour and Travels company which provide the best in market services<br /><span className="text-primary">Taxi Hire starting just from  &#8377;9/km</span>                  
        </p>
        <p>
        <Button clickHandler={(e)=>{scrollToProducts(e)}}/>
        </p>
      </div>
    </div>
  )
}

export default Cover