import React from 'react'
import logo from '../logo.svg';
import '../App.css';

function Home() {

  const logout = () => {
    window.open("http://localhost:8000/auth/logout", "_self");

    // "_self" -- shows google prompt in same page
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <button onClick={logout}> Logout </button>
      </header>
    </div>
  )
}

export default Home