import React, { useState } from 'react'

export default function BoxCompanentSm({setProductBoxImg}) {

    const [colorSm1, setColorSm1] = useState('#ffffff')
    const [colorSm2, setColorSm2] = useState('#191919')
    const [colorSm3, setColorSm3] = useState('#191919')
    const [sm, setSm] = useState('0%')


    function hsmRight() {
        setProductBoxImg('300px')
        setSm('0%')
        setColorSm1('#ffffff')
        setColorSm2('#191919')
        setColorSm3('#191919')
    }
    
    function smtop() {
        setProductBoxImg('400px')
        setSm('34%')
        setColorSm1('#191919')
        setColorSm2('#ffffff')
        setColorSm3('#191919')
    }

    function smLeft() {
        setProductBoxImg('450px')
        setSm('67%')
        setColorSm1('#191919')
        setColorSm2('#191919')
        setColorSm3('#ffffff')
    }


    return (
        <div className="PizzaSm">
            <p style={{ color: colorSm1 }} onClick={() => hsmRight()}>20 см</p>
            <p style={{ color: colorSm2 }} onClick={() => smtop()}>28 см</p>
            <p style={{ color: colorSm3 }} onClick={() => smLeft()}>33 см</p>
            <div style={{ left: sm }} className="bgBoxsm"></div>
        </div>
    )
}
