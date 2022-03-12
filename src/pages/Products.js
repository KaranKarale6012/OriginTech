import React from 'react'
import Navbar from '../Components/Navbar'
import Product from '../Components/Product'
import Footer from '../Components/Footer'
import ProductHero from '../Components/ProductHero'

function Products() {
  return (
    <div>
        <Navbar />
        <ProductHero />
        <Product />
        <Footer/>

    </div>
  )
}

export default Products