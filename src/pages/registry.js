import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';


export default function Photos() {
  return (
    <div>
      <title>Becca + Frank</title>
      <Links/>
      <div className={styles.title}>Registry </div>
      <br></br>
      <div style ={{display: 'flex', justifyContent: 'center'}}>
        <div className ={styles.faq}>

          <div style ={{fontSize: '20px', textAlign: 'center'}}>We love receiving mail and especially greeting cards! We would love to add your card to our collage wall!</div>
          <br></br>
          <div style ={{fontSize: '20px', textAlign: 'center'}} >Our mailing address is 50 east 18th St #C7, Brooklyn NY, 11226</div>
          <br></br>
          <div style ={{display: 'flex', justifyContent: 'center'}} >
            <a style ={{fontSize: '20px'}} href="https://www.zola.com/beccafrank">We are registered at Zola.com</a>
          </div>
        </div>
      </div>
      <Link/>
    </div>
  );
}
