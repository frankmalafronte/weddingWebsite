import React, {useState} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from './links';
import styles from '../components/styles.module.css';


export default function WeddingParty() {
  const data = useStaticQuery(graphql`
    query {
      twoFranks: file(relativePath: { eq: "twoFranks.jpg" }) {
        childImageSharp {
          fluid(maxWidth:300 maxHeight:300 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      drBoom: file(relativePath: { eq: "Dr._Boom.jpg" }) {
        childImageSharp {
          fluid(maxWidth:300 maxHeight:300 fit:FILL) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
          lauraAndBecca: file(relativePath: { eq: "lauraAndBecca.jpg" }) {
            childImageSharp {
              fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
            sydneyBear: file(relativePath: { eq: "melbibi.jpg" }) {
              childImageSharp {
                fluid(maxWidth:300 maxHeight:300 fit:FILL) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
      }`);


  return (
    <div>
      <div c id ="header">The Wedding Party</div>
      <div className={styles.weddingPartyContainer} id ="top level">

        <div id="Bride Container" style={{width: '49%', backgroundColor: 'pink'}}>

          <div className={styles.weddingPartyContainer} id ="Megan">
            <Img style={{width: '200px'}} fluid = {data.twoFranks.childImageSharp.fluid} />
            <div>Megan Peters</div>
          </div>

          <div id ="Christine "className={styles.weddingPartyContainer}>
            <Img style={{width: '200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
            <div>Christine</div>
          </div>

          <div id ="katie"className={styles.weddingPartyContainer}>
            <Img style={{width: '200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
            <div>Katie</div>
          </div>

          <div id ="laura"className={styles.weddingPartyContainer}>
            <Img style={{width: '200px'}} fluid = {data.lauraAndBecca.childImageSharp.fluid} />
            <div>Laura</div>
          </div>

          <div id ="Erin"className={styles.weddingPartyContainer}>
            <Img style={{width: '200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
            <div>Erin</div>
          </div>

        </div>

        <div style={{width: '49%'}}id= "Groom Container">

          <div id ="Joe"className={styles.weddingPartyContainer}>
            <Img style={{width: '200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
            <div>Joe</div>
            <div>Frank and Joe met in the early 90’s (credit: Dylan Mal) Growing up in Madison, CT together with their sister Katie, they played baseball, rode their bikes around Bartlett Drive, and made up games in the backyard. They went to the beach, watched Derek Jeter, and played with their dog, Gryffindor. Frank is so blessed to have his brother to stand by his side on his wedding day.
            </div>
          </div>

          <div id ="Ankit"className={styles.weddingPartyContainer}>
            <Img style={{width: '200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
            <div>Ankit</div>
            <div>Without Ankit, Frank would have never met Becca. When Frank was feeling down and somewhat “over” New Year’s, it was Ankit who convinced Frank to go to the party that changed his life. Frank and Ankit met during Kappa Sigma's rush at Emory University, where they became fast friends. After college, Ankit got Frank a job at Chimera Securities, where he tried to show Frank the ropes of trading. They shared many laughs over the market and on the many podcasts they produced together, all while making their way in New York City.
            </div>
          </div>

          <div id ="Nahom"className={styles.weddingPartyContainer}>
            <Img style={{width: '200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
            <div>Nahom</div>
            <div>Frank and Nahom met at Chimera Securities, and have spent many hours talking about anything and everything in the parks, bars and restaurants of New York City. Nahom’s spiritual advice will be a boon to the couple, and they are inspired by his faith. Frank is thrilled that Nahom has agreed to be a part of this ceremony, and thankful for Nahom’s friendship.
            </div>
          </div>

          <div id ="David"className={styles.weddingPartyContainer}>
            <Img style={{width: '200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
            <div>David</div>
            <div>David is Becca’s cousin and has been like an older brother to her throughout her life. With all the trips that Becca made with her parents to North Carolina from an early age, they practically grew up together. They would build forts together and play lots of games in the . Frank and David have bonded over history, literature, and strategy games, and he will make the board games played by this wedding party extremely competitive!
            </div>
          </div>

          <div id ="Kevin"className={styles.weddingPartyContainer}>
            <Img style={{width: '200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
            <div>Kevin</div>
            <div>Kevin is Frank’s oldest friend. They met at the lunch table in 2004, and bonded over Magic: The Gathering, and on the freshman football field. Frank and Kevin spent most of high school together, and though they now live in different states, have remained close. Frank was honored to share best man duties at Kevin’s wedding, and will be grateful for Kevin’s kindness and steadfast presence always.
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

