import { useState } from 'react'
import x from '../images/Cross.svg'


export default function BoxInfo({setName , name}) {

    function close() {
        setName('none')
    }


    return (
        <div className={name}>
            <div className="productInfo">
                <p>❤️</p>
            </div>
            <img src={x} alt="" onClick={() => close()} />
        </div>
    )
}