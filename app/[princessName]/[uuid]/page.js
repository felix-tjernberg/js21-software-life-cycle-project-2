'use client'
import Princesses from '../../Princesses'
import Link from 'next/link'
import PrincessForm from '../../../components/PrincessForm'
import { useState, useEffect } from 'react'
import {
    EDIT_BRINCESS_QUERY,
    GET_BRINCESS_DATA_QUERY,
    graphqlRequest
} from '../../../utilities/graphql'

function PrincessName({ params: { uuid } }) {
    const [brincess, setBrincess] = useState(null)
    const [isAuthor, setIsAuthor] = useState(false)
    const authorId = localStorage.getItem('authorId')
        ? localStorage.getItem('authorId')
        : null

    useEffect(() => {
        async function fetchData() {
            const { brincess, authorOfBrincess } = await graphqlRequest(
                GET_BRINCESS_DATA_QUERY,
                { id: uuid, authorId }
            )
            setBrincess(brincess)
            setIsAuthor(authorOfBrincess)
        }
        fetchData()
    }, []) // TODO do we need to add dependencies here?

    return (
        <section className="edit-container">
            {isAuthor && <PrincessForm id={uuid} query={EDIT_BRINCESS_QUERY} />}
            <section className="princess-section">
                <section className="main">
                    <div className="princesses-container">
                        {brincess && <Princesses princess={brincess} />}
                    </div>
                </section>
                <Link href={'/'}>Go back</Link>
            </section>
        </section>
    )
}
export default PrincessName
