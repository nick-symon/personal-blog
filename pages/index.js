import Head from 'next/head'
import NavHeader from '../components/NavHeader'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nick Symon</title>
        <link rel="icon" href="/favicon.svg"></link>
      </Head>

      <NavHeader />

      <main className={styles.main}>
        <img src="/nick-photo.jpg" alt="Hi, I'm Nick!" className={styles.photo}/>
        <h2>Hi, I'm Nick. Welcome to my personal website and blog!</h2>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
