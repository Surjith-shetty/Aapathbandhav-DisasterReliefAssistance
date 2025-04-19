import React,{Link} from 'react'
import './Navmenu_.css';

export default function Navmenu() {
  return (
    <div className='menu sticky top-0 bg-white' style={{height:50}}>
      <a href="./components/Home">Home</a>
      <a href="">Alerts</a>
      <a href="">Get Help</a>
      <a href="">Relief Centers</a>
      <a href="">Volunteer</a>
      <a href="">About</a>
    </div>
  )
}
