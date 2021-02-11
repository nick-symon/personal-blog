import Link from 'next/link'
import styles from './navheader.module.scss'
import { useState, useEffect } from 'react'
import cn from 'classnames' 

export default function NavHeader() {
    const [active, setActive] = useState(false);

    const handleOutsideClick = (e) => {
        console.log(e.target.classList);
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
                    <li className={styles.linkItem}><Link href="/projects"><a className={styles.link}>Projects</a></Link></li>
                    <li className={styles.linkItem}><Link href="/blog"><a className={styles.link}>Blog</a></Link></li>
                    <li className={styles.linkItem}><Link href="/blog/about-me"><a className={styles.link}>About</a></Link></li>
                </ul> 
        </div>
        </>       
    )
}

