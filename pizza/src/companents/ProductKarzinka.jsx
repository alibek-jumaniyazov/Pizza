import React from 'react'
import karzinkaImg from '../images/karzinkaImg.png'

export default function ProductKarzinka() {
  return (
    <div className='ProductKarzinka'>
        <img src={karzinkaImg} alt="" />
        <div className="productKarzinkaInfo">
            <div className="karzinkaInfoText">
                <p>Чикен Сладкий Чили</p>
                <span>Традиционное тесто, 23 см</span>
            </div>
            <div className="karzinkaInfoCount">
                <div className="count">
                    <p>-</p>
                    <span>1</span>
                    <p>+</p>
                </div>
                <p className='karzinkaInfoPrice'>499 ₽</p>
            </div>
        </div>
    </div>
  )
}
