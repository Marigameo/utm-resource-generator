import React, { useState, useEffect } from 'react'
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
    const [source, setSource] = useState('newsletter')
    const [medium, setMedium] = useState('social')
    const [content, setContent] = useState('')
    const [term, setTerm] = useState('')

    //state - for results
    const [result, setResult] = useState('')
    const [linkedinResult, setLinkedinResult] = useState('')
    const [twitterResult, setTwitterResult] = useState('')
    const [facebookResult, setFacebookResult] = useState('')
    const [instagramResult, setInstagramResult] = useState('')

    //state - for shortened urls
    const [shortresult, setShResult] = useState('')
    const [shortlinkedinResult, setShLinkedinResult] = useState('')
    const [shorttwitterResult, setShTwitterResult] = useState('')
    const [shortfacebookResult, setShFacebookResult] = useState('')
    const [shortinstagramResult, setShInstagramResult] = useState('')



    useEffect(() => {
        shortenURLs();
    }, [instagramResult])

    const setShortenURLs = (urls) => {
        console.log('set urls called')
        console.log(urls)
        if (urls && urls.length > 0) {
            urls.map((url) => {
                if (url.longURL.includes('utm_source=linkedin')) setShLinkedinResult(url.link)
                else if (url.longURL.includes('utm_source=facebook')) setShFacebookResult(url.link)
                else if (url.longURL.includes('utm_source=twitter')) setShTwitterResult(url.link)
                else if (url.longURL.includes('utm_source=newsletter')) setShResult(url.link)
                else if (url.longURL.includes('utm_source=instagram')) setShInstagramResult(url.link)
            })
        }
    }

    const shortenURLs = () => {
        let shortenedURLs = []
        const longURLs = [result, linkedinResult, twitterResult, facebookResult, instagramResult]
        if (!longURLs.includes('')) {
            longURLs.map((url) => {
                fetch('https://api-ssl.bitly.com/v4/shorten', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer 8e45e7f70322088632e51d516690766271468789',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "long_url": url, "group_guid": "Bjc6h3eJX23" })
                })// Converting to JSON 
                    .then(response => response.json())

                    // Displaying results to console 
                    .then(json => {
                        shortenedURLs.push({ link: json.link, longURL: json.long_url })
                        // console.log(shortenedURLs.length)
                        if (shortenedURLs.length === 5) {
                            console.log(shortenedURLs)
                            setShortenURLs(shortenedURLs)
                        }
                    })
            })
        }
    }
    const clearInputs = () => {
        setUrl('')
        setContent('')
        setMedium('social')
        setTerm('')
        setSource('newsletter')
        setName('')
    }

    const clearResults = () => {
        setFacebookResult('')
        setInstagramResult('')
        setTwitterResult('')
        setLinkedinResult('')
        setResult('')
        setShFacebookResult('')
        setShInstagramResult('')
        setShTwitterResult('')
        setShLinkedinResult('')
        setShResult('')
    }

    const onUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const onNameChange = (event) => {
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
        let utm, utmForLinkedIn, utmForFacebook, utmForTwitter, utmForInstagram
        if (url === '' || source === '') {
            alert("Please fill in the required fields - URL & Source can't be empty")
            clearInputs()
            return
        }
        if (url && source) {
            utm = `${url}?utm_source=${source}`
            utmForLinkedIn = `${url}?utm_source=linkedin`
            utmForFacebook = `${url}?utm_source=facebook`
            utmForTwitter = `${url}?utm_source=twitter`
            utmForInstagram = `${url}?utm_source=instagram`
        }
        if (medium != '') {
            utm += `?utm_medium=${medium}`
            utmForLinkedIn += `?utm_medium=${medium}`
            utmForFacebook += `?utm_medium=${medium}`
            utmForTwitter += `?utm_medium=${medium}`
            utmForInstagram += `?utm_medium=${medium}`
        }
        if (name != '') {
            utm += `?utm_campaign=${name}`
            utmForLinkedIn += `?utm_campaign=${name}`
            utmForFacebook += `?utm_campaign=${name}`
            utmForTwitter += `?utm_campaign=${name}`
            utmForInstagram += `?utm_campaign=${name}`
        }
        if (term != '') {
            utm += `?utm_term=${term}`
            utmForLinkedIn += `?utm_term=${term}`
            utmForFacebook += `?utm_term=${term}`
            utmForTwitter += `?utm_term=${term}`
            utmForInstagram += `?utm_term=${term}`
        }
        if (content != '') {
            utm += `?utm_content=${content}`
            utmForLinkedIn += `?utm_content=${content}`
            utmForFacebook += `?utm_content=${content}`
            utmForTwitter += `?utm_content=${content}`
            utmForInstagram += `?utm_content=${content}`
        }
        utm ? setResult(utm) : null
        utmForFacebook ? setFacebookResult(utmForFacebook) : null
        utmForLinkedIn ? setLinkedinResult(utmForLinkedIn) : null
        utmForInstagram ? setInstagramResult(utmForInstagram) : null
        utmForTwitter ? setTwitterResult(utmForTwitter) : null
        clearInputs()
    }

    return (
        <>
            <div className={styles.mbOnly}>
                <Checkbox value={isSourceVisible} setValue={setSourceVisible}>Source</Checkbox>
                <Checkbox value={isMediumVisible} setValue={setMediumVisible}>Medium</Checkbox>
                <Checkbox value={isContentVisible} setValue={setContentVisible}>Content</Checkbox>
                <Checkbox value={isTermVisible} setValue={setTermVisible}>Campaign Term</Checkbox>
            </div>
            <div className={styles.containerRow}>
                <div className={styles.containerColumn}>
                    <ul className={styles.wrapper}>
                        <li className={styles.row}>
                            <span className={styles.inputHolder}><Input isRequired={true} value={url} setValue={onUrlChange}>Website URL</Input></span>
                        </li>
                        <li className={styles.row}>
                            <span className={styles.inputHolder}><Input isRequired={true} value={name} setValue={onNameChange}>Campaign Name</Input></span>
                        </li>
                        <li className={styles.row}>
                            <span className={`${isSourceVisible ? styles.visible : styles.hidden}` + " " + styles.inputHolder}><Input isRequired={true} value={source} setValue={onSourceChange}>Campaign Source</Input></span>
                        </li>
                    </ul>
                </div>
                <div className={styles.containerColumn}>
                    <ul className={styles.wrapper}>
                        <li className={styles.row}>
                            <span className={`${isMediumVisible ? styles.visible : styles.hidden}` + " " + styles.inputHolder}><Input isRequired={true} value={medium} setValue={onMediumChange}>Campaign Medium</Input></span>
                        </li>
                        <li className={styles.row}>
                            <span className={`${isContentVisible ? styles.visible : styles.hidden}` + " " + styles.inputHolder}><Input isRequired={false} value={content} setValue={onContentChange}>Campaign Content</Input></span>
                        </li>
                        <li className={styles.row}>
                            <span className={`${isTermVisible ? styles.visible : styles.hidden}` + " " + styles.inputHolder}><Input isRequired={false} value={term} setValue={onTermChange}>Campaign Term</Input></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.mbOnly}>
                <Checkbox value={isLinkedinVisible} setValue={setLinkedinVisible}>Linkedin</Checkbox>
                <Checkbox value={isFacebookVisible} setValue={setFacebookVisible}>Facebook</Checkbox>
                <Checkbox value={isTwitterVisible} setValue={setTwitterVisible}>Twitter</Checkbox>
                <Checkbox value={isInstagramVisible} setValue={setInstagramVisible}>Instagram</Checkbox>
            </div>
            <div>
                <Button actionHandler={() => genarateURL(url, source, medium, name, term, content)}>Generate URL</Button>
            </div>
            <div className={styles.displayInline + ' ' + styles.mgT20 + ' ' + `${isLinkedinVisible ? styles.visible : styles.hidden}`}>
                <ResultArea result={result}>Custom</ResultArea>
            </div>
            <div className={styles.displayInline + ' ' + styles.mgT20 + ' ' + `${isLinkedinVisible ? styles.visible : styles.hidden}`}>
                <ResultArea result={linkedinResult}>Linkedin</ResultArea>
            </div>
            <div className={styles.displayInline + ' ' + styles.mgT20 + ' ' + `${isFacebookVisible ? styles.visible : styles.hidden}`}>
                <ResultArea result={facebookResult}>Facebook</ResultArea>
            </div>
            <div className={styles.displayInline + ' ' + styles.mgT20 + ' ' + `${isTwitterVisible ? styles.visible : styles.hidden}`}>
                <ResultArea result={twitterResult}>Twitter</ResultArea>
            </div>
            <div className={styles.displayInline + ' ' + styles.mgT20 + ' ' + `${isInstagramVisible ? styles.visible : styles.hidden}`}>
                <ResultArea result={instagramResult}>Instagram</ResultArea>
            </div>

            {/* shorten links */}
            <br />
            <h2>Shortened URL'S</h2>
            <div className={styles.displayInline + ' ' + styles.mgT20 + ' ' + `${isLinkedinVisible ? styles.visible : styles.hidden}`}>
                <ResultArea result={shortresult}>Custom</ResultArea>
            </div>
            <div className={styles.displayInline + ' ' + styles.mgT20 + ' ' + `${isLinkedinVisible ? styles.visible : styles.hidden}`}>
                <ResultArea result={shortlinkedinResult}>Linkedin</ResultArea>
            </div>
            <div className={styles.displayInline + ' ' + styles.mgT20 + ' ' + `${isFacebookVisible ? styles.visible : styles.hidden}`}>
                <ResultArea result={shortfacebookResult}>Facebook</ResultArea>
            </div>
            <div className={styles.displayInline + ' ' + styles.mgT20 + ' ' + `${isTwitterVisible ? styles.visible : styles.hidden}`}>
                <ResultArea result={shorttwitterResult}>Twitter</ResultArea>
            </div>
            <div className={styles.displayInline + ' ' + styles.mgT20 + ' ' + `${isInstagramVisible ? styles.visible : styles.hidden}`}>
                <ResultArea result={shortinstagramResult}>Instagram</ResultArea>
            </div>
            <div>
                <Button actionHandler={() => clearResults()}>Clear Results</Button>
            </div>
        </>
    )
}
