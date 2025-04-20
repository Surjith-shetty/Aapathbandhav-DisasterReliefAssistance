import './App.css';
import Alerts from './components/Alerts';
import GetHelp from './components/GetHelp';
import Home from './components/Home';
import Navbarr from './components/Navbarr';
import Navigation from './components/Navigation';
import Navmenu from './components/Navmenu';
import {useState} from 'react' ;

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
  const [formplctxt,setFormplctxt]= useState("gray-900");

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
      {/* <Alerts pageheadcol={ALertstxtcol} alinfobg={alinfobg} alheadfoot={alheadfoot} albg={albg} disashead={disashead}/> */}
      <GetHelp reqtit={reqtit} formplctxt={formplctxt} reqbg={reqbg} formtxt={formtxt} forminpbg={forminpbg} formbg={formbg}/>


    </>
  );
}

export default App;

