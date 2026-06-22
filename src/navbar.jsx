import "./navbar.css";
import {useState,useEffect} from "react";
function Navbar(){
 const [menuOpen,setMenuopen]=useState(false);

 useEffect(()=>{
  const handleResize=()=>{
    if(window.innerWidth>768) setMenuopen(false);
  };
  window.addEventListener("resize",handleResize);
  return()=>window.removeEventListener("resize",handleResize);

  // Mount phase → Add the resize listener.
// During component life → Listener keeps watching window size changes.
// Unmount phase → Remove the listener to clean up.

 },[]);

 //prevent body scroll when menu is open

 useEffect(()=>{
  document.body.style.overflow= menuOpen ?"hidden":"";
  return ()=> {document.body.style.overflow=""};

  /*Menu opens → Page scrolling disabled.
Menu closes → Page scrolling enabled.
Component unmounts → Reset scrolling just in case.*/
 },[menuOpen]);

 const navLinks=["Home","About","Skills","Project","Contact"];

return <div>
    <div className="navdiv1">
<p>
  Anish<span className="dot">.</span>
</p>

{/* destop */}
<div className="navbtn">
    {navLinks.map((link)=>(
      <button key={link}
      onClick={() =>
document.getElementById(`${link}`)
.scrollIntoView({behavior:"smooth"})
}
      >{link}</button>
    ))}
    <button className="resumebtn">Resume</button>
</div>

{/* hamburger button */}
<button 
className={`hamburger${menuOpen ? " hamburger-open" : ""}`}
onClick={()=>setMenuopen((prev)=>!prev)}
>
  <span/>
  <span/>
  <span/>
  {/* These are the three horizontal lines of the hamburger icon. */}
</button>
</div>


{/* mobile */}
<div className={`mobile-menu${menuOpen ? " mobile-menu-open" : ""}`}>
  <nav className="mobile-nav">
    {navLinks.map((link)=>(
      <button key= {link} onClick={()=>{setMenuopen(false)

        document.getElementById(`${link}`)
.scrollIntoView({behavior:"smooth"})
      }}>
        {link}
      </button>
    ))}
    <button className="resumebtn mobile-resumebtn" onClick={()=>setMenuopen(false)}>Resume</button>
  </nav>
</div>

{/* backdrop */}
{menuOpen &&
(
        <div className="menu-backdrop" onClick={() => setMenuOpen(false)} />

        /*Menu opens → Backdrop appears behind it.
Click backdrop → Menu closes, backdrop disappears.
Menu closed → Backdrop isn’t rendered at all. */
)}
</div>
}
export default Navbar;