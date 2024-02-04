import React from "react";
import bannervid from "../images/Banner.mov";
import "../App.css";

export default function Homepage() {
  return (
    <div className='homepage'>
      <video className='banner' src={bannervid} autoPlay loop muted />
      <div className='content'>
        <h2 id='Lumiere'> Lumiere</h2>
      </div>
    </div>
  );
}
