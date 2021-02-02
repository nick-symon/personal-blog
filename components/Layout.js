import Head from 'next/head'
import Link from 'next/link'
import NavHeader from './NavHeader'
import styles from './layout.module.scss'

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>Nick Symon</title>
        <link rel="icon" href="/favicon.svg"></link>
      </Head>

      <NavHeader />

      <main className={styles.container}>{children}</main>

      <footer className={styles.footer}>
      Built by Nick Symon with <a href="https://nextjs.org/" target="_blank">NextJS</a>
      </footer>
    </>
  )
}
