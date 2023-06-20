import React, { useState } from 'react'

export default function BackgroundBlack({bgBlack, CloseBg , setBgBlack}) {

    return (
    <div onClick={() => CloseBg()} className={bgBlack}>

    </div>
  )
}
