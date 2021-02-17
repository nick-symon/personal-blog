import Layout from '../components/Layout'
import styles from '../styles/Projects.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function Projects(){
    return(
        <Layout>
        <div className={styles.grid}>
            <h1 className={utilStyles.mainHeader}>Projects</h1>
                <div className={styles.subGrid}>
                <a href="https://www.podpeople.app/" title="Pod People" target="_blank">
                    <h2>Pod People</h2>
                </a>
                    <div>
                    <p>A social networking app centered around podcasts, currently in Beta. I used the Python Scrapy web scraping library to compile a database of the most popular podcasts on the iTunes directory.
                    The back-end was built using the Django Rest Framework. The front-end is a SPA built with React and SASS.</p>
                    </div>
                </div>
        </div>
        </Layout>
    )
} 