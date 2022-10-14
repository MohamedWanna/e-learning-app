import React from 'react'
import { MdCopyright } from "react-icons/md";

function FooterPage() {
  return (
    <div>
        <footer className='footer footer-black footer-big footer-position'>   
            <div className='footer-copyright'>
                <MdCopyright/> All Copyrights reserved to Success Way 2022
            </div>
        </footer>
    </div>
  )
}

export default FooterPage