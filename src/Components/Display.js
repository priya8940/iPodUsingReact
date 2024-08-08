import React, { Component } from 'react'
import './Display.css';
import Wheel from './Wheel';

export default class Display extends Component {
  render() {
    return (
      <>
        <div>
        <div className="display">
          <div className='Screen-show'>
             <p>Wallpaper</p>
             <Wheel/>
          </div>
        </div>
       </div>
       {/* <NavWheel/> */}
      </>
      
      
    )
  }
}

