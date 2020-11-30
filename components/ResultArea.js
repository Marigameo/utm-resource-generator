import React, { useState } from 'react'
import { FaRegClipboard } from "react-icons/fa";
import styles from '../styles/result.module.css'

export default function ResultArea (props) {

    let textInput = React.createRef();
    const [copySuccess, setCopySuccess] = useState('');

    const copyLink = () => {
        let link = textInput.current.value;
        copyToClipBoard(link);
    }

    const disappearingMessage = () => {
        setTimeout(() => {
            setCopySuccess('')
        }, 2000)
    }

    const copyToClipBoard = async link => {
        try {
            await navigator.clipboard.writeText(link);
            textInput.current.value = ''
            setCopySuccess('Copied!');
            disappearingMessage()
        } catch (err) {
            textInput.current.value = ''
            setCopySuccess('Failed to copy!');
            disappearingMessage()
        }
    };

    return (
        <>
            <span className={styles.label}>{props.children}</span><textarea className={styles.textarea} ref={textInput}></textarea>
            <button onClick={copyLink} className={styles.button}><FaRegClipboard /></button>
            <span className={styles.mgMSG}>{copySuccess}</span>
        </>
    )
}
