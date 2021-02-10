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
    <main className={styles.grid}>
        <h3>{postData.title}</h3>
        <br />
        <h4>{postData.date}</h4>
        <br/>
        {/* <div> */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        {/* </div> */}
    </main>
    </Layout>
    )
}
