import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import './Topbar.scss'
import logo from '../../assets/logo/logo-white.png'

function Topbar(props) {
  return (
     <Navbar id="topbar" bg="dark" style={{opacity:props.showTopbar?'100%':'0%'}}>
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Topbar