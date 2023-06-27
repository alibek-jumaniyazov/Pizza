import React, { useState } from 'react'
import BoxInfo from '../companents/BoxInfo'
import Product from '../companents/Product'
import ProductsName from '../companents/ProductsName'
import ProductPizza from '../images/ProductPizza.png'
import ProductPizza2 from '../images/pizza2.png'
export default function Pizza({ }) {

    const [name, setName] = useState('none')
    const [box, setBox] = useState([])
    function open(id, img, name, info, price) {
        setName('boxInfo')
        setBox([
            {
                id: id,
                img: img,
                name: name,
                info: info,
                price: price,
            }
        ])
        console.log(box);
    }



    const [product, setProduct] = useState([
        {
            id: 1,
            img: ProductPizza,
            name: "Пепперони по-деревенски",
            info: "Огурцы маринованные, Пепперони, Сыр Моцарелла...",
            price: 399,
        },
        {
            id: 2,
            img: ProductPizza2,
            name: "Пепперони ",
            info: "Огурцы маринованные, Пепперони, Сыр Моцарелла...",
            price: 399,
        },
        {
            id: 3,
            img: ProductPizza,
            name: "Пепперони по-деревенски",
            info: "Огурцы маринованные, Пепперони, Сыр Моцарелла...",
            price: 399,
        },
        {
            id: 4,
            img: ProductPizza,
            name: "Пепперони по-деревенски",
            info: "Огурцы маринованные, Пепперони, Сыр Моцарелла...",
            price: 399,
        },
        {
            id: 5,
            img: ProductPizza,
            name: "Пепперони по-деревенски",
            info: "Огурцы маринованные, Пепперони, Сыр Моцарелла...",
            price: 399,
        },
        {
            id: 6,
            img: ProductPizza,
            name: "Пепперони по-деревенски",
            info: "Огурцы маринованные, Пепперони, Сыр Моцарелла...",
            price: 399,
        },
        {
            id: 7,
            img: ProductPizza,
            name: "Пепперони по-деревенски",
            info: "Огурцы маринованные, Пепперони, Сыр Моцарелла...",
            price: 399,
        },
        {
            id: 8,
            img: ProductPizza,
            name: "Пепперони по-деревенски",
            info: "Огурцы маринованные, Пепперони, Сыр Моцарелла...",
            price: 399,
        },
        {
            id: 9,
            img: ProductPizza,
            name: "Пепперони по-деревенски",
            info: "Огурцы маринованные, Пепперони, Сыр Моцарелла...",
            price: 399,
        },
        {
            id: 10,
            img: ProductPizza,
            name: "Пепперони по-деревенски",
            info: "Огурцы маринованные, Пепперони, Сыр Моцарелла...",
            price: 399,
        },
        {
            id: 11,
            img: ProductPizza,
            name: "Пепперони по-деревенски",
            info: "Огурцы маринованные, Пепперони, Сыр Моцарелла...",
            price: 399,
        },
        {
            id: 12,
            img: ProductPizza,
            name: "Пепперони по-деревенски",
            info: "Огурцы маринованные, Пепперони, Сыр Моцарелла...",
            price: 399,
        },
    ])
    return (
        <>
            <ProductsName />
            <div className='AllProducts'>
                {
                    product.map((item, index) => (
                        <Product key={index} open={open} item={item} />
                    ))
                }
            </div>
            {
                box.map((item) => (
                    <BoxInfo setName={setName} name={name} item={item} />
                ))
            }

        </>
    )
}
