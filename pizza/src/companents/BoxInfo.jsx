import { useState } from 'react'
import x from '../images/Cross.svg'
import ProductPizza from '../images/ProductPizza.png'
import sir from '../images/Group 83.svg'
import BackgroundBlack from './BackgroundBlack'
import BoxCompanentSm from './BoxCompanentSm'
import BoxCompanentHamir from './BoxCompanentHamir'


export default function BoxInfo({ setName, name }) {

    function close() {
        setName('none')
        setBgBlack('none')
    }

    const [productBoxImg, setProductBoxImg] = useState("300px")
    const [bgBlack , setBgBlack] = useState('none')


    return (
        <div className={name} >
            <BackgroundBlack bgBlack={bgBlack} setBgBlack={setBgBlack}/>
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
                        <BoxCompanentHamir/>
                        <BoxCompanentSm  setProductBoxImg={setProductBoxImg}/>
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