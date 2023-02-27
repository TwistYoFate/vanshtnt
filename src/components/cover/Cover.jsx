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
      <img id="cover-logo" src={logo}>
      </img>
      </div>
      <div class="cover-right">
        <h2 class="text-primary">
          <Typewriter 
            words={ ['VANSH TOURS AND TRAVELS','BRINGING JOY TO EVERY JOURNEY','BEST CARS IN BEST PRICES']}
            typeSpeed={200}
            loop={0}
            cursor={true}
            cursorBlinking={true}
          />
          <br/>
        </h2>
        <p class="text-white">
        We are a emerging Ghaziabad  based Tours and Travels company which provide the best in market services . Vehicles on rent starting just from 9rs/km.                  
        </p>
        <p>
        <Button clickHandler={(e)=>{scrollToProducts(e)}}/>
        </p>
      </div>
    </div>
  )
}

export default Cover