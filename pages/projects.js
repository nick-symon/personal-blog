import Layout from '../components/Layout'
import styles from '../styles/Projects.module.scss'

export default function Projects(){
    return(
        <Layout>
        <h1 className={styles.mainHeader}>Projects</h1>
            <a href="https://www.podpeople.app/" title="Pod People" target="_blank">
                <h2>Pod People</h2>
            </a>
                <p>A social networking app centered around podcasts.</p>
                <p>Built with React, Sass, and Django Rest Framework.</p>
        </Layout>
    )
} 