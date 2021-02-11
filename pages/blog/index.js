import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/Blog.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import { getSortedPostsData } from '../../lib/posts'

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
            <div className={styles.grid}>
                <h1 className={utilStyles.mainHeader}>Posts</h1>
                <ul>
                {allPostsData.map(({id, title, date}) => (
                    <li className={styles.listItem} key={id}>
                        <Link href={`blog/${id}`}>
                            <a className={styles.link}>{title}</a>
                        </Link>
                        <p>{date}</p>
                    </li>
                ))}
                </ul>
            </div>
        </Layout>
    )
}