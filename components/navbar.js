import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
       <nav className={styles.mainnav}>
    <ul>
      <Link href='/'><a><li>Home</li></a></Link>
      <Link href='/about'><a><li>About</li></a></Link>
      <Link href='/blog'><a><li>Blog</li></a></Link>
      <Link href='/contect'><a><li>Contect</li></a></Link>
    </ul>
   </nav>
    </div>
  )
}

export default Navbar
