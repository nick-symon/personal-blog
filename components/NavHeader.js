import Link from 'next/link'
import styles from './navheader.module.scss'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames' 

export default function NavHeader() {
    const [active, setActive] = useState(false);
    let router = useRouter()

    const handleOutsideClick = (e) => {
        if (
            active &&
            !e.target.classList.contains(styles.link) &&
            !e.target.classList.contains(styles.linkItem) &&
            !e.target.classList.contains(styles.button) &&
            !e.target.classList.contains(styles.burger)
        ) {
            setActive(!active)
        }
    }

    function checkPath(e) {
        const href = e.target.attributes.href.value; 
        href === router.asPath && setActive(!active)
    }

    useEffect(()=> {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.addEventListener("mousedown", handleOutsideClick);
        };
    });

    return (
        <>
        <div className={styles.grid}>
            <div className={styles.container}>
                <Link href="/" >
                    <a className={styles.icon}>&#129437;</a>
                </Link>

                <button className={styles.button} onClick={() => setActive(!active)}>
                    <span className={styles.burger}></span>
                </button>

            </div>
                <ul className={cn({
                    [styles.linkList]: true,
                    [styles.linkListHidden]: !active
                    })}
                    >
                    <li className={styles.linkItem}><Link href="/projects" passHref><a onClick={checkPath} className={styles.link}>Projects</a></Link></li>
                    <li className={styles.linkItem}><Link href="/blog"><a onClick={checkPath} className={styles.link}>Blog</a></Link></li>
                    <li className={styles.linkItem}><Link href="/blog/about-me"><a onClick={checkPath} className={styles.link}>About</a></Link></li>
                </ul> 
        </div>
        </>       
    )
}

function NavLink ({href, children}) {
    const router = useRouter()

    if (router.pathname === href) {

    }
}
