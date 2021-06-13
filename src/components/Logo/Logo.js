import React from 'react';
import logo from '../../logo.svg';


const Logo = (props) => {
    let logoText;
    if(props.text === "main") {
        logoText = <p className="site-header-text">
          IN • COG • <br />
          NI • TUS
        </p>
    }
  return (
    <header className="site-header">
        <img src={logo} className="site-header-logo" alt="logo" />
        <h1>{logoText}</h1>
      </header>
  );
};

export default Logo;
