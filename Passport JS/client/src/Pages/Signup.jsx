import React from 'react'
import "./style.css"

function Signup() {

  const googleAuth = () => {
    window.open("http://localhost:8000/auth/google/callback", "_self");

    // "_self" -- shows google prompt in same page
  }

  return (
    <div className='container-box'>
        <span>Create Account</span>
        <hr />
        <input type="text" placeholder='Username' />
        <br />
        <input type="password" placeholder='Password' />
        <br />
        <button>Signup</button>
        <hr />
        OR 
        <br />
        <br />
        <button onClick={googleAuth}>Google Signup</button>
        <br />
        <button>Facebook Signup</button>
    </div>
  )
}

export default Signup