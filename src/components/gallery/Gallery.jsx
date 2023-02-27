import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../product/Product'
import SectionHeader from '../sectionHeader/SectionHeader'
import './Gallery.scss'

function Gallery(props) {
  return (
    <>
    <SectionHeader title="Choose your drive" />
    <div className="gallery">
        {
         props?.cars?.map((car,index)=>{
             return(<Product key={index} name={car.name} price={car.price} tada={car.tada} image={car.image} />)
         })
        } 
    </div>
    </>
  )
}

export default Gallery