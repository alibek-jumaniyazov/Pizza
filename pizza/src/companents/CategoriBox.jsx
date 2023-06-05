import React from 'react'
import pizza from '../images/Pizza.svg'
import { Link } from 'react-router-dom'

export default function CategoriBox({HeaderNav}) {
  return (
    <Link to={"/pizza"} >
      <div className='CategoriBox' onClick={() => HeaderNav()}>
        <img src={pizza} alt="" />
        <p>Пицца</p>
      </div>
    </Link>
  )
}
