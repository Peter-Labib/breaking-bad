import React, { useState, useEffect } from 'react'
import style from './Search.module.css'

const Search = ({ character }) => {
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        character(inputValue)
    }, [character, inputValue])
    return (
        <form className={style.Form}>
            <input className={style.Form__search} type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        </form>
    )
}

export default Search
