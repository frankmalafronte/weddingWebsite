import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from '../components/styles.module.css';

export default function Links ({children}){
  return (
    <header className="app-wrapper">
  <div className={styles.nav} >
  <Link to ="/"><button className={styles.navLink}>Our Wedding</button></Link>
  <Link to ="/RSVP"><button className={styles.navLink}>RSVP</button></Link>
  <Link to ="/ourStory"><button className={styles.navLink}>Our Story</button></Link>
  <Link to="/photos"><button className={styles.navLink}>Photos</button></Link>
  <Link to="/FAQ"><button className={styles.navLink}>FAQ</button></Link>
  <Link to ="/guestBook"><button className={styles.navLink}>Guest Book</button> </Link>
  <Link to ="/registry"><button className={styles.navLink}>Registry</button> </Link>
  </div>
  <div>  
    {children}
</div>
  </header>
  )
}

