import { Link } from 'react-router-dom'
import { useState } from 'react'
import location from '../images/Location.svg'
import Logo from '../images/Logo.svg'
import Account from '../images/Account.svg'
import ShoppingCard from '../images/ShoppingCard.svg'

export default function PagesHeader() {



    // JSON.parse(localStorage.getItem('total')) ||
    // localStorage.setItem('total', JSON.stringify(total))


    return (
        <div className="HomeHeader">
            <nav className='pagesNav'>
                <div className="logoName">
                    <img src={Logo} alt="" />
                    <p className="logoNameText">Куда пицца</p>
                </div>

                <ul className="liste">
                    <li className="item">Акции</li>
                    <li className="item">Пицца</li>
                    <li className="item">Суши</li>
                    <li className="item">Напитки</li>
                    <li className="item">Закуски</li>
                    <li className="item">Комбо</li>
                    <li className="item">Десерты</li>
                    <li className="item">Соусы</li>
                    <li className="item">Другое <i class="fa-solid fa-chevron-down"></i></li>
                </ul>

                <div className="shopCard">
                    <img src={ShoppingCard} alt="" />
                    <p>0</p>
                    <span>₽</span>
                </div>
            </nav>
        </div>
    )
}