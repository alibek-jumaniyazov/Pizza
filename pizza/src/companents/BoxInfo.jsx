import { useState } from 'react'
import x from '../images/Cross.svg'
import ProductPizza from '../images/ProductPizza.png'
import sir from '../images/Group 83.svg'
import BackgroundBlack from './BackgroundBlack'
import BoxCompanentSm from './BoxCompanentSm'
import BoxCompanentHamir from './BoxCompanentHamir'


export default function BoxInfo({ setName, name , item}) {

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
                        <img style={{ width: `${productBoxImg}` }} src={item.img} alt="" />
                    </div>
                    <div className="productBoxInfo">
                        <div className="productBoxInfo_tur">{item.name}</div>
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
                                <p>Итого: {item.price} ₽</p>
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