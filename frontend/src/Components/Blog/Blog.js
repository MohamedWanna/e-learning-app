import React from 'react'
import { FaCheck, FaLifeRing, FaWeixin } from "react-icons/fa";
import FooterPage from '../FooterPage';

function Blog() {
  return (
    <div>
      <FooterPage/>
      <div style={{display:"flex",justifyContent:"space-between",marginLeft:"10px",marginRight:"10px"}}>      
        <div className='col-xs-12 col-md-4 feature-box'>
          <div className='hestia-info' >
            <div className='icon' style={{color: "red"}}>
              <FaWeixin size="5em"/>
            </div>
            <h4 className='info-title'>Responsive</h4>
            <p>We respond to your needs!</p>
          </div>
        </div>
        <div className='col-xs-12 col-md-4 feature-box'>
          <div className="hestia-info">
            <div  className='icon'>
              <FaCheck color='#00bcd4' size="5em"/>
            </div>
            <h4 className='info-title'>Quality</h4>
            <p>Quality not quantity. We have the most qualified trainers to help you achieve your goals.</p>
          </div>
        </div>
        <div className='col-xs-12 col-md-4 feature-box'>
          <div className='"hestia-info'>
            <div className='icon'>
              <FaLifeRing size='5em' color='#4caf50' />
            </div>
            <h4 className='info-title'>Change</h4>
            <p>We are here to change and build your business.</p>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Blog