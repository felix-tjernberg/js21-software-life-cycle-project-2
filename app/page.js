import classes from '../styles/Home.module.css'
import Princess from './Princess'
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
            backgroundColor: {
                string: '#7F0',
                imgSrc: 'https://i.imgur.com/0F0.png'
            },
            hair: { style: 'long', color: { string: '#6F0', imgSrc: null } },
            eyes: {
                right: { string: '#0F0', imgSrc: null },
                left: { string: '#000', imgSrc: null }
            },
            mouth: {
                up: { string: '#4F0', imgSrc: null },
                down: { string: '#500', imgSrc: null }
            }
        },
        {
            name: 'Brincess 2',
            backgroundColor: { string: '#3F0', imgSrc: null },
            hair: { style: 'short', color: { string: '#2F0', imgSrc: null } },
            eyes: {
                right: { string: '#0F0', imgSrc: null },
                left: { string: '#000', imgSrc: null }
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
                <img
                    className={classes['bp-logo']}
                    src={'bp-logo.png'}
                    alt="brincess-puldlling-logo"
                />
                <PrincessForm />
            </aside>
            <section className={classes.main}>
                {brincesses.map((princess, index) => {
                    return <Princess key={index} princess={princess} />
                })}
            </section>
        </section>
    )
}

export default Home
