import React, { useState } from 'react'
import BoxInfo from '../companents/BoxInfo'
import Product from '../companents/Product'
import ProductsName from '../companents/ProductsName'

export default function Pizza({}) {

    const [name, setName] = useState('none')
    function open(){
        setName('boxInfo')
    }

    return (
        <>
            <ProductsName />
            <div className='AllProducts'>
                <Product open={open}/>
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
            <BoxInfo setName={setName} name={name}/>
        </>
    )
}
