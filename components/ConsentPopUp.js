'use client'

import classes from './ConsentPopUp.module.css'
import Image from 'next/image'
import cakeIcon from '../public/img/princess-cookie-icon.png'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

function ConsentPopUp() {
    const [consent, setConsent] = useState(false)
    const [cookies, setCookie] = useCookies(['name'])

    function clickHandler() {
        setConsent(true)
    }

    useEffect(() => {
        const date = new Date()

        // sets d = now + 5000 ms
        date.setTime(date.getTime() + 5000)
        if (consent) {
            setCookie('name', 'test', {
                expires: date,
                path: '/',
                sameSite: true
            })
        }
    }, [consent])

    return (
        <>
            {consent ? (
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
                            style={{ marginRight: '2px' }}>
                            Accept all cakes
                        </button>
                        <button
                            onClick={clickHandler}
                            className={classes['consent-btn']}
                            style={{ marginLeft: '2px' }}>
                            Refuse all cakes
                        </button>
                    </div>
                </aside>
            )}
        </>
    )
}

export default ConsentPopUp
