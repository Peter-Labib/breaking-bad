import React from 'react'
import styles from './TheGrid.module.css'

import Item from '../Item/Item'

const TheGrid = (props) => {
    let items = props.characters.map(item => (
        <Item
            key={item.char_id}
            name={item.name}
            actor={item.portrayed}
            nickname={item.nickname}
            birthday={item.birthday}
            status={item.status}
            img={item.img}
        />
    ))
    return (
        <div className={styles.TheGrid}>
            {items}
        </div>
    )
}

export default TheGrid
