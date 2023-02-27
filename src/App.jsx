import React, { useLayoutEffect, useState,  useMemo } from 'react'
import './App.scss'
import Cover from './components/cover/Cover'
import Footer from './components/footer/Footer'
import Gallery from './components/gallery/Gallery'
import SponsorCarousel from './components/sponsorCarousel/SponsorCarousel'
import Topbar from './components/topbar/Topbar'
import { cars } from './content/cars'
import { sponsors } from './content/sponsors'

function App() {
  const [showTopbar,setShowTopbar] = useState(false);

  useLayoutEffect(()=>{
    function test(){
      if(window.scrollY === 0){
        setShowTopbar(false);
      }
      else{
        setShowTopbar(true);
      }
    }
    window.addEventListener('scroll',test)
    return ()=>{window.removeEventListener('scroll',test);console.log('removed')}
  },[])

  return (
    <div className="App container-fluid">
      <Topbar showTopbar={showTopbar} />
      <Cover />
      <Gallery cars={cars} />
      <SponsorCarousel sponsors={sponsors}/>
      <Footer />
    </div>
  )
}

export default App
