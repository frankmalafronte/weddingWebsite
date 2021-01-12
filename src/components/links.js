import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../components/styles.module.css';

export default function Links({children}) {
  return (
    <header className="app-wrapper">
      <div className={styles.nav} >
        
        <div className={styles.dropDown} >
        <Link to ="/"><button className={styles.dropButton}>Our Wedding</button></Link>
          <div className ={styles.dropDownContent} id="dropDownContainer">
          <Link to = "/details">Special Details</Link>
          <Link to = "/cocktails">Cocktails</Link>
          <Link to ="/weddingParty">Wedding Party</Link>
          <Link to ="/in-memoriam">In Memoriam</Link>
          </div>
        </div>
        <Link to ="/ourStory"><button className={styles.navLink}>Our Story</button></Link>

        <div className={styles.dropDown} >
          <button className={styles.dropButton}>Photos + Videos</button>
          <div className ={styles.dropDownContent} id="dropDownContainer">
          <Link to ="/weddingDay">Wedding Day</Link>
          <Link to ="/music">Music</Link>
          <Link to ="/fromOurFriends">From Our Friends</Link>
          <Link to="/engagement">Engagement</Link>
          <Link to="/usInLove">Us In Love</Link>
          <Link to="/proposal">The Proposal</Link>
          </div>
        </div>

        <Link to="/FAQ"><button className={styles.navLink}>FAQ</button></Link>
        {/* <Link to ="/guestBook"><button className={styles.navLink}>Guest Book</button> </Link> */}
        <Link to ="/registry"><button className={styles.navLink}>Registry</button> </Link>
      </div>
      <div>
        {children}
      </div>
    </header>);
}
