'use client'

import classes from './ConsentPopUp.module.css'
import Image from 'next/image'
import cakeIcon from '../public/img/princess-cookie-icon.png'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

function ConsentPopUp() {
    const [consent, setConsent] = useState(false)
    const [item, setItem] = useState(false)
    const [cookies, setCookie] = useCookies(['name'])

    function clickHandler(e) {
        setConsent(e.target.value)
    }

    useEffect(() => {
        const date = new Date()
        // sets d = now + 20 min
        date.setTime(date.getTime() + 1200000)
        // console.log('consent: ', typeof consent)
        if (consent === 'true') {
            setCookie('name', 'test', {
                expires: date,
                path: '/',
                sameSite: true
            })

            console.log('consent i if-stats: ', consent)
            localStorage?.setItem('authorId', crypto.randomUUID())
            localStorage?.setItem('consent', true)
        }
    }, [consent])

    // used to avoid "ReferenceError: localStorage is not defined"
    useEffect(() => {
        setItem(localStorage.getItem('consent'))
    }, [])

    return (
        <>
            {item || consent ? (
                <></>
            ) : (
                <aside className={classes.overlay}>
                    <div className={classes.modal}>
                        <div className={classes['header-container']}>
                            <h2>Your privacy</h2>
                            <Image src={cakeIcon} alt="Princess cake icon" />
                        </div>
                        <p>
                            By clicking “Accept all cakes" or "Customize
                            settings", you agree Brincess Puldlling can store
                            cookies on your device and disclose information in
                            accordance with our Brincess Cake Policy.
                        </p>
                        <button
                            onClick={clickHandler}
                            className={classes['consent-btn']}
                            style={{ marginRight: '2px' }}
                            value={true}>
                            Accept all cakes
                        </button>
                        <button
                            onClick={clickHandler}
                            className={classes['consent-btn']}
                            style={{ marginLeft: '2px' }}
                            value={false}>
                            Refuse all cakes
                        </button>
                    </div>
                </aside>
            )}
        </>
    )
}

export default ConsentPopUp
