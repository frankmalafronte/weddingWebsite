import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from '../components/styles.module.css';

export default function Links ({children}){
  return (
    <header className="app-wrapper">
  <div className={styles.header} >
  <Link to ="/">
  <div> <button className={styles.dropButton}>Our Wedding</button></div></Link>
  <Link to ="/RSVP"><button>RSVP</button></Link>
  <Link to ="/ourStory"><button>Our Story</button></Link>

  <Link to="/photos">
  <div className={styles.dropDown}>
  <button className={styles.dropButton}>Photos</button>
  <div className = {styles.dropDownContent}>
  <a>Us In Love</a>
  <a>Proposal Photos</a>
  <a>Engagement Photos</a>
  </div>
  </div>
  </Link>

  <Link to="/FAQ"><button>FAQ</button></Link>
  <Link to ="/guestBook"><button>Guest Book</button> </Link>
  <Link to ="/registry"><button>Registry</button> </Link>
  </div>
  <div>  
    {children}
</div>
  </header>
  )
}

