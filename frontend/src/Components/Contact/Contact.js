import React from 'react'
import { FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa'
import FooterPage from '../FooterPage'

function Contact() {
  return (
    <div>
        <FooterPage/>
    <div className='header1-contact'>
        <h2 className='hestia-title'>Keep in Touch</h2>
    </div>
    <div className='icon icon-primary'>
        <FaMapMarkerAlt/>
    </div>
    <div className='description'>
        <h4>Find us at the office</h4>
        <p>Office 12, Ali ElBelhouane Street,2100 Gafsa City,Gafsa</p>
    </div>
    <div className='hestia-info info-horizontal'>
        <div className='icon icon-primary'>
            <FaMobileAlt/>
        </div>
        <div className='description'>
            <h4 className='info-title'>Give us a ring</h4>
                <p>
                    +21626406908
                </p>
        </div>
    </div>
<div style={{margin: 0, padding: 0 }}>
    <h2 style={{textAlign: "center"}}>Send us a message</h2>
    <div className='form-container'>
        <form>
            <div className='input-cnt' >
                <i className='material-icons'>person</i>
                <input type="text" placeholder="Name" name="name" />
            </div>
            <div className='input-cnt'>
                <i className='material-icons'>email</i>
                <input type="text" placeholder="Email" name="email" />
            </div>
            <div className='input-cnt'>
                <i className='material-icons textarea-icon'>message</i>
                <textarea placeholder="Your message here..." name="message" ></textarea>
            </div>
            <div className='input-cnt'>
                <button type="submit">submit</button>
            </div>
        </form>
</div>
</div>
</div>
  )
}

export default Contact