import React from 'react'
import p1 from "../Home/assets/photos/p1.png"
import "./homecomp.css"
import BtnComp from '../../shared/BtnComp/BtnComp'
export default function HomeComp() {
  return (
    <div className='main'> 
        <div className="left">
            <h2>we are here for your care</h2>
            <h1>We are the best pharmacy</h1>
            <p>we are here for your care 24/7.any help just call us</p>
            <BtnComp btntext={"make an appointment"}/>
        </div>
        <div className="right">
            <img src={p1} alt="not found"/>
        </div>
    </div>
  )
}
