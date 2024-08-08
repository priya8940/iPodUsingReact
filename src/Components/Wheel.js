import React, { Component } from 'react'
import { FaForward } from 'react-icons/fa';
import { PiPlayPauseFill } from "react-icons/pi";
import { AiFillBackward } from "react-icons/ai";
import './Wheel.css'

class Wheel extends Component {
  render() {
    return (
      <div className='wheel-container'>
        <div className='wheel'>
          <div className='control' id="menu">
            <div>MENU</div>
          </div>
          <div className='control' id='farward'>
            <FaForward />
          </div>
          <div className='control' id='play-pause'>
          <PiPlayPauseFill />
          
          </div>
          <div className='control' id='reverse'>
          <AiFillBackward />
          </div>
        </div>
        <div className='blank'>

        </div>
        
      </div>
    )
  }
}
export default Wheel;