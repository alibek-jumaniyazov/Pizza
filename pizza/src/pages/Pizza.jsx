import React from 'react'
import Product from '../companents/Product'
import ProductsName from '../companents/ProductsName'

export default function Pizza({ setNav, setNavHome }) {
  
  return (
    <>
    <ProductsName/>
    <div className='AllProducts'>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>
    </>
  )
}
