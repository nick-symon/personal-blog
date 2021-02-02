import Layout from '../components/Layout'
import styles from '../styles/Projects.module.scss'

export default function Projects(){
    return(
        <Layout>
        <h1 className={styles.mainHeader}>Projects</h1>
            <div className={styles.grid}>
            <a href="https://www.podpeople.app/" title="Pod People" target="_blank">
                <h2>Pod People</h2>
            </a>
                <div>
                <p>A social networking app centered around podcasts, currenly in Beta. I used the Python Scrapy web scraping library to compile a database of the most popular podcasts on the iTunes directory.
                The back-end was built using the Django Rest Framework. The front-end is a SPA built with React and SASS.</p>
                </div>
            </div>
        </Layout>
    )
} 