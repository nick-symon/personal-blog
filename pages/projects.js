import NavHeader from '../components/NavHeader'
import Head from 'next/head'
import styles from '../styles/Projects.module.scss'

export default function Projects(){
    return(
        <>
        <Head>
        <title>Nick Symon</title>
        <link rel="icon" href="/favicon.svg"></link>
        </Head>

        <NavHeader />
        <div className={styles.container}>
            <h1 className={styles.mainHeader}>Projects</h1>
            <a href="https://www.podpeople.app/" title="Pod People" target="_blank">
                <h2>Pod People</h2>
            </a>
                <p>A social networking app centered around podcasts.</p>
                <p>Built with React, Sass, and Django Rest Framework.</p>
        </div>
        </>
    )
} 