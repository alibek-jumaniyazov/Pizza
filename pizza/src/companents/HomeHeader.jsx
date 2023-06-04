import { Link } from 'react-router-dom'
import { useState } from 'react'
import location from '../images/Location.svg'
import Logo from '../images/Logo.svg'
import Account from '../images/Account.svg'
import ShoppingCard from '../images/ShoppingCard.svg'

export default function HomeHeader() {



    // JSON.parse(localStorage.getItem('total')) ||
    // localStorage.setItem('total', JSON.stringify(total))


    return (
        <div className="HomeHeader">
            <nav className='homeNav'>
                <div className="place">
                    <div className="locatio">
                        <img src={location} alt="" />
                        <select className='navSelect navP' name="" id="">
                            <option value="Urganch">Urganch</option>
                            <option value="Xonqa">Xonqa</option>
                            <option value="Xonqa">Xonqa</option>
                            <option value="Xonqa">Xonqa</option>
                            <option value="Xonqa">Xonqa</option>
                        </select>
                    </div>
                    <p className='navP'>Проверить адрес</p>
                    <div className="delivery">
                        <p className='navP'>Среднее время доставки*:</p>
                        <span>00:24:19</span>
                    </div>
                </div>
                <div className="user">
                    <p className='navP'>Время работы: с 11:00 до 23:00</p>
                    <div className="accaunt">
                        <img src={Account} alt="" />
                        <p className='navP'>Войти в аккаунт</p>
                    </div>
                </div>
            </nav>
            <hr />
            <header>
                <div className="logoName">
                    <img src={Logo} alt="" />
                    <p className="logoNameText">Куда пицца</p>
                </div>
                <div className="shopCard">
                    <img src={ShoppingCard} alt="" />
                    <p>0</p>
                    <span>₽</span>
                </div>
            </header>



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