import React, { useState } from 'react'
import BackgroundBlack from './BackgroundBlack'
import x from '../images/Cross.svg'

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
        </div>
    </div>
  )
}
