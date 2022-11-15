'use client'
import Princesses from '../../Princesses'
import Link from 'next/link'
import PrincessForm from '../../../components/PrincessForm'
import { useState, useEffect } from 'react'
import {
    EDIT_BRINCESS_QUERY,
    GET_BRINCESS_DATA_QUERY
} from '../../../utilities/graphqlQuerys'

function PrincessName({ params: { uuid } }) {
    const [brincess, setBrincess] = useState(null)
    const [isAuthor, setIsAuthor] = useState(false)
    const authorId = localStorage.getItem('authorId')
        ? localStorage.getItem('authorId')
        : null

    useEffect(() => {
        async function fetchData() {
            const graphqlResponse = await fetch(
                // 'https://graphqllearning1.azurewebsites.net',
                'http://localhost:4000/',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        query: GET_BRINCESS_DATA_QUERY,
                        variables: {
                            id: uuid,
                            authorId: authorId
                        }
                    })
                }
            )
            const json = await graphqlResponse.json()
            setBrincess(json.data.brincess)
            setIsAuthor(json.data.authorOfBrincess)
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
