import React, { useState } from 'react'
import Checkbox from './Checkbox'
import Input from './Input'
import styles from '../styles/form.module.css'
import ResultArea from './ResultArea'
import Button from './Button'
export default function Form () {

    //state - checkboxes
    const [isSourceVisible, setSourceVisible] = useState(true)
    const [isMediumVisible, setMediumVisible] = useState(true)
    const [isContentVisible, setContentVisible] = useState(false)
    const [isTermVisible, setTermVisible] = useState(false)
    const [isInstagramVisible, setInstagramVisible] = useState(false)
    const [isLinkedinVisible, setLinkedinVisible] = useState(true)
    const [isTwitterVisible, setTwitterVisible] = useState(true)
    const [isFacebookVisible, setFacebookVisible] = useState(true)

    //state - input fields
    const [url, setUrl] = useState('')
    const [name, setName] = useState('')
    const [source, setSource] = useState('')
    const [medium, setMedium] = useState('')
    const [content, setContent] = useState('')
    const [term, setTerm] = useState('')

    //state - for results
    const [result, setResult] = useState('')
    const [linkedinResult, setLinkedinResult] = useState('')
    const [twitterResult, setTwitterResult] = useState('')
    const [facebookResult, setFacebookResult] = useState('')
    const [instagramResult, setInstagramResult] = useState('')

    // TODO
    // const generateDefaults = () => {

    // }

    const onUrlChange = (event) => {
        console.log('inside url change')
        setUrl(event.target.value);
    };

    const onNameChange = (event) => {
        console.log('inside name change')
        setName(event.target.value);
    };

    const onSourceChange = (event) => {
        setSource(event.target.value);
    };

    const onMediumChange = (event) => {
        setMedium(event.target.value);
    };

    const onContentChange = (event) => {
        setContent(event.target.value);
    };

    const onTermChange = (event) => {
        setTerm(event.target.value);
    };

    const genarateURL = async (url = '', source = '', medium = '', name = '', term = '', content = '') => {
        console.log('getting inside ge')
        console.log(url)
        let utm
        console.log(url, medium, content, source, name, term)
        console.log(typeof url)
        if (url === '' || source === '') {
            alert("Please fill in the required fields - URL & Source can't be empty")
        }
        if (url && source) {
            utm = `${url}?utm_source=${source}`
        }
        if (medium != '') {
            utm += `?utm_medium=${medium}`
        }
        if (name != '') {
            utm += `?utm_campaign=${name}`
        }
        if (term != '') {
            utm += `?utm_term=${term}`
        }
        if (content != '') {
            utm += `?utm_content=${content}`
        }
        console.log(utm)
        utm ? setResult(utm) : null
    }

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
                            <span className={styles.inputHolder}><Input isRequired={true} url={url} setUrl={onUrlChange} keyType="url">Website URL</Input></span>
                        </li>
                        <li className={styles.row}>
                            <span className={`${isSourceVisible ? styles.visible : styles.hidden}` + " " + styles.inputHolder}><Input isRequired={true} source={source} setSource={onSourceChange} keyType="source">Campaign Source</Input></span>
                        </li>
                        <li className={styles.row}>
                            <span className={styles.inputHolder}><Input isRequired={true} name={name} setName={onNameChange} keyType="name">Campaign Name</Input></span>
                        </li>
                    </ul>
                </div>
                <div className={styles.containerColumn}>
                    <ul className={styles.wrapper}>
                        <li className={styles.row}>
                            <span className={`${isMediumVisible ? styles.visible : styles.hidden}` + " " + styles.inputHolder}><Input isRequired={true} medium={medium} setMedium={onMediumChange} keyType="medium">Campaign Medium</Input></span>
                        </li>
                        <li className={styles.row}>
                            <span className={`${isContentVisible ? styles.visible : styles.hidden}` + " " + styles.inputHolder}><Input isRequired={false} content={content} setContent={onContentChange} keyType="content">Campaign Content</Input></span>
                        </li>
                        <li className={styles.row}>
                            <span className={`${isTermVisible ? styles.visible : styles.hidden}` + " " + styles.inputHolder}><Input isRequired={false} term={term} setTerm={onTermChange} keyType="term">Campaign Term</Input></span>
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
            <div>
                <Button genarateURL={() => genarateURL(url, source, medium, name, term, content)} />
            </div>
            <div className={styles.displayInline + ' ' + styles.mgT20 + ' ' + `${isLinkedinVisible ? styles.visible : styles.hidden}`}>
                <ResultArea result={result}>Custom</ResultArea>
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
