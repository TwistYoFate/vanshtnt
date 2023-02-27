import React from 'react'
import { Card } from 'react-bootstrap'
import './Product.scss'

/**
 * 
 * @param {name, price, tada,image} props 
 * @returns 
 */

function Product(props) {
  return (
    <Card className="ccard">
        <Card.Img variant="top" src={props?.image} id="card-image"/>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Rs {props.price}/KM
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">TA/DA : {props.tada}</small>
        </Card.Footer>
      </Card>
  )
}

export default Product