import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../components/styles.module.css';

export default function Links({children}) {
  return (
    <header className="app-wrapper">
      <div className={styles.nav} >
        <Link to ="/">
          <div> <button className={styles.navLink} >Our Wedding</button></div></Link>
        <Link to ="/RSVP"><button className={styles.navLink}>RSVP</button></Link>
        {/* <Link to ="/ourStory"><button className={styles.navLink}>Our Story</button></Link> */}
        <div className={styles.dropDown} >
          <button className={styles.dropButton}>Photos</button>
          <div className ={styles.dropDownContent} id="dropDownContainer">
            <Link to="/usInLove">Us In Love</Link>
            <Link to="/proposal">The Proposal</Link>
            {/* <Link to="/engagement">Engagement</Link>
            <Link to="/cats">Our Boys 😺😺</Link> */}
          </div>
        </div>

        <Link to="/FAQ"><button className={styles.navLink}>FAQ</button></Link>
        {/* <Link to ="/guestBook"><button className={styles.navLink}>Guest Book</button> </Link> */}
        <Link to ="https://www.zola.com/registry/beccafrank"><button className={styles.navLink}>Registry</button> </Link>
      </div>
      <div>
        {children}
      </div>
    </header>);
}
