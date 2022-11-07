import classes from '../styles/Home.module.css'
import Princess from './Princess'

async function Home() {
    const princesses = [
        { name: 'cinderella', color: 'blue' },
        { name: 'snövit', color: 'green' },
        { name: 'törnrosa', color: 'red' },
        { name: 'rapunzel', color: 'orange' },
        { name: 'elsa', color: 'white' }
    ]
    // async function Home(req, res) {
    //     const graphqlresponse = await fetch(
    //         'https://graphqllearning1.azurewebsites.net',
    //         {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Accept: 'application/json'
    //             },
    //             method: 'POST',
    //             body: JSON.stringify({ query: '{hello}' })
    //         }
    //     )
    //     const json = await graphqlresponse.json()
    //     res.status(200).json(json)
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
                {princesses.map((princess, index) => {
                    return <Princess key={index} princess={princess} />
                })}
            </section>
        </section>
    )
}

export default Home
