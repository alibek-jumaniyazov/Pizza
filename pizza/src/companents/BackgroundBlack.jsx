import React, { useState } from 'react'

export default function BackgroundBlack({bgBlack, CloseBg , setBgBlack}) {

    function CloseBg(){
        setKarzinkaBox('none')
        setBgBlack('none')
      }
  
    return (
    <div onClick={() => CloseBg()} className={bgBlack}>

    </div>
  )
}
