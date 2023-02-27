import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import './Topbar.scss'
import logo from '../../assets/logo/logo-black.png'

function Topbar(props) {
  return (
     <Navbar id="topbar" className={props.showTopbar?"":"text-primary bg-transparent"}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              style={{opacity:props.showTopbar?'100%':'0%'}}
            />
          </Navbar.Brand>
          <Navbar.Text className={props.showTopbar?"":"text-white bg-transparent"}>
            VANSH TOURS & TRAVELS
          </Navbar.Text>
        </Container>
      </Navbar>
  )
}

export default Topbar