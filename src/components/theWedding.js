import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styles from '../components/styles.module.css';
import Links from './links';
import WeddingParty from './weddingParty';


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
      <title>Becca + Frank</title>
      <div className={styles.heroTop}>Frank + Becca</div>
      <div className={styles.heroBottom}>December 31, 2020</div>
      <div>
        <Img fluid={data.coolGuy.childImageSharp.fluid}/>
        <div className ={styles.heroBottom} style={{paddingTop: '50px'}}>The Wedding</div>
        <div className = {styles.faqContainer}>
          <div className={styles.faq} style={{fontSize: '16pt', textAlign: 'center'}}><br/>
            December 31, 2020<br/>5:30 – 7:30PM EST<br/>
            <br/>
            On Zoom<br/>
            (Link coming soon!)<br/><br/></div>
          <div className={styles.faq} style={{fontSize: '14pt'}}>As we prepare to start the next chapter of our lives together,
          we want to be surrounded by all of the people who have helped shape who we are as individuals and as a couple. <br/><br/>
          That's why we are so grateful to be able to make things official over Zoom on New Year's Eve. <a href="/FAQ">Read more here >></a>> </div>
        </div>
        {/* <WeddingParty/> */}
      </div>
    </div>
  );
};

export default TheWedding;
