import Head from 'next/head'
import Link from 'next/link'
import NavHeader from './NavHeader'
import styles from './layout.module.scss'

export default function Layout({children}) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Nick Symon</title>
        <link rel="icon" href="/favicon.svg"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>

      <NavHeader />

      <main className={styles.container}>{children}</main>

      <footer className={styles.footer}>
      Built by Nick Symon with <a href="https://nextjs.org/" target="_blank">Next.js</a>
      </footer>
    </div>
  )
}
