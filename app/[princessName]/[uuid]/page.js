'use client'

import Princesses from '../../Princesses'
import Link from 'next/link'
import PrincessForm from '../../../components/PrincessForm'
import { useState, useEffect } from 'react'

function PrincessName(p) {
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
                        query: `query BrincessData($id: ID!, $authorId: ID!) {
                                brincess(id: $id) {id, backgroundColor {string}, hair {style, color {string}}, name, mouth {up {string}, down {string}}, eyes {left {string}, right {string}}}
                                authorOfBrincess(id: $id, authorId: $authorId)
                                }`,
                        variables: {
                            id: p.params.uuid,
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
    }, [])

    return (
        <section className="edit-container">
            {isAuthor && <PrincessForm />}
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
