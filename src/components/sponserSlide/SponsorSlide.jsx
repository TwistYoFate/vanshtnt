import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import './SponsorSlide.scss'

function SponsorSlide(props) {
  return (
   <div className="custom-slide" >
        <Image className="slide-image" src={props.image} alt={props.alt} height={'auto'} width={"100%"} style={{transform:props.active?'scale(1.2)':'scale(1)'}}/>
   </div>
  )
}

export default SponsorSlide