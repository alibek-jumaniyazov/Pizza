import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import location from '../images/Location.svg'
import Logo from '../images/Logo.svg'
import Account from '../images/Account.svg'
import ShoppingCard from '../images/ShoppingCard.svg'
import Karzinka from './Karzinka'

export default function HomeHeader() {



    // JSON.parse(localStorage.getItem('total')) ||
    // localStorage.setItem('total', JSON.stringify(total))

    const [nav, setNav] = useState(false)
    const [navHome, setNavHome] = useState(true)


    const scrollFixed = () => {
        const scrol = window.scrollY;

        if (window.scrollY <= 200) {
            setNav(false)
            setNavHome(true)
        } else {
            setNav(true)
            setNavHome(false)
        }
    }

    window.addEventListener('scroll', scrollFixed)
    const [karzinkaBox , setKarzinkaBox] = useState('none')
    const [bgBlack , setBgBlack] = useState('none')


    function openKarzinka(){
        setKarzinkaBox('karzinkaBlock') 
        setBgBlack('bgBlack')
        
    }
    return (
        <>
            <div className="HomeHeaderr">

            </div>
            <div className={navHome ? "HomeHeader" : "none"}>

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
                    <Link to={"/"}>
                        <div className="logoName">
                            <img src={Logo} alt="" />
                            <p className="logoNameText">Куда пицца</p>
                        </div>
                    </Link>
                    <div onClick={() => openKarzinka()} className="shopCard">
                        <img src={ShoppingCard} alt="" />
                        <p>0</p>
                        <span>₽</span>
                    </div>
                </header>

            </div>
            <nav className={nav ? 'pagesNav' : 'none'}>
                <div className="pagesNavChilld">
                    <Link to={"/"}>
                        <div className="logoName">
                            <img src={Logo} alt="" />
                            <p className="logoNameText">Куда пицца</p>
                        </div>
                    </Link>

                    <ul className="liste">
                        <Link to={'/pizza'} >  <li className="item">Акции</li> </Link>
                        <Link to={'/pizza'} >  <li className="item">Пицца</li> </Link>
                        <Link to={'/pizza'} >  <li className="item">Суши</li> </Link>
                        <Link to={'/pizza'} >  <li className="item">Напитки</li> </Link>
                        <Link to={'/pizza'} >  <li className="item">Закуски</li> </Link>
                        <Link to={'/pizza'} >  <li className="item">Комбо</li> </Link>
                        <Link to={'/pizza'} >  <li className="item">Комбо</li> </Link>
                        <Link to={'/pizza'} >  <li className="item">Соусы</li> </Link>
                        <li className="item">Другое <i class="fa-solid fa-chevron-down"></i></li>
                    </ul>

                    <div onClick={() => openKarzinka()} className="shopCard">
                        <img src={ShoppingCard} alt="" />
                        <p>0</p>
                        <span>₽</span>
                    </div>
                </div>

            </nav>
            <Karzinka karzinkaBox={karzinkaBox} setKarzinkaBox={setKarzinkaBox} bgBlack={bgBlack} setBgBlack={setBgBlack}/>
        </>
    )
}