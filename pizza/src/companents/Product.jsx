import React from 'react'
import ProductPizza from '../images/ProductPizza.png'

export default function Product({open , item}) {
  return (
    <div className='Product'>
        <img src={item.img} alt="" />
        <div className="poductInfo">
            <p>{item.name}</p>
            <span>{item.info}</span>
            <div className="buutonPrice">
                <button onClick={() => open(item.id, item.img , item.name , item.info , item.price)} >Выбрать</button>
                <b>от {item.price} ₽</b>
            </div>
        </div>
    </div>
  )
}
