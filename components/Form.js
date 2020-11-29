import React, { useState } from 'react'
import Checkbox from './Checkbox'
import Input from './Input'
import styles from '../styles/form.module.css'
export default function Form () {
    const [isMediumVisible, setMediumVisible] = useState(false)
    const [isContentVisible, setContentVisible] = useState(false)
    const [isTermVisible, setTermVisible] = useState(false)
    const [copySuccess, setCopySuccess] = useState('');
    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };
    return (
        <>
            <div className={styles.displayInline}>
                <Checkbox>Source</Checkbox>
                <Checkbox>Medium</Checkbox>
                <Checkbox>Content</Checkbox>
                <Checkbox>Campaign Term</Checkbox>
            </div>
            <div className={styles.row1}>
                <Input>URL: </Input>
                <Input>Campaign-name: </Input>
            </div>
            <div className={styles.row2}>
                <span className={`${isMediumVisible ? styles.visible : styles.hidden}`}><Input>Medium: </Input></span>
                <span className={`${isContentVisible ? styles.visible : styles.hidden}`}><Input>Content: </Input></span>
                <span className={`${isTermVisible ? styles.visible : styles.hidden}`}><Input>Term: </Input></span>
            </div>
            <div className={styles.displayInline}>
                <Checkbox>Linkedin</Checkbox>
                <Checkbox>Facebook</Checkbox>
                <Checkbox>Twitter</Checkbox>
                <Checkbox>Instagram</Checkbox>
            </div>
            <div className={styles.displayInline + ' ' + styles.mgT20}>
                <textarea className={styles.textarea}></textarea>
                <button onClick={() => copyToClipBoard('some text to copy')}>Click here to copy</button>
                {copySuccess}
            </div>
        </>
    )
}
