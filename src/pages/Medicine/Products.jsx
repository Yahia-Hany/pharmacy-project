import React from 'react'
import "./products.css"
import SharedCard from '../../shared/SharedCard/SharedCard'
import ProductImage1 from "../Medicine/assets/photos/p1.png"
import ProductImage2 from "../Medicine/assets/photos/p2.png"
import ProductImage3 from "../Medicine/assets/photos/p3.png"
import ProductImage4 from "../Medicine/assets/photos/p4.png"
import ProductImage5 from "../Medicine/assets/photos/p5.png"
import ProductImage6 from "../Medicine/assets/photos/p6.png"
import ProductImage7 from "../Medicine/assets/photos/p7.png"
import ProductImage8 from "../Medicine/assets/photos/p8.png"

 const products= [
    {
    id: 1,
    title: "Hand Sanitizer",
    desc: "20 EGP",
    btntext: "Add to cart",
    img: ProductImage1,
    },
    {
    id: 2,
    title: "Shampoo & Conditioner",
    desc: "17 EGP",
    btntext: "Add to cart",
    img: ProductImage2,
    },
    {
    id: 3,
    title: "Moisturizer Cream",
    desc: "25 EGP",
    btntext: "Add to cart",
    img: ProductImage3,
    },
    {
    id: 4,
    title: "Anti Bactirial Soap",
    desc: "10 EGP",
    btntext: "Add yo cart",
    img: ProductImage4,
    },

]

 const products2=[
    {
    id: 5,
    title: "Paracetamol",
    desc: "35 EGP",
    btntext: "Add to cart",
    img: ProductImage5,
    },
    {
    id: 6,
    title: "Vitamin D3 Tablet",
    desc: "40 EGP",
    btntext: "Add to cart",
    img: ProductImage6,
    },
    {
    id: 7,
    title: "Immunity Tablets",
    desc: "85 EGP",
    btntext: "Add to cart",
    img: ProductImage7,
    },
    {
    id: 8,
    title: "Diabetes Tablets",
    desc: "65 EGP",
    btntext: "Add to cart",
    img: ProductImage8,
    },
  ]

export default function Products() {
  return (
    <>
    <h1 className='heading'>Our Products</h1>
    <div className='box1'>
      {products.map((item) => (
        <SharedCard
        key={item.id}
        title={item.title}
        desc={item.desc}
        btntext={item.btntext}
        ProductImage={item.img}

        />
    

      ))}
    </div>
    <div className='box1'>
      {products2.map((item) => (
        <SharedCard
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
