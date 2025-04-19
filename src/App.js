import './App.css';
import Alerts from './components/Alerts';
import Home from './components/Home';
import Navbarr from './components/Navbarr';
import Navigation from './components/Navigation';
import Navmenu from './components/Navmenu';
import {useState} from 'react' ;

function App() {
  const [color,setColor]= useState("light");

  const [headbg,setHeadbg]= useState("blue-200  ");
  const [headtitle,setHeadtitle]= useState("blue-800");
  const [darkhead,setDarkhead]=useState("dark");    //Navigation
  const [navmenbgcol,setNavmenbgcol]=useState("blue-100");
  const [undcol,setUndcol]=useState("blue-800");
  const [navtxtcol,setNavtxtcol]=useState("blue-900");  //Navmenu

  const Changemode = () =>
  {
    if(color=="light")
    {
      setColor("dark");
      setHeadbg("blue-950");
      setHeadtitle("white");
      setDarkhead("light");
      setNavtxtcol("white");
      setNavmenbgcol("blue-900");
      setUndcol("white");
    }
    else
    {
    setColor("light");
    setHeadbg("blue-100");
    setHeadtitle("blue-800");
    setDarkhead("dark");
    setNavtxtcol("blue-900");
    setNavmenbgcol("white");
    setUndcol("blue-800");
  }
}


  return (
    <>
      <nav className={`head bg-${headbg} flex py-3 sticky top-0`}>
        <div align="center" className={`title text-${headtitle} text-3xl font-bold justify-center italic`}>
        <span>AapathBandhav 🤝</span>
        </div>
        <div>
        <div className="title px-5 text-2xl flex" align="right">   
        <button className='login bg-blue-600 text-white hover:bg-blue-700'><span className='btxt text-xl'>Sign Up</span></button>
        <button className='login bg-blue-100 hover:bg-blue-600 hover:text-blue-100'><span className='btxt text-xl'>Log In</span></button>
        <span class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" onChange={Changemode} id="switchCheckDefault"/>
            <div className={`text-${darkhead} text-xl py-1`}>DarkMode</div >
            </span>
        </div>
        </div>
    </nav>
      <Navmenu textcol={navtxtcol} bgcol={navmenbgcol} hov={undcol}/>
      {/* <Navbarr/> */}
      {/* <Home /> */}
      <Alerts/>
    </>
  );
}

export default App;

