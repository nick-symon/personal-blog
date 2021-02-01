import Head from 'next/head'
import Link from 'next/link'
import NavHeader from '../components/NavHeader'
import styles from '../styles/Home.module.scss'
// import sprite from '../public/symbol-defs.svg'

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
        <h1>Hi, I'm Nick!</h1>
        <h2>I love working with React, CSS and Python</h2>
        <h2>Please check out my
          <Link href="/projects">
              <a> Projects</a>
          </Link> and 
          <Link href="/blog">
              <a> Blog</a>
          </Link>
          </h2>
        
        <div className={styles.linkContainer}>
          <a href="https://github.com/nick-symon" title="GitHub" target="_blank">
            <svg className={styles.linkIcon}><use href='/symbol-defs.svg#icon-github'></use></svg>
          </a>
          <a href="https://www.linkedin.com/in/nicksymon/" title="LinkedIn" target="_blank">
          <svg className={styles.linkIcon}><use href='/symbol-defs.svg#icon-linkedin-square'></use></svg>
          </a>
          <a href="mailto:symon.nick@gmail.com" title="email" target="_blank">
          <svg className={styles.linkIcon}><use href='/symbol-defs.svg#icon-envelope'></use></svg>
          </a>
        </div>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
