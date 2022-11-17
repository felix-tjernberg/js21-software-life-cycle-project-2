'use client'
import classes from '../styles/Home.module.css'
import Princesses from './Princesses'
import PrincessForm from '../components/PrincessForm'
import '../public/bp-logo.png'
import {
    ADD_BRINCESS_QUERY,
    GET_ALL_BRINCESSES_QUERY,
    graphqlRequest
} from '../utilities/graphql'
import { useState, useEffect } from 'react'

function Home() {
    const [brincesses, setBrincesses] = useState('')

    useEffect(() => {
        async function fetchData() {
            const { brincesses } = await graphqlRequest(
                GET_ALL_BRINCESSES_QUERY
            )
            setBrincesses(brincesses)
        }
        fetchData()
    }, [])

    return (
        <section className={classes.container}>
            <aside className={classes.sidebar}>
                <img
                    className={classes['bp-logo']}
                    src={'bp-logo.png'}
                    alt="brincess-puldlling-logo"
                />
                <PrincessForm query={ADD_BRINCESS_QUERY} />
            </aside>
            <section className={classes.main}>
                <div className={classes['princesses-container']}>
                    {brincesses &&
                        brincesses.map((princess, index) => {
                            return (
                                <Princesses key={index} princess={princess} />
                            )
                        })}
                </div>
            </section>
        </section>
    )
}

export default Home
