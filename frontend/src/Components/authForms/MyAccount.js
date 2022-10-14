import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FooterPage from '../FooterPage'

function MyAccount() {
    return (
        <div>
            <FooterPage/>
            <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"50px",flexWrap:"wrap"}}  >
                <div className='col-md-5 auth'>      
                    <Button>
                        <Link to="/signUp">
                            <img className='img' src='../images/signup.png'  alt="signup"/>
                        </Link>
                    </Button>
                </div>

                <div className='col-md-5 auth'>
                    <Button>
                        <Link to="/signIn">
                            <img className='img' src='../images/signin.png' alt="signin"/>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default MyAccount