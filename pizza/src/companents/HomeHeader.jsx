import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function HomeHeader() {



// JSON.parse(localStorage.getItem('total')) ||
    // localStorage.setItem('total', JSON.stringify(total))


    return (
        <div className="HomeHeader">
            <nav>
                <div className="place">
                    <div className="locatio">
                        <img src="" alt="" />
                        <p className='navP'>Москва</p>
                        <img src="" alt="" />
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
                        <img src='' alt="" />
                        <p  className='navP'>Войти в аккаунт</p>
                    </div>
                </div>
            </nav>
            <hr />
            <header>
                {/* <Link to={"/"}> */}
                    <div className="logoName">
                        <img src={LogoName} alt="" />
                    </div>
                {/* </Link> */}
                <div className="shopCard">
                    <img src={kazina} alt="" />
                    <p>{total}</p>
                    <span>₽</span>
                </div>
            </header>
            <div className={karzinkaDiv}>
                <div className="karzinka">
                    <div className="karzinkaHeader">
                        <h1>Ваш заказ</h1>
                        <img src='' alt="" />
                    </div>
                    {/* <div className="products">
                        {
                            karzinka.map((add) => (
                               <KarzinkaPizza setKarzinka={setKarzinka} karzinka={karzinka} total={total} setTotal={setTotal} add={add}/> 
                            ))
                        }
                        
                    </div> */}
                    {/* <div className="karzinkaFooter">
                        <h1>Итого: {total} ₽</h1>
                        {karzinka?.length !==0 && 
                        <Link to={'/zakaz'}><span>Оформить заказ</span></Link>
                        }
                    </div> */}
                </div>
            </div>  
            <div className={login}>
                <div className="loginX">
                    {/* {
                        regiter == 'true' ?
                        <Login setRegister={setRegister}/>
                        :

                        <Register setRegister={setRegister}/>
                    }

                     <img onClick={() => loginClose()} src={xx} alt="" /> */}
                </div>
            </div>    
        </div>
    )
}
