// import React from 'react';
import "./App.css";
import ModalShow from "./ModalShow";

const Banner = () => {
  return (
    <header className="banner_bg header">
      <div className="banner_style">
        <div className="banner_text">
          <h1> Language Teaching center </h1>
          <h4>Click and Chose your Language</h4>
        </div>
        <ModalShow></ModalShow>
      </div>
    </header>
  );
};

export default Banner;
