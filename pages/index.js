import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'
// import sprite from '../public/symbol-defs.svg'

export default function Home() {
  return (
    <Layout>
        <div className={styles.textContainer}>
          <img src="/nick-photo.jpg" alt="Hi, I'm Nick!" className={styles.photo}/>
          <h1>Hi, I'm Nick!</h1>
          <h2>I love working with React, CSS and Python.</h2>
          <h2>I used to be a big 4 CPA.</h2>
          <h2>Please check out my
            <Link href="/projects">
                <a> Projects</a>
            </Link> and 
            <Link href="/blog">
                <a> Blog</a>
            </Link>
            </h2>
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
    </Layout>

  )
}
