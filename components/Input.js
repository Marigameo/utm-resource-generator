import React from 'react'
import styles from '../styles/input.module.css'

export default function Input (props) {
    const { url, name, source, medium, content, term, setUrl, setName, setSource, setMedium, setContent, setTerm, keyType } = props

    console.log(keyType)
    const checkType = () => {
        switch (keyType) {
            case 'url':
                console.log('url')
                return (
                    <>
                        <label className={styles.label}>{props.children} </label><input type="text" className={styles.inputField} value={url} onChange={setUrl}></input>
                    </>
                )
            case 'name':
                return (
                    <>
                        <label className={styles.label}>{props.children} </label><input type="text" className={styles.inputField} value={name} onChange={setName}></input>
                    </>
                )
            case 'source':
                return (
                    <>
                        <label className={styles.label}>{props.children} </label><input type="text" className={styles.inputField} value={source} onChange={setSource}></input>
                    </>
                )
            case 'medium':
                return (
                    <>
                        <label className={styles.label}>{props.children} </label><input type="text" className={styles.inputField} value={medium} onChange={setMedium}></input>
                    </>
                )
            case 'content':
                return (
                    <>
                        <label className={styles.label}>{props.children} </label><input type="text" className={styles.inputField} value={content} onChange={setContent}></input>
                    </>
                )
            case 'term':
                return (
                    <>
                        <label className={styles.label}>{props.children} </label><input type="text" className={styles.inputField} value={term} onChange={setTerm}></input>
                    </>
                )
        }
    }
    const inputField = keyType ? checkType() : null;
    return (
        <span>{inputField}</span>
    )
}
