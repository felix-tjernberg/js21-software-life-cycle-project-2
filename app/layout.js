import '../styles/globals.css'
import '../components/ConsentPopUp.module.css'
import '../components/PrincessForm.module.css'
import '../styles/Princess.module.css'
import ConsentPopUp from '../components/ConsentPopUp'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Brincess Puldlling</title>
                <meta charSet="UTF-8" />
                <meta
                    name="authors"
                    content="Felix Tjernberg, Gustav Löwen-Åberg & Isak Martinson"
                />
                <meta name="description" content="Build your own brincess" />
                <meta
                    name="keywords"
                    content="HTML, CSS, JavaScript, React, Next JS 13"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <main>{children}</main>
                <ConsentPopUp />
            </body>
        </html>
    )
}
