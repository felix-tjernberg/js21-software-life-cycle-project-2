import classes from '../styles/Home.module.css'
import Princesses from './Princesses'
import PrincessForm from '../components/PrincessForm'
import '../public/bp-logo.png'
import {
    ADD_BRINCESS_QUERY,
    GET_ALL_BRINCESSES_QUERY
} from '../utilities/graphqlQuerys'

async function Home() {
    const graphqlresponse = await fetch(
        // 'https://graphqllearning1.azurewebsites.net',
        'http://localhost:4000/',
        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                query: GET_ALL_BRINCESSES_QUERY
            })
        }
    )
    const json = await graphqlresponse.json()
    const brincesses = json.data.brincesses

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
                    {brincesses.map((princess, index) => {
                        return <Princesses key={index} princess={princess} />
                    })}
                </div>
            </section>
        </section>
    )
}

export default Home
