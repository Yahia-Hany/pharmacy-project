import React from 'react'
import "./contact.css"
export default function Contact() {
  return (
    <>
    <div className="form">
    <div className="container py-5  w-50">
       <div className="">
         <div className="header2">
         <div className=" card-header text-center ">
           <h2>Form</h2>
         </div>
         </div>
         <div className="card-body">
           <form >
             <div className="mb-3">
               <label htmlFor="name" className="form-label">Name</label>
               <input type="text" className="form-control" id="name"placeholder="Enter Your Name"required/>
             </div>
             <div className="mb-3">
               <label htmlFor="job" className="form-label">Job title</label>
               <input type="text" className="form-control" id="job" placeholder="Enter Your Job"  required/>
             </div>
             <div className="mb-3">
               <label htmlFor="email" className="form-label">E-mail</label>
               <input type="email" className="form-control" id="email" placeholder="Enter Your E-mail"  required/>
             </div>
             <div className="mb-3">
               <label htmlFor="age" className="form-label">Age</label>
               <input type="number" className="form-control" id="age" placeholder="Enter Your Age"  required/>
             </div>
             <div className='text'>
             <label htmlFor="texta" className="form-label">Your Message</label>
             <input type="text" className='form-control' id='texta' placeholder='Enter Your Message' required />
             </div><br />
             <div className="b">
               <button type="submit" className=" btn  w-100 ">submit</button>
             </div>
           </form>
         </div>
       </div>
     </div>
    </div>
    </>
  )
}
