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
          <div className={styles.faq} style={{fontSize: '16pt', textAlign: 'center'}}><br/>
            December 31, 2020<br/>5:30 – 7:30PM EST<br/>
            <br/>
            <div></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fd5fzA4NDd8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
           <br/>
           <br/>
           </div>
          
        </div>
 
        <WeddingParty/>
      </div>
    </div>
  );
};

export default TheWedding;
