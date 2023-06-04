import React from 'react'
import pizza from '../images/Pizza.svg'

export default function CategoriBox() {
  return (
    <div className='CategoriBox'>
        <img src={pizza} alt="" />
        <p>Пицца</p>
    </div>
  )
}
