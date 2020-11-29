import React from 'react'
import styles from '../styles/checkbox.module.css'
export default function Checkbox (props) {
    return (
        <>
            <input type="checkbox" className={styles.checkbox}></input>
            <span className={styles.label}>{props.children}</span>
        </>
    )
}


