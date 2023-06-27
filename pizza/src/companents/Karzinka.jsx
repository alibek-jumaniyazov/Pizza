import React, { useState } from 'react'
import BackgroundBlack from './BackgroundBlack'
import x from '../images/Union.svg'
import ProductKarzinka from './ProductKarzinka'

export default function Karzinka({karzinkaBox , setKarzinkaBox ,bgBlack,setBgBlack}) {

    function CloseBg(){
      setKarzinkaBox('none')
      setBgBlack('none')
    }

  return (
    <div className={karzinkaBox}>
        <BackgroundBlack bgBlack={bgBlack} CloseBg={CloseBg}/>
        <div className="karzinka">
          <div className="karzinkaTitle">
            <p>Ваш заказ</p>
            <img src={x} alt="" />
          </div>
          <div className="karzinkaAllProduct">
            <ProductKarzinka/>
            <ProductKarzinka/>
            <ProductKarzinka/>
            <ProductKarzinka/>
            <ProductKarzinka/>
            <ProductKarzinka/>
            <ProductKarzinka/>
            <ProductKarzinka/>
            <ProductKarzinka/>
            <ProductKarzinka/>
          </div>
          <div className="karzinkaAllPrice">
              <p>Итого: 2 379 ₽</p>
              <button>Оформить заказ</button>
          </div>
        </div>
    </div>
  )
}
