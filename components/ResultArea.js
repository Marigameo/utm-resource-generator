import React, { useState } from 'react'
import { FaRegClipboard } from "react-icons/fa";
import styles from '../styles/result.module.css'

export default function ResultArea (props) {

    let textInput = React.createRef();
    const [copySuccess, setCopySuccess] = useState('');

    const copyLink = () => {
        let link = textInput.current.value;
        link.length > 0 && copyToClipBoard(link);
        textInput.current.select()
    }

    const disappearingMessage = () => {
        setTimeout(() => {
            setCopySuccess('')
        }, 2000)
    }

    const copyToClipBoard = async link => {
        try {
            await navigator.clipboard.writeText(link);
            setCopySuccess('Copied!');
            disappearingMessage()
        } catch (err) {
            setCopySuccess('Failed to copy!');
            disappearingMessage()
        }
    };

    return (
        <>
            <span className={styles.label}>{props.children}</span><textarea row="4" className={styles.textarea} ref={textInput} value={props.result} readOnly onFocus={copyLink}></textarea>
            <button onClick={copyLink} className={styles.button}><FaRegClipboard /></button>
            <span className={styles.mgMSG}>{copySuccess}</span>
        </>
    )
}
