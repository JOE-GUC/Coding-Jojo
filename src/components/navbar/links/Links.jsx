import Link from 'next/link';
import styles from './links.module.css'
import React from 'react'

const Links = () => {
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Courses",
            path: "/courses",
        },
        {
            title: "",
            path: "/login",
        },
        {
            // title: "Sign Up",
            path: "/signUp",
        },
    ];
    return (
        <div className={styles.links}>
            {links.map((link=>(
                <Link href={link.path} key={link.title}>{link.title}</Link>
            )))}
                    <Link href="/signUp" className={styles.btn}>Sign Up</Link>

        </div>
    )
}

export default Links