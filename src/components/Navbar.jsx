import React from 'react'
import {Search, Mic, Plus, Bell, Menu} from "lucide-react"
import yimg from "../assets/youtube_logo.png"
import Style from "../css/Navbar.module.css"

import "../css/Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={Style.navbar}>

         <div className={Style.navLeft}>
            <button className={Style.menuBtn}><Menu/></button>

            
         <div className={Style.logo}>
            <img src={yimg} className={Style.logoImg}/>
         </div>
         </div>

         

         <div className={Style.navMiddle}>
            <input type="text" placeholder='Search'/>
            <button className={Style.searchBtn}> <Search/></button>
            <button className={Style.micBtn}><Mic/></button>
         </div>

         <div className={Style.navRight}>
            <button className={Style.plusBtn}><Plus/><p> Create</p></button>
            <button className={Style.bellBtn}><Bell/></button>

            <div className={Style.profile}><h3>R</h3></div>
         </div>
    </nav>
  )
}
export default Navbar