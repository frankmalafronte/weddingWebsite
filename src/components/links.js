import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../components/styles.module.css';

export default function Links({children}) {
  return (
    <header className="app-wrapper">
      <div className={styles.header} >
        <Link to ="/">
          <div> <button >Our Wedding</button></div></Link>
        <Link to ="/RSVP"><button>RSVP</button></Link>
        <Link to ="/ourStory"><button>Our Story</button></Link>

        <div className={styles.dropDown} >
          <button className={styles.dropButton}>Photos</button>
          <div className ={styles.dropDownContent} id="dropDownContainer">
            <Link to="/photos">Us In Love</Link>
            <Link to="/proposal">Proposal Photos</Link>
            <Link to="/engagement">Engagement Photos</Link>
            <Link to="/cats">Cat Photos</Link>
          </div>
        </div>

        <Link to="/FAQ"><button>FAQ</button></Link>
        <Link to ="/guestBook"><button>Guest Book</button> </Link>
        <Link to ="/registry"><button>Registry</button> </Link>
      </div>
      <div>
        {children}
      </div>
    </header>
  );
}

