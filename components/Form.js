import React, { useState } from 'react'
import Checkbox from './Checkbox'
import Input from './Input'
import styles from '../styles/form.module.css'
import ResultArea from './ResultArea'
export default function Form () {
    const [isSourceVisible, setSourceVisible] = useState(true)
    const [isMediumVisible, setMediumVisible] = useState(true)
    const [isContentVisible, setContentVisible] = useState(false)
    const [isTermVisible, setTermVisible] = useState(false)
    const [isInstagramVisible, setInstagramVisible] = useState(false)
    const [isLinkedinVisible, setLinkedinVisible] = useState(true)
    const [isTwitterVisible, setTwitterVisible] = useState(true)
    const [isFacebookVisible, setFacebookVisible] = useState(true)

    return (
        <>
            <div className={styles.mbOnly}>
                <Checkbox keyType="source" isSourceVisible={isSourceVisible} setSourceVisible={setSourceVisible}>Source</Checkbox>
                <Checkbox keyType="medium" isMediumVisible={isMediumVisible} setMediumVisible={setMediumVisible}>Medium</Checkbox>
                <Checkbox keyType="content" isContentVisible={isContentVisible} setContentVisible={setContentVisible}>Content</Checkbox>
                <Checkbox keyType="term" isTermVisible={isTermVisible} setTermVisible={setTermVisible}>Campaign Term</Checkbox>
            </div>
            <div className={styles.containerRow}>
                <div className={styles.containerColumn}>
                    <ul className={styles.wrapper}>
                        <li className={styles.row}>
                            <span className={styles.inputHolder}><Input isRequired={true}>Website URL</Input></span>
                        </li>
                        <li className={styles.row}>
                            <span className={styles.inputHolder}><Input isRequired={true}>Campaign Name</Input></span>
                        </li>
                        <li className={styles.row}>
                            <span className={`${isSourceVisible ? styles.visible : styles.hidden}` + " " + styles.inputHolder}><Input isRequired={true}>Campaign Source</Input></span>
                        </li>
                    </ul>
                </div>
                <div className={styles.containerColumn}>
                    <ul className={styles.wrapper}>
                        <li className={styles.row}>
                            <span className={`${isMediumVisible ? styles.visible : styles.hidden}` + " " + styles.inputHolder}><Input isRequired={true}>Campaign Medium</Input></span>
                        </li>
                        <li className={styles.row}>
                            <span className={`${isContentVisible ? styles.visible : styles.hidden}` + " " + styles.inputHolder}><Input isRequired={false}>Campaign Content</Input></span>
                        </li>
                        <li className={styles.row}>
                            <span className={`${isTermVisible ? styles.visible : styles.hidden}` + " " + styles.inputHolder}><Input isRequired={false}>Campaign Term</Input></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.mbOnly}>
                <Checkbox keyType="linkedin" isLinkedinVisible={isLinkedinVisible} setLinkedinVisible={setLinkedinVisible}>Linkedin</Checkbox>
                <Checkbox keyType="facebook" isFacebookVisible={isFacebookVisible} setFacebookVisible={setFacebookVisible}>Facebook</Checkbox>
                <Checkbox keyType="twitter" isTwitterVisible={isTwitterVisible} setTwitterVisible={setTwitterVisible}>Twitter</Checkbox>
                <Checkbox keyType="instagram" isInstagramVisible={isInstagramVisible} setInstagramVisible={setInstagramVisible}>Instagram</Checkbox>
            </div>
            <div className={styles.displayInline + ' ' + styles.mgT20 + ' ' + `${isLinkedinVisible ? styles.visible : styles.hidden}`}>
                <ResultArea>Linkedin</ResultArea>
            </div>
            <div className={styles.displayInline + ' ' + styles.mgT20 + ' ' + `${isFacebookVisible ? styles.visible : styles.hidden}`}>
                <ResultArea>Facebook</ResultArea>
            </div>
            <div className={styles.displayInline + ' ' + styles.mgT20 + ' ' + `${isTwitterVisible ? styles.visible : styles.hidden}`}>
                <ResultArea>Twitter</ResultArea>
            </div>
            <div className={styles.displayInline + ' ' + styles.mgT20 + ' ' + `${isInstagramVisible ? styles.visible : styles.hidden}`}>
                <ResultArea>Instagram</ResultArea>
            </div>
        </>
    )
}
