import React from "react";
import "../App.css";

export default function FooterBottom() {
  return (
    <div className='bottom'>
      <div className='logo'>
        <h2>Lumiere</h2>
        <span className='copyright'>&#169;</span>
      </div>

      <div className='bottompt2'>
        <div className='contact'>
          <h2>Customer Service</h2>
          <h2>About Us</h2>
          <h2> Privacy</h2>
          <h2>Accessibiltiy</h2>
        </div>

        <div className='socials'>
          <h2 className='followus'>Socials:</h2>
          <div className='socialitems'>
            <a href='https://www.instagram.com/'>instagram</a>
            <a href='https://www.facebook.com/'>facebook</a>
            <a href='https://twitter.com/?lang=en'> X</a>
          </div>
        </div>
      </div>
    </div>
  );
}
