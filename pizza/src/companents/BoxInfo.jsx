import { useState } from 'react'
import x from '../images/Cross.svg'
import ProductPizza from '../images/ProductPizza.png'
import sir from '../images/Group 83.svg'


export default function BoxInfo({ setName, name }) {

    function close() {
        setName('none')
    }

    const [productBoxImg, setProductBoxImg] = useState("300px")
    const [hamir, setHamir] = useState('0%')
    const [sm, setSm] = useState('0%')
    const [colorHamir1, setColorHamir1] = useState('#ffffff')
    const [colorHamir2, setColorHamir2] = useState('#191919')

    const [colorSm1, setColorSm1] = useState('#ffffff')
    const [colorSm2, setColorSm2] = useState('#191919')
    const [colorSm3, setColorSm3] = useState('#191919')


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
        <div className={name}>
            <div className="productInfo">
                <div className="productZakaz">
                    <div className="productImgBox">
                        <img style={{ width: `${productBoxImg}` }} src={ProductPizza} alt="" />
                    </div>
                    <div className="productBoxInfo">
                        <div className="productBoxInfo_tur">Пепперони по-деревенски</div>
                        <div className="savzavot">
                            <div className="savzavotBox">
                                <div className="savzavotBorder">
                                    <img src={sir} alt="" />
                                </div>

                                <p>Моцарелла</p>
                            </div>
                            <div className="savzavotBox">
                                <div className="savzavotBorder">
                                    <img src={sir} alt="" />
                                </div>

                                <p>Моцарелла</p>
                            </div>
                            <div className="savzavotBox">
                                <div className="savzavotBorder">
                                    <img src={sir} alt="" />
                                </div>

                                <p>Моцарелла</p>
                            </div>
                            <div className="savzavotBox">
                                <div className="savzavotBorder">
                                    <img src={sir} alt="" />
                                </div>

                                <p>Моцарелла</p>
                            </div>
                        </div>
                        <div className="HamirProductBox">
                            <p style={{ color: colorHamir1 }} onClick={() => hamirLeft()}>Традиционное</p>
                            <p style={{ color: colorHamir2 }} onClick={() => hamirRight()}>Тонкое</p>
                            <div style={{ left: hamir }} className="bgBox"></div>
                        </div>
                        <div className="PizzaSm">
                            <p style={{ color: colorSm1 }} onClick={() => hsmRight()}>20 см</p>
                            <p style={{ color: colorSm2 }} onClick={() => smtop()}>28 см</p>
                            <p style={{ color: colorSm3 }} onClick={() => smLeft()}>33 см</p>
                            <div style={{ left: sm }} className="bgBoxsm"></div>
                        </div>
                        <div className="savzavot">
                            <div className="savzavotBox">
                                <div className="savzavotBorder">
                                    <img src={sir} alt="" />
                                </div>

                                <p>Моцарелла</p>
                            </div>
                            <div className="savzavotBox">
                                <div className="savzavotBorder">
                                    <img src={sir} alt="" />
                                </div>

                                <p>Моцарелла</p>
                            </div>
                            <div className="savzavotBox">
                                <div className="savzavotBorder">
                                    <img src={sir} alt="" />
                                </div>

                                <p>Моцарелла</p>
                            </div>
                            <div className="savzavotBox">
                                <div className="savzavotBorder">
                                    <img src={sir} alt="" />
                                </div>

                                <p>Моцарелла</p>
                            </div>
                        </div>
                        <div className="productBoxPriceInfo">
                            <div className="priceInfo">
                                <p>Итого: 379 ₽</p>
                                <span>400 г</span>
                            </div>
                            <div className="productBoxKarzinka">
                                <button>Добавить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className='x' src={x} alt="" onClick={() => close()} />
        </div>
    )
}