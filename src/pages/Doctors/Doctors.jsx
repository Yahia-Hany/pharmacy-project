import React from 'react'
import DoctorCard from '../../shared/SharedCard/SharedCard' 
import "./doctors.css"
import DoctorImage1 from "../Doctors/assets/photos/d3.png"
import DoctorImage2 from "../Doctors/assets/photos/d6.jpg"
import DoctorImage3 from "../Doctors/assets/photos/d7.png"
import DoctorImage4 from "../Doctors/assets/photos/d8.jpg"
 const doctors= [
    {
    id: 1,
    title: "paediatrics",
    desc: "specialist to care and treat children",
    btntext: "Read More",
    img: DoctorImage1,
    },
    {
    id: 2,
    title: "Dentist",
    desc: "specialists for dental issues and treatment",
    btntext: "Read More",
    img: DoctorImage2,
    },
    {
    id: 3,
    title: "Cardiologist",
    desc: "Specialized Phisican Heart",
    btntext: "Read More",
    img: DoctorImage3,
    },
    {
    id: 4,
    title: "Urology",
    desc: "specialists for disorders of urinary tract",
    btntext: "Read More",
    img: DoctorImage4,
    },
]

export default function Doctors() {
  return (
    <>
    <h1 className='heading'>doctors</h1>
    <div className='box'>
      {doctors.map((item) => (
        <DoctorCard
        key={item.id}
        title={item.title}
        desc={item.desc}
        btntext={item.btntext}
        ProductImage={item.img}

        />
    

      ))}
    </div>
    </>
  )
}