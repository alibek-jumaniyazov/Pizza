import React from 'react'
import ProductPizza from '../images/ProductPizza.png'

export default function Product({open}) {
  return (
    <div className='Product'>
        <img src={ProductPizza} alt="" />
        <div className="poductInfo">
            <p>Пепперони по-деревенски</p>
            <span>Огурцы маринованные, Пепперони, Сыр Моцарелла...</span>
            <div className="buutonPrice">
                <button onClick={() => open()} >Выбрать</button>
                <b>от 399 ₽</b>
            </div>
        </div>
    </div>
  )
}
