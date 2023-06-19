import React, { useState } from 'react'
import BackgroundBlack from './BackgroundBlack'

export default function Karzinka({karzinkaBox , setKarzinkaBox ,bgBlack,setBgBlack}) {

    function CloseBg(){
      setKarzinkaBox('none')
      setBgBlack('none')
    }

  return (
    <div className={karzinkaBox}>
        <BackgroundBlack bgBlack={bgBlack} CloseBg={CloseBg}/>
        <div className="karzinka">

        </div>
    </div>
  )
}
