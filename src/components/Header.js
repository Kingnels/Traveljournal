import React from 'react';
import img from "./images/globe.png"

function Header() {
  return (
    <div>
        <nav className='navbar'>
            <div className="cont">
            {/* <h2 className="cont"><img  src={img} alt="" className='globe'/>My travel-journal</h2> */}
                <img  src={img} alt="" className='globe'/>
                <h2 className='title'>My travel-journal</h2>
            </div>
        </nav>
    </div>
  )
}

export default Header