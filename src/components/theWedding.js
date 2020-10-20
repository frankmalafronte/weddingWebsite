import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styles from '../components/styles.module.css';
import Links from './links';
import WeddingParty from '../components/weddingParty';


const TheWedding = () => {
  const data = useStaticQuery(graphql`
    query {
      coolGuy: file(relativePath: { eq: "proposal/coolGuy.jpg" }) {
        id
        childImageSharp {
          fluid (maxWidth:1500 maxHeight:600 fit:COVER ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);


  return (
    <div>
      <div className={styles.heroTop}>Frank + Becca</div>
      <div className={styles.heroBottom}>December 31, 2020</div>
      <div>
        <Img fluid={data.coolGuy.childImageSharp.fluid}/>
        <div className ={styles.heroBottom} style={{paddingTop: '50px'}}>The Wedding</div>
        <h2 className ={styles.center}>December 31, 2020</h2>
        <h2 className ={styles.center}>5:30 – 7:30PM EST</h2>
        <div className ={styles.center}><br/>On Zoom </div>
        <div className ={styles.center}>(Link coming soon!)<br/><br/><br/><br/></div>
        {/* <WeddingParty/> */}
      </div>
    </div>
  );
};

export default TheWedding;
