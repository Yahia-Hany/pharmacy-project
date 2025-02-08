import React from 'react'
import logo from "../header/assets/photos/logo.png"
import "./SharedNav.css"
import BtnComp from '../BtnComp/BtnComp'
export default function SharedNav() {
  return (
    <div className='header'>
        <a href="#" class="logo"/>
        <img src={logo} alt="not found"/>
    <nav className="headbar">
        <a href="/">Home</a>
        <a href="/Doctors">Doctors</a>
        <a href="/Medicine">Medicine</a>
        <a href="/Contact">Contact</a>
    </nav>
    <BtnComp btntext={"helpline"}/>
    </div>
  )
}
