import Head from 'next/head'
import NavHeader from '../components/NavHeader'

export default function BlogIndex() {
    return(
        <>
        <Head>
        <title>Nick Symon</title>
        <link rel="icon" href="/favicon.svg"></link>
        </Head>

        <NavHeader/>
        <h1>Coming soon!</h1>
        </>
    )
}