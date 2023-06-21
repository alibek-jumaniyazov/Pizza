import React from 'react'
import { useState } from 'react'

export default function BoxCompanentHamir() {

    const [colorHamir1, setColorHamir1] = useState('#ffffff')
    const [colorHamir2, setColorHamir2] = useState('#191919')
    const [hamir, setHamir] = useState('0%')
    

    function hamirRight() {
        setHamir('50%')
        console.log('ol');
        setColorHamir1('#191919')
        setColorHamir2('#ffffff')
    }
    function hamirLeft() {
        setHamir('0%')
        setColorHamir1('#ffffff')
        setColorHamir2('#191919')
    }

    return (
        <div className="HamirProductBox">
            <p style={{ color: colorHamir1 }} onClick={() => hamirLeft()}>Традиционное</p>
            <p style={{ color: colorHamir2 }} onClick={() => hamirRight()}>Тонкое</p>
            <div style={{ left: hamir }} className="bgBox"></div>
        </div>
    )
}
