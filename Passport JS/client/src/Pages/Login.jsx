import React from 'react'
import "./style.css"

function Login() {

    const googleAuth = () => {
        window.open("http://localhost:8000/auth/google/callback", "_self");

        // "_self" -- shows google prompt in same page
    }

  return (
    <div className='container-box'>
        <span>Login</span>
        <hr />
        <input type="text" placeholder='Username' />
        <br />
        <input type="password" placeholder='Password' />
        <br />
        <button>Login</button>
        <hr />
        OR
        <br />
        <br />
        <button onClick={googleAuth}>Google Login</button>
        <br />
        <button>Facebook Login</button>
    </div>
  )
}

export default Login