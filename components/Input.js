import React from 'react'
import styles from '../styles/input.module.css'

export default function Input (props) {
    const { value, setValue } = props;
    return (
        <>
            <label className={styles.label}>{props.children} </label><input type="text" className={styles.inputField} value={value} onChange={setValue}></input>
        </>
    )
}
