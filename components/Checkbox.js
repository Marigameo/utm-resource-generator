import React from 'react'
import styles from '../styles/checkbox.module.css'
export default function Checkbox (props) {
    const { value, setValue } = props;
    return (
        <>
            <input type="checkbox" className={styles.checkbox} onChange={() => setValue(!value)} checked={value}></input>
            <span className={styles.label}>{props.children}</span>
        </>
    )
}


