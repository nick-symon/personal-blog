import Link from 'next/link'
import styles from './navheader.module.scss'

export default function NavHeader() {
    return (
        <div className={styles.container}>
            <Link href="/" >
                {/* <a className={styles.icon}>&#128012;</a> */}
                <a className={styles.icon}>&#129437;</a>
            </Link>

            <Hamburger />
        </div>
    )
}


export function Hamburger() {
    return(
        <div className={`${styles.hamburgerContainer}`}>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
        </div>
    )
}