import React from 'react'
import location from '../images/Location.svg'

export default function Location() {
  return (
    <div className='Locatiion'>
        <p>Проверить адрес доставки</p>
        <div className="locationInput">
            <img src={location} alt="" />
            <input type="text" placeholder='Адрес'/>
        </div>
        <button>Проверить</button>  
    </div>
  )
}
