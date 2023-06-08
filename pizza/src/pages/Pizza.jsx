import React from 'react'
import Product from '../companents/Product'
import ProductsName from '../companents/ProductsName'

export default function Pizza({setName}) {

    return (
        <>
            <ProductsName />
            <div className='AllProducts'>
                <Product setName={setName}/>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </>
    )
}
