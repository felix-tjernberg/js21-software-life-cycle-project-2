import classes from '../styles/Home.module.css'
import Princesses from './Princesses'
import PrincessForm from '../components/PrincessForm'
import '../public/bp-logo.png'

async function Home() {
    // async function Home(req, res) {
    // const graphqlresponse = await fetch(
    //     'https://graphqllearning1.azurewebsites.net',
    //     {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Accept: 'application/json'
    //         },
    //         method: 'POST',
    //         body: JSON.stringify({
    //             query: `{
    //                 brincesses {
    //                   name,
    //                   backgroundColor {string, imgSrc},
    //                   hair {style, color {string imgSrc} }
    //                   eyes {right {string imgSrc} left {string imgSrc} }
    //                   mouth {up {string imgSrc} down {string imgSrc} }
    //                 }
    //               }`
    //         })
    //     }
    // )
    // const json = await graphqlresponse.json()
    // console.log(json[0].backgroundColor.string)
    // console.log(json.data.brincesses[0])
    // res.status(200).json(json)

    const brincesses = [
        {
            name: 'Brincess 1',
            eyes: { right: { string: '#0F0' }, left: { string: '#000' } },
            mouth: { up: { string: '#4F0' }, down: { string: '#500' } },
            hair: { color: { string: '#6F0' }, style: 'long' },
            backgroundColor: { string: '#7F0' },
            creationTimeStamp: Date.now(),
            authorId: '734147a3-9876-4f26-9ddd-b394ef93e732',
            id: '06986b57-5ebb-4647-8702-62b12b7759a1',
            spells: {
                first: {
                    name: 'Flash',
                    description: 'Distract your enemy with your curves'
                },
                second: {
                    name: 'Bite',
                    description: 'You set your teeth in your enemy'
                }
            },
            health: 1337
        },
        {
            name: 'Brincess 2',
            eyes: { right: { string: '#0F0' }, left: { string: '#000' } },
            mouth: { up: { string: '#1F0' }, down: { string: '#100' } },
            hair: { color: { string: '#2F0' }, style: 'short' },
            backgroundColor: { string: '#3F0' },
            creationTimeStamp: Date.now(),
            authorId: '734147a3-9876-4f26-9ddd-b394ef93e732',
            id: '6375393e-a746-4045-ba42-d32a5cc23ba3',
            spells: {
                first: {
                    name: 'Flash',
                    description: 'Distract your enemy with your curves'
                },
                second: {
                    name: 'Bite',
                    description: 'You set your teeth in your enemy'
                }
            },
            health: 1337
        }
    ]

    return (
        <section className={classes.container}>
            <aside className={classes.sidebar}>
                <img
                    className={classes['bp-logo']}
                    src={'bp-logo.png'}
                    alt="brincess-puldlling-logo"
                />
                <PrincessForm />
            </aside>
            <section className={classes.main}>
                <div className={classes['princesses-container']}>
                    {brincesses.map((princess, index) => {
                        return <Princesses key={index} princess={princess} />
                    })}
                </div>
            </section>
        </section>
    )
}

export default Home
