import React, { useEffect, useState } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import SectionHeader from '../sectionHeader/SectionHeader'
import SponsorSlide from '../sponserSlide/SponsorSlide'
import './SponsorCarousel.scss'

function SponsorCarousel(props) {
    const [active,setActive] = useState(0);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setActive((active+1)%4);
        },3000);
        return ()=>{
            clearInterval(timer);
        }
    })
  return (
      <>
      <SectionHeader title="Trusted Partners"/>
    <div className="custom-carousel">
        {
            props.sponsors?.map((sponsor,index)=>{
                return (
                    <SponsorSlide key={index} image={sponsor.image} slt={sponsor.alt} active={active===index?true:false}/>
                )
            })
        }
    </div>
    <div className="sponsor-name text-white">
      <h5>{props.sponsors[active].name}</h5>
    </div>
    </>
  )
}

export default SponsorCarousel