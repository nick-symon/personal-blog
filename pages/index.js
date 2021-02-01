import Head from 'next/head'
import NavHeader from '../components/NavHeader'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavHeader />

      <main className={styles.main}>
        <h1>Hi, I'm Nick. Welcome to my personal website and blog!</h1>
        <h3>Oh, I forgot to mention. I'M PICKLE RICK!!!</h3>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
