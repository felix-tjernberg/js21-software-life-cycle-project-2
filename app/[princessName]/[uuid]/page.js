'use client'

import Princesses from '../../Princesses'
import Link from 'next/link'
import PrincessForm from '../../../components/PrincessForm'
import { useState, useEffect } from 'react'

function PrincessName(p) {
    const [brincess, setBrincess] = useState(null)
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
                        query: `query Brincess($id: ID!) {
                                brincess(id: $id) {id, backgroundColor {string}, hair {style, color {string}}, name, mouth {up {string}, down {string}}, eyes {left {string}, right {string}}}
                                }`,
                        variables: {
                            id: p.params.uuid
                        }
                    })
                }
            )
            const json = await graphqlResponse.json()
            setBrincess(json.data.brincess)
        }
        fetchData()
    }, [p.params.uuid])

    return (
        <section className="edit-container">
            <PrincessForm />
            <section className="princess-section">
                <h1>
                    (param → ) {p.params.princessName} (brincess → ){' '}
                    {brincess?.name}
                </h1>
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
