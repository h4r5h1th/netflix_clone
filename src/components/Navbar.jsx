import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Netflixlogo from '../assests/Netflixlogo.png'
import avatar from '../assests/avatar.jpg'
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [show, HandleShow] = useState(false);
  const navigate = useNavigate();
  const transitionNavBar = () =>{
    if(window.scrollY > 100){
      HandleShow(true);
    }else{
      HandleShow(false);
    }
  }

  useEffect(() =>{
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, []);
  return (
    <div className={`nav ${show && "nav__top"}`}>
    <div className='nav__content'>
        <img
          onClick={()=> navigate("/")}
         className='nav__logo' src = {Netflixlogo} alt='' />
        <img
         onClick={()=> navigate("/profile")}
         className='nav__avatar' src={avatar} alt='' />
    </div>
    </div>
  )
}

export default Navbar