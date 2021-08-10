import React from 'react'
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import Background from './Background';

const Error = () => {
    return (
    <div style={{
      width:"100vw",
      height:"100vh",
      textAlign:"center",
      color: '#ffffff',
      display:"grid",
      placeItems:"center",
    }}>
      <Background/>
      <div>
        <img src={logo} alt="logo" className="logo" />
        <h1 style={{
          margin: "20px 0px"
        }}>Error 404: Page Not Found</h1>
        <Link to="/" style={{
          textDecoration:"none",
          padding:"5px 10px",
          color:"#ffffff",
          background: "#021305",
          borderRadius:"5px",
          fontWeight:"800",
        }}>Back to Home</Link>
      </div>
    </div>
  );
}

export default Error
