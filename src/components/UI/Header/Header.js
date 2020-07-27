import React from 'react'
import style from './Header.module.css'
import logo from '../../../img/logo.png'

const Header = () => {
    return (
        <header className={style.Header}>
            <img className={style.Header__logo} src={logo} alt='logo' />
        </header>
    )
}

export default Header
