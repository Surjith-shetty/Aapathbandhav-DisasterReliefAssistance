import React,{useState} from 'react'
import './Nav.css';

export default function Navigation() {
    const [headbg,useHeadbg]= useState("blue");
    const [headtitle,useHeadtitle]= useState("blue");
    

  return (

    <nav className={`head bg-${headbg}-100 flex py-3 sticky`}>
        <div align="center" className={`title text-${headtitle}-800 text-3xl font-bold justify-center italic`}>
        <span>Aapathbandhav 🤝</span>
        </div>
        <div>
        <div className="title px-5 text-2xl flex" align="right">   
        <button className='login bg-blue-600 text-white hover:bg-blue-700'><span className='btxt text-xl'>Sign Up</span></button>
        <button className='login bg-blue-100 hover:bg-blue-600 hover:text-blue-100'><span className='btxt text-xl'>Log In</span></button>
        <span class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
            <div className="dark text-xl py-1">DarkMode</div >
            </span>
        </div>
        </div>
    </nav>
  )
}
