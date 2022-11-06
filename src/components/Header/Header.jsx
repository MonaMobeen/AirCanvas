import React from 'react'
import './Header.css'
 
import logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menueOpened, setmenueOpened] = React.useState(false);
  return (
    <div className="header">
      <img className='logo' src={logo} alt="" />
      {menueOpened === false && mobile === true ? (
        <div 
        style={{backgroundColor:'var(--appColor)', padding:"0.5rem", borderRadius:'5px'}}
        onClick={()=> setmenueOpened(true)}
  ><img src={Bars} alt="" style={{width: '1.5 rem', height: '1.5 rem'}}/></div>

      ) : (<ul className='header-menue'>
        <li  key="{home}"  >
          <Link
          onClick={() =>setmenueOpened(false)}
          activeclass="active"
          to="home"
          spy={true}
          smooth={true}
>
  Home</Link>
           </li>
        <li  key="{programs}" >
        <Link onClick={() => setmenueOpened(false)}
        activeclass="active"
        to="programs"
        spy={true}
        smooth={true}
        >Programs</Link> </li>
        {/* <li onClick={() => setmenueOpened(false)}><link>Programs</link> </li> */}
        <li  key="{why us}"
        ><Link    onClick={() => setmenueOpened(false)}
        activeclass="active"
        to="why us"
        spy={true}
        smooth={true}>why us</Link> </li>
        <li  key="{testimonials}"  ><Link
        onClick={() => setmenueOpened(false)}
        activeclass="active"
        to="testimonials"
        spy={true}
        smooth={true}
         
        >Testimonials</Link> </li>
      </ul>)}


    </div>
  )
}

export default Header;
