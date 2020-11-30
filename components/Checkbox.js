import React from 'react'
import styles from '../styles/checkbox.module.css'
export default function Checkbox (props) {
    const { setSourceVisible, isSourceVisible, keyType, isMediumVisible, isContentVisible, isTermVisible, setInstagramVisible, setMediumVisible, setContentVisible, setTermVisible, isLinkedinVisible, isFacebookVisible, isTwitterVisible, isInstagramVisible, setLinkedinVisible, setFacebookVisible, setTwitterVisible } = props;
    console.log(keyType)
    const checkType = () => {
        switch (keyType) {
            case 'source':
                return (
                    <>
                        <input type="checkbox" className={styles.checkbox} onChange={() => setSourceVisible(!isSourceVisible)}></input>
                        <span className={styles.label}>{props.children}</span>
                    </>
                )
            case 'medium':
                return (
                    <>
                        <input type="checkbox" className={styles.checkbox} onChange={() => setMediumVisible(!isMediumVisible)}></input>
                        <span className={styles.label}>{props.children}</span>
                    </>
                )
            case 'content':
                return (
                    <>
                        <input type="checkbox" className={styles.checkbox} onChange={() => setContentVisible(!isContentVisible)}></input>
                        <span className={styles.label}>{props.children}</span>
                    </>
                )
            case 'term':
                return (
                    <>
                        <input type="checkbox" className={styles.checkbox} onChange={() => setTermVisible(!isTermVisible)}></input>
                        <span className={styles.label}>{props.children}</span>
                    </>
                )
            case 'linkedin':
                console.log(isLinkedinVisible)
                return (
                    <>
                        <input type="checkbox" className={styles.checkbox} onChange={() => setLinkedinVisible(!isLinkedinVisible)} checked={isLinkedinVisible}></input>
                        <span className={styles.label}>{props.children}</span>
                    </>
                )
            case 'facebook':
                return (
                    <>
                        <input type="checkbox" className={styles.checkbox} onChange={() => setFacebookVisible(!isFacebookVisible)} checked={isFacebookVisible}></input>
                        <span className={styles.label}>{props.children}</span>
                    </>
                )
            case 'twitter':
                return (
                    <>
                        <input type="checkbox" className={styles.checkbox} onChange={() => setTwitterVisible(!isTwitterVisible)} checked={isTwitterVisible}></input>
                        <span className={styles.label}>{props.children}</span>
                    </>
                )
            case 'instagram':
                return (
                    <>
                        <input type="checkbox" className={styles.checkbox} onChange={() => setInstagramVisible(!isInstagramVisible)} checked={isInstagramVisible}></input>
                        <span className={styles.label}>{props.children}</span>
                    </>
                )
        }
    }
    const checkbox = keyType ? checkType() : null;
    console.log(checkbox)
    return (
        <span>{checkbox}</span>
    )
}


