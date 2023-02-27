import React from 'react'
import './SectionHeader.scss'


function SectionHeader(props) {
  return (
    <div className="section-header text-primary" id={props?.id?props.id:''}>
      <h2>{props.title}</h2>
    </div>
  )
}

export default SectionHeader