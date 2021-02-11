import Layout from '../../components/Layout'
import styles from '../../styles/Blog.module.scss'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
}

export default function Blog({postData}) {
    return( 
    <Layout>
    <div className={styles.grid}>
        <h1 className={styles.header}>{postData.title}</h1>
        <p className={styles.date}>{postData.date}</p>
        <div className={styles.contentContainer} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
    </Layout>
    )
}
