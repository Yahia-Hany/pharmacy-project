import React from 'react'
import SharedNav from '../shared/header/SharedNav'
import SharedFooter from '../shared/footer/SharedFooter'
import {  BrowserRouter ,Route , Routes} from "react-router-dom"
import HomeComp from '../pages/Home/HomeComp'
import Doctors from '../pages/Doctors/Doctors'
import Contact from '../pages/Contact/Contact'
import Products from '../pages/Medicine/Products'
export default function Layout() {
  return (
    <>
    {/* nav bar*/ }
    <SharedNav/>
    {/* routes*/ }
    <BrowserRouter>
    <Routes>
        <Route path="/" element={
            <>
            <HomeComp/>
            </>
        }
        />
        <Route path="/Doctors" element={
            <>
            <Doctors/>
            </>
        }
        />
        <Route path="/Medicine" element={
            <>
            <Products/>
            </>
        }
        />
        <Route path="/Contact" element={
            <>
            <Contact/>    
            </>
        }
        />
    </Routes>
    </BrowserRouter>
    {/* footer */ }
    <SharedFooter/>
    </>
  )
}
