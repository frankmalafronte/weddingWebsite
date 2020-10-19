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
          fluid (maxWidth:500 maxHeight:200 ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);


  return (
    <div>
      <div className ={styles.center} style={{padding: '50px', fontSize: '100px'}}>Frank + Becca</div>
      <div className ={styles.center} style={{paddingBottom: '50px', fontSize: '50px'}}>December 31st, 2020</div>
      <div>
        <Img fluid={data.coolGuy.childImageSharp.fluid}/>
        <div className ={styles.center}>The Wedding</div>
        <div className ={styles.center}>December 31st, 2020</div>
        <div className ={styles.center}>5:30 PM</div>
        <div className ={styles.center}>On Zoom (zoom link here?)</div>
        {/* <WeddingParty/> */}
      </div>
    </div>
  );
};

export default TheWedding;
