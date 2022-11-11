import classes from '../styles/Home.module.css'
import Princess from './Princess'

async function Home() {
    // async function Home(req, res) {
    //     const graphqlresponse = await fetch(
    //         'https://graphqllearning1.azurewebsites.net',
    //         {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Accept: 'application/json'
    //             },
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 query: `{
    //                 brincesses {
    //                   name,
    //                   backgroundColor {string, imgSrc},
    //                   hair {style, color {string imgSrc} }
    //                   eyes {right {string imgSrc} left {string imgSrc} }
    //                   mouth {up {string imgSrc} down {string imgSrc} }
    //                 }
    //               }`
    //             })
    //         }
    //     )
    //     const json = await graphqlresponse.json()
    // console.log(json[0].backgroundColor.string)
    // console.log(json.data.brincesses[0])
    // res.status(200).json(json)

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
        },
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

    return (
        <section className={classes.container}>
            <aside className={classes.sidebar}>
                <p>
                    Här kommer vi ha ett form där man kan lägga till fler
                    prinsessor
                </p>
                <button className={classes.addButton}>Add Brincess</button>
            </aside>
            <section className={classes.main}>
                <div className={classes['princesses-container']}>
                    {brincesses.map((princess, index) => {
                        return <Princess key={index} princess={princess} />
                    })}
                </div>
            </section>
        </section>
    )
}

export default Home
