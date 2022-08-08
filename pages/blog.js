import Link from 'next/link'
import React from 'react'
import styles from '../styles/blog.module.css'

const Blog = () => {
  return (
    <div className={styles.main}>
    
    <div className="blogItem">
       <Link href={'/blogpost/learn-nextjs'}><h3 >How to learn Next</h3></Link>
      <p>Lorem ipsum dolor sit amet consectetur adipoptio.</p>
    </div>
    <div className="blogItem">
      <h3>How to learn Next</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipoptio.</p>
    </div>
   </div>
  )
}

export default Blog
