import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../UI/Header/Header'
import Search from '../UI/Search/Search'
import TheGrid from '../gridItems/TheGrid/TheGrid'
import Spinner from '../UI/Spinner/Spinner'

const AppContainer = () => {
    const [characterQuery, setCharacterQuery] = useState('')
    const [charactersData, setCharactersData] = useState([])
    const [loading, setLoading] = useState(true)
    const getCharacterValue = (v) => {
        setCharacterQuery(v)
    }

    useEffect(() => {
        setLoading(true)
        axios.get(`https://www.breakingbadapi.com/api/characters?name=${characterQuery}`)
            .then(res => {
                setCharactersData(res.data)
                setLoading(false)
            })
    }, [characterQuery])

    const grid = loading ? <Spinner /> : <TheGrid characters={charactersData} />

    return (
        <React.Fragment>
            <Header />
            <Search character={(v) => getCharacterValue(v)} />
            {grid}
        </React.Fragment>
    )
}

export default AppContainer
