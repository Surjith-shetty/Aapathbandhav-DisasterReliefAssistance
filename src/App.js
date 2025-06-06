import './App.css';
import Alerts from './components/Alerts';
import GetHelp from './components/GetHelp';
import Home from './components/Home';
import Navbarr from './components/Navbarr';
import Navigation from './components/Navigation';
import Navmenu from './components/Navmenu';
import {useState} from 'react' ;
import Volunteer from './components/Volunteer';
import About from './components/About';

import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

function App() {
  const [color,setColor]= useState("light"); //switch mode

  const [headbg,setHeadbg]= useState("blue-200");
  const [headtitle,setHeadtitle]= useState("blue-800");
  const [darkhead,setDarkhead]=useState("dark");    //Navigation
  const [navmenbgcol,setNavmenbgcol]=useState("blue-100");
  const [undcol,setUndcol]=useState("blue-800");
  const [navtxtcol,setNavtxtcol]=useState("blue-900");  //Navmenu
  const [ALertstxtcol,setALertstxtcol]= useState("blue-800");
  const [alheadfoot,setAlheadfoot]=useState("black");
  const [albg,setAlbg]=useState("50");
  const [disashead,setDisashead]=useState("red");
  const [alinfobg,setAlinfobg]=useState("white");  //alerts
  const [reqtit,setReqtit]= useState("blue-800");
  const [reqbg,setReqbg]= useState("blue-50");
  const [formtxt,setFormtxt]= useState("black");
  const [formbg,setFormbg]= useState("white");
  const [forminpbg,setForminpbg]= useState("gray-900");
  const [formplctxt,setFormplctxt]= useState("gray-900");//help
  const [Vreqbg,setVreqbg]= useState("blue-50");
  const [stats,setStats]= useState("blue-900"); //volunteer
  const [contactbg,setContactbg]= useState("blue-100"); //about

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
      setALertstxtcol("white");
      setAlheadfoot("white");
      setAlbg("950");
      setDisashead("orange");
      setAlinfobg("gray-900");
      setReqtit("white");
      setReqbg("blue-950");
      setFormtxt("white");
      setFormbg("gray-900");
      setForminpbg("gray-50");
      setFormplctxt("white");
      setVreqbg("gray-900");
      setStats("blue-300");
      setContactbg("gray-800");
    }
    else
    {
    setColor("light");
    setHeadbg("blue-200");
    setHeadtitle("blue-800");
    setDarkhead("dark");
    setNavtxtcol("blue-900");
    setNavmenbgcol("blue-100");
    setUndcol("blue-800");
    setALertstxtcol("blue-800");
    setAlheadfoot("black");
    setAlbg("50");
    setDisashead("red");
    setAlinfobg("white");
    setReqtit("blue-800");
    setReqbg("blue-50");
    setFormtxt("black");
    setFormbg("white");
    setForminpbg("gray-900")
    setFormplctxt("gray-900");
    setVreqbg("blue-50");
    setStats("blue-900");
    setContactbg("blue-100");
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
    <Router>
      <Navmenu textcol={navtxtcol} bgcol={navmenbgcol} hov={undcol}/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/alerts" element={<Alerts pageheadcol={ALertstxtcol} alinfobg={alinfobg} alheadfoot={alheadfoot} albg={albg} disashead={disashead}/>}/>
          <Route path="/getHelp" element={<GetHelp reqtit={reqtit} formplctxt={formplctxt} reqbg={reqbg} formtxt={formtxt} forminpbg={forminpbg} formbg={formbg}/>}/>
          <Route path="/home/getHelp" element={<GetHelp reqtit={reqtit} formplctxt={formplctxt} reqbg={reqbg} formtxt={formtxt} forminpbg={forminpbg} formbg={formbg}/>}/>
          <Route path="/volunteer" element={<Volunteer Vreqbg={Vreqbg} formplctxt={formplctxt} contactbg={contactbg} formtxt={formtxt} forminpbg={forminpbg} headtitle={headtitle} stats={stats}/>}/>
          <Route path="/home/volunteer" element={<Volunteer formbg={formbg} Vreqbg={Vreqbg} formplctxt={formplctxt} formtxt={formtxt} forminpbg={forminpbg} headtitle={headtitle} stats={stats}/>}/>
          <Route path="/about" element={<About headtitle={headtitle} Vreqbg={Vreqbg} formtxt={formtxt} contactbg={contactbg} />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

