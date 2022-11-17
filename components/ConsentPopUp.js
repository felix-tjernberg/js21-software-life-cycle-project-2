'use client'

import classes from './ConsentPopUp.module.css'
import Image from 'next/image'
import cakeIcon from '../public/img/princess-cookie-icon.png'
import { useEffect, useState } from 'react'

function ConsentPopUp() {
    const [consent, setConsent] = useState(false)
    const [item, setItem] = useState(false)

    function clickHandler(e) {
        setConsent(e.target.value)
    }

    useEffect(() => {
        if (consent === 'true') {
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
                            {`By clicking “Accept all cakes" or "Customize
                            settings", you agree Brincess Puldlling can store
                            cookies on your device and disclose information in
                            accordance with our Brincess Cake Policy.`}
                        </p>
                        <div className={classes['btn-container']}>
                            <button
                                onClick={clickHandler}
                                className={classes['consent-btn']}
                                value={true}>
                                Accept all cakes
                            </button>
                            <button
                                onClick={clickHandler}
                                className={classes['consent-btn']}
                                value={false}>
                                Reject all cakes
                            </button>
                        </div>
                    </div>
                </aside>
            )}
        </>
    )
}

export default ConsentPopUp
