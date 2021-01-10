import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import styles from '../components/styles.module.css';
import Links from './links';
import WeddingParty from './weddingParty';


const TheWedding = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "weddingDay/sue/post/ceremony6.JPG" }) {
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
            <a href="https://www.zola.com/registry/beccafrank" target="_blank"><a href="https://us02web.zoom.us/j/84784993103" target="_blank">Zoom Link!</a></a>
            <div>Passcode: beccafrank</div>
           <br/>
           <br/>
           </div>
          <div className={styles.faq} style={{fontSize: '14pt'}}>As we prepare to start the next chapter of our lives together,
          we want to be surrounded by all of the people who have helped shape who we are as individuals and as a couple. <br/><br/>
          That's why we are so grateful to be able to make things official over Zoom on New Year's Eve. <a href="/FAQ">Read more here </a></div>
        </div>
        <div className ={styles.heroBottom} style={{paddingTop: '50px'}}>The New Year's Eve After Party</div>
        <div className = {styles.faqContainer}>
          <div className={styles.faq} style={{fontSize: '16pt', textAlign: 'center'}}><br/>
            December 31, 2020<br/>10:00 PM – 12:30 AM EST<br/>
            <br/>
            <div></div>
            <a href="https://www.zola.com/registry/beccafrank" target="_blank"><a href="https://us02web.zoom.us/j/81967859329" target="_blank">Zoom Link!</a></a>
            <div>Passcode: beccafrank</div>
           <br/>
           <br/>
           </div>
          <div className={styles.faq} style={{fontSize: '14pt'}}>Since we won't be able to speak to you all during the ceremony, we wanted to create an open zoom room so we can party all the way into the new year!</div>
        </div>
        <WeddingParty/>
      </div>
    </div>
  );
};

export default TheWedding;
