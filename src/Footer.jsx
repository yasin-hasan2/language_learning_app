// import React from 'react';
import { Button } from "@mui/material";
import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer_border ">
          <h3 className="footer_text_style_one">
            All you need to start a travel, adventure site
          </h3>
          <div>
            <h1 className="footer_text_style_two">Hand Crafted Html Pages</h1>
            <Button variant="contained" className="button">
              Contained
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
