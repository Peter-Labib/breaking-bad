import React from 'react'
import styles from './Item.module.css'

const Item = (props) => {
    return (
        <div className={styles.Item}>
            <div className={styles.Item__front}>
                <img src={props.img} alt={props.name} />
            </div>
            <div className={styles.Item__back}>
                <h2>{props.name}</h2>
                <hr />
                <ul className={styles.Item__back__list}>
                    <li><strong>Actor Name</strong>: {props.actor}</li>
                    <li><strong>Nickname</strong>: {props.nickname}</li>
                    <li><strong>Birthday</strong>: {props.birthday}</li>
                    <li><strong>Status</strong>: {props.status}</li>
                </ul>
            </div>
        </div>
    )
}

export default Item
