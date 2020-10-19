import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styles from '../components/styles.module.css';
import Links from './links';
import WeddingParty from '../components/weddingParty';


const TheWedding = () => {
  const usAndCats = useStaticQuery(graphql`
    query {
      cats: file(relativePath: { eq: "usAndCats.jpg" }) {
        id
        childImageSharp {
          fluid (maxWidth:500 maxHeight:200 ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  if (!usAndCats.cats.childImageSharp.fluid) {
    return <div>Picture not found</div>;
  }

  return (
    <div>
      <div className ={styles.center} style={{padding: '50px', fontSize: '100px'}}>Frank + Becca</div>
      <div className ={styles.center} style={{paddingBottom: '50px', fontSize: '50px'}}>December 31st, 2020</div>
      <div>
        <Img fluid={usAndCats.cats.childImageSharp.fluid}/>
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
