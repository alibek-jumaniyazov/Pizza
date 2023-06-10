import { useState } from 'react'
import x from '../images/Cross.svg'
import ProductPizza from '../images/ProductPizza.png'
import sir from '../images/Group 83.svg'


export default function BoxInfo({ setName, name }) {

    function close() {
        setName('none')
    }


    return (
        <div className={name}>
            <div className="productInfo">
                <div className="productZakaz">
                    <div className="productImgBox">
                        <img src={ProductPizza} alt="" />
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
                    </div>
                </div>
            </div>
            <img className='x' src={x} alt="" onClick={() => close()} />
        </div>
    )
}