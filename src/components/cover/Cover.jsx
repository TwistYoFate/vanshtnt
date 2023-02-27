import React from 'react'
import './Cover.scss'
import logo from '../../assets/logo/logo-white.png'
import Button from '../button/Button'
import useTypewriter from '../../hooks/useTypewriter'

function Cover() {

  const {line} = useTypewriter(
    ['VANSH TOURS AND TRAVELS','BRINGING JOY TO EVERY JOURNEY ','BEST CARS IN BEST PRICE'],
    200
  )

  return (
    <div id="cover">
      <div class="cover-left">
      <img id="cover-logo" src={logo}>
      </img>
      </div>
      <div class="cover-right">
        <h2 class="text-primary">
          {
          line
          }
          <br/>
        </h2>
        <p class="text-white">
        We are a emerging Ghaziabad  based Tours and Travels company which provide the best in market services . Vehicles on rent starting just from 9rs/km.                  
        </p>
        <p>
        <Button />
        </p>
      </div>
    </div>
  )
}

export default Cover