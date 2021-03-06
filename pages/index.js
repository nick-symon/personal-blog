import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Layout>
        <div className={styles.grid}>
          <div className={styles.photo}></div>
          <div className={styles.textContainer}>
            <h1 className={styles.header}>Hi, I'm Nick!</h1>
            <h3 className={styles.subHead}>I'm a Software Developer who loves Ruby and React.</h3>
            <br></br>
            <h3>Please check out my{' '} 
              <Link href="/projects">
                  <a>Projects</a>
              </Link> and{" "} 
              <Link href="/blog">
                  <a>Blog</a>
              </Link>
              </h3>
          </div>
          
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
        </div>
    </Layout>

  )
}
