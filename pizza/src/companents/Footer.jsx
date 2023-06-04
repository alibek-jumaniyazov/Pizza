import React from 'react'
import Logo from '../images/Logo.svg'
import location from '../images/Location.svg'
import facebook from '../images/facebook.svg'
import insta from '../images/insta.svg'

export default function Footer() {
    return (
        <div className='Footer'>
            <div className="footerLists">
                <div className="items1">
                    <div className="logoName">
                        <img src={Logo} alt="" />
                        <p style={{fontSize:"25px"}} className="logoNameText">Куда пицца</p>
                    </div>
                    <p className="itemChild">© Datasoft 2023 — Куда Пицца</p>
                </div>
                <div className="items">
                    <span>Куда пицца</span>
                    <p className="itemChild">О компании</p>
                    <p className="itemChild">Пользовательское соглашение</p>
                    <p className="itemChild">Условия гарантии</p>
                    <p className="itemChild"></p>
                    <p className="itemChild"></p>
                </div>

                <div className="items">
                    <span>Помощь</span>
                    <p className="itemChild">Ресторан</p>
                    <p className="itemChild">Контакты</p>
                    <p className="itemChild">Поддержка</p>
                    <p className="itemChild">Отследить заказ</p>
                </div>

                <div className="items">
                    <span>Контакты</span>
                    <p className="itemChild">Контакты</p>
                    <p className="itemChild"> <img src="" alt="" />+7 (926) 223-10-11</p>
                    <p className="itemChild"><img src={location} alt="" /> Москва, ул. Юных Ленинцев, д.99</p>
                    <p className="itemChild"> <img src={facebook} alt="" /> Facebok <img src={insta} alt="" /> Instagram</p>
                </div>  
            </div>
        </div>
    )
}
