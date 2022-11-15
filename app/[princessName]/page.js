'use client'

import classes from '../../styles/Princess.module.css'
import Princesses from '../Princesses'
import Link from 'next/link'

function PrincessName(p) {
    const brincesses = [
        {
            name: 'Askungen',
            backgroundColor: {
                string: '#cdb4db',
                imgSrc: 'https://i.imgur.com/0F0.png'
            },
            hair: { style: 'long', color: { string: '#a2754f', imgSrc: null } },
            eyes: {
                right: { string: '#fff', imgSrc: null },
                left: { string: '#fff', imgSrc: null }
            },
            mouth: {
                up: { string: '#4F0', imgSrc: null },
                down: { string: '#500', imgSrc: null }
            }
        },
        {
            name: 'Törnrosa',
            backgroundColor: { string: '#bde0fe', imgSrc: null },
            hair: {
                style: 'long',
                color: { string: '#c9922d', imgSrc: null }
            },
            eyes: {
                right: { string: '#fff', imgSrc: null },
                left: { string: '#fff', imgSrc: null }
            },
            mouth: {
                up: { string: '#1F0', imgSrc: null },
                down: { string: '#100', imgSrc: null }
            }
        },
        {
            name: 'Snövit',
            backgroundColor: { string: '#ffc8dd', imgSrc: null },
            hair: {
                style: 'long',
                color: { string: '#030301', imgSrc: null }
            },
            eyes: {
                right: { string: '#fff', imgSrc: null },
                left: { string: '#fff', imgSrc: null }
            },
            mouth: {
                up: { string: '#1F0', imgSrc: null },
                down: { string: '#100', imgSrc: null }
            }
        },
        {
            name: 'Rapunzel',
            backgroundColor: { string: '#a2d2ff', imgSrc: null },
            hair: {
                style: 'long',
                color: { string: '#d19d64', imgSrc: null }
            },
            eyes: {
                right: { string: '#fff', imgSrc: null },
                left: { string: '#fff', imgSrc: null }
            },
            mouth: {
                up: { string: '#1F0', imgSrc: null },
                down: { string: '#100', imgSrc: null }
            }
        },
        {
            name: 'Elsa',
            backgroundColor: { string: '#ffafcc', imgSrc: null },
            hair: {
                style: 'long',
                color: { string: '#d0beab', imgSrc: null }
            },
            eyes: {
                right: { string: '#fff', imgSrc: null },
                left: { string: '#fff', imgSrc: null }
            },
            mouth: {
                up: { string: '#1F0', imgSrc: null },
                down: { string: '#100', imgSrc: null }
            }
        }
    ]

    const brincess = brincesses?.find((brincess) => {
        if (brincess?.name === p.params.princessName) return brincess
    })

    return (
        <section className={classes['edit-container']}>
            <aside className={classes['edit-princess']}>
                <h1>Edit thy Brincess</h1>
            </aside>
            <section className={classes['princess-section']}>
                <h1>
                    (param → ) {p.params.princessName} (brincess → ){' '}
                    {brincess?.name}
                </h1>
                <section className={classes.main}>
                    <div className={classes['princesses-container']}>
                        {<Princesses princess={brincess} />}
                    </div>
                </section>
                <Link href={'/'}>Go back</Link>
            </section>
        </section>
    )
}
export default PrincessName
