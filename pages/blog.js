import Layout from '../components/Layout'
import styles from '../styles/Blog.module.scss'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
}

export default function BlogIndex({allPostsData}) {
    return(
        <Layout>
            <main className={styles.grid}>
                <h1 className={utilStyles.mainHeader}>Blog Posts</h1>
                <ul>
                {allPostsData.map(({id, title, date}) => (
                    <li key={id}>
                        {id}
                        <br/>
                        {title}
                        <br/>
                        {date}
                        <br/>
                    </li>
                ))}
                </ul>
            </main>
        </Layout>
    )
}