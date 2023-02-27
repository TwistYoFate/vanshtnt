import React from 'react'
import './SectionHeader.scss'


function SectionHeader(props) {
  return (
    <div className="section-header text-primary">
      <h2>{props.title}</h2>
    </div>
  )
}

export default SectionHeader