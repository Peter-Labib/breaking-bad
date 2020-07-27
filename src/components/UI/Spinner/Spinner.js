import React from 'react'
import style from './Spinner.module.css'
import spinner from '../../../img/spinner.gif'

const Spinner = () => {
    return (
        <div className={style.Spinner}>
            <img src={spinner} alt='spinner' style={{ width: '100%' }} />
        </div>
    )
}

export default Spinner
