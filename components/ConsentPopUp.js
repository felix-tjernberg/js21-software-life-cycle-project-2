'use client'

import classes from './ConsentPopUp.module.css'
import Image from 'next/image'
import cakeIcon from '../public/img/princess-cookie-icon.png'
import { useEffect, useState } from 'react'

function ConsentPopUp() {
    const [consent, setConsent] = useState(false)
    // const consent = false

    function clickHandler() {
        setConsent(true)
    }

    // useEffect(() => {
    //     console.log(consent)
    // }, [consent])

    return (
        <>
            {consent ? (
                <></>
            ) : (
                <aside className={classes.overlay}>
                    <div className={classes.modal}>
                        <div className={classes['header-container']}>
                            <h2>Your privacy</h2>
                            <Image
                                src={cakeIcon}
                                alt="Princess cake icon"
                                // width={500} automatically provided
                                // height={500} automatically provided
                                // blurDataURL="data:..." automatically provided
                                // placeholder="blur" // Optional blur-up while loading
                            />
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
                            style={{ marginRight: '8px' }}>
                            Accept all cakes
                        </button>
                        <button
                            onClick={clickHandler}
                            className={classes['consent-btn']}
                            style={{ marginLeft: '8px' }}>
                            Customize settings
                        </button>
                    </div>
                </aside>
            )}
        </>
    )
}

export default ConsentPopUp
