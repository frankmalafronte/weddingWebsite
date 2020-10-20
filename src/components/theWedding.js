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
      <div className ={styles.center} style={{paddingTop: '50px', fontSize: '100px'}}>Frank & Becca</div>
      <div className ={styles.center} style={{paddingBottom: '50px', fontSize: '50px'}}>December 31, 2020</div>
      <div>
        <Img fluid={data.coolGuy.childImageSharp.fluid}/>
        <div className ={styles.center} style={{paddingTop: '50px', fontSize: '50px'}}>The Wedding</div>
        <h3 className ={styles.center} style={{paddingTop: '25px'}}>December 31, 2020</h3>
        <h3 className ={styles.center}>5:30 – 7:30PM EST</h3>
        <div className ={styles.center}><br/>On Zoom </div>
        <div className ={styles.center}>(Link coming soon!)<br/><br/><br/><br/></div>
        {/* <WeddingParty/> */}
      </div>
    </div>
  );
};

export default TheWedding;
