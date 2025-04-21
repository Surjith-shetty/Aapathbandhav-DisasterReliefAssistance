import './Navmenu_.css';
import {Link} from 'react-router-dom' ;

export default function Navmenu(props) {
  return (
    <div className={`menu sticky top-0 bg-${props.bgcol} font-bold`} style={{height:50}}> 
      <Link className={`home mb-1 p-[2px] no-underline text-${props.textcol} font-bold hover:border-b-2 border-${props.undcol}`} to="Home">Home</Link>
      <Link className={`get_help mb-1 p-[2px] no-underline text-${props.textcol} font-bold hover:border-b-2 border-${props.undcol}`} to="GetHelp">Get Help</Link>
      <Link className={`volunteer mb-1 p-[2px] no-underline text-${props.textcol} font-bold hover:border-b-2 border-${props.undcol}`} to="Volunteer">Volunteer</Link>
      <Link className={`alerts mb-1 p-[2px] no-underline text-${props.textcol} font-bold hover:border-b-2 border-${props.undcol}`} to="Alerts">Alerts</Link>
      <Link className={`relief_centers mb-1 p-[2px] no-underline text-${props.textcol} font-bold hover:border-b-2 border-${props.undcol}`} to="">Relief Centers</Link>
      <Link className={`about mb-1 p-[2px] no-underline text-${props.textcol} font-bold hover:border-b-2 border-${props.undcol}`} to="About">About</Link>
    </div>
  )
}
