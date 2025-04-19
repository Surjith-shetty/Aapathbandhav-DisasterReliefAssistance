import './Navmenu_.css';

export default function Navmenu(props) {
  return (
    <div className={`menu sticky top-0 bg-${props.bgcol} font-bold`} style={{height:50}}> 
      <a className={`home mb-1 p-[2px] no-underline text-${props.textcol} font-bold hover:border-b-2 border-${props.undcol}`} href="./components/Home">Home</a>
      <a className={`alerts mb-1 p-[2px] no-underline text-${props.textcol} font-bold hover:border-b-2 border-${props.undcol}`} href="./components/Alerts">Alerts</a>
      <a className={`get_help mb-1 p-[2px] no-underline text-${props.textcol} font-bold hover:border-b-2 border-${props.undcol}`} href="">Get Help</a>
      <a className={`relief_centers mb-1 p-[2px] no-underline text-${props.textcol} font-bold hover:border-b-2 border-${props.undcol}`} href="">Relief Centers</a>
      <a className={`volunteer mb-1 p-[2px] no-underline text-${props.textcol} font-bold hover:border-b-2 border-${props.undcol}`} href="">Volunteer</a>
      <a className={`about mb-1 p-[2px] no-underline text-${props.textcol} font-bold hover:border-b-2 border-${props.undcol}`} href="">About</a>
    </div>
  )
}
