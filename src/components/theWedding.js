import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styles from '../components/styles.module.css';
import Links from './links';
import WeddingParty from './weddingParty';


const TheWedding = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "weddingDay/sue/ceremony/ceremony6.JPG" }) {
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
      <title>Becca + Frank</title>
      <div className={styles.heroTop}>Frank + Becca</div>
      <div className={styles.heroBottom}>December 31, 2020</div>
      <div>
        <Img fluid={data.cover.childImageSharp.fluid}/>
        <div className ={styles.heroBottom} style={{paddingTop: '50px'}}>Our Zoom Wedding</div>
        <div className = {styles.faqContainer}>
          <div className={styles.faq}>
            <div style={{fontSize: '16pt', textAlign: 'center'}}><br/>December 31, 2020<br/><br/></div>
            <div>Thank you to all who joined us for our Zoom ceremony! We hope you enjoy this recording of the big day and that it brings your smiles and joy. We have also added photos and videos from throughout the day, so be sure to check it out!
            <br/><br/>We hope you are safe and well, and we so look forward to the day we can all be in person together again! 
            <br/><br/>Love, Becca and Frank <br/><br/>
            <div></div>
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/fd5fzA4NDd8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe> 
           <br/>
           <br/>
           </div></div>
          
        </div>
 
        <WeddingParty/>
      </div>
    </div>
  );
};

export default TheWedding;
