import React, {useState} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from './links';
import styles from '../components/styles.module.css';


export default function WeddingParty() {
  const data = useStaticQuery(graphql`
    query {
      megan: file(relativePath: { eq: "weddingParty/megan.jpg" }) {
        childImageSharp {
          fluid(maxWidth:600 maxHeight:600 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      laura: file(relativePath: { eq: "weddingParty/laura.jpg" }) {
        childImageSharp {
          fluid(maxWidth:600 maxHeight:600 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      erin: file(relativePath: { eq: "weddingParty/erin.jpg" }) {
        childImageSharp {
          fluid(maxWidth:600 maxHeight:600 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      christine: file(relativePath: { eq: "weddingParty/christine.jpg" }) {
        childImageSharp {
          fluid(maxWidth:600 maxHeight:600 fit:COVER cropFocus:CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }

      katie: file(relativePath: { eq: "weddingParty/katie.jpg" }) {
        childImageSharp {
          fluid(maxWidth:600 maxHeight:600 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      joe: file(relativePath: { eq: "weddingParty/joe.jpg" }) {
        childImageSharp {
          fluid(maxWidth:600 maxHeight:600 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      nahom: file(relativePath: { eq: "weddingParty/nahom.jpg" }) {
        childImageSharp {
          fluid(maxWidth:600 maxHeight:600 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      ankit: file(relativePath: { eq: "weddingParty/ankit.jpg" }) {
        childImageSharp {
          fluid(maxWidth:600 maxHeight:600 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      kevin: file(relativePath: { eq: "weddingParty/kevin.jpg" }) {
        childImageSharp {
          fluid(maxWidth:600 maxHeight:600 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      david: file(relativePath: { eq: "weddingParty/david.jpg" }) {
        childImageSharp {
          fluid(maxWidth:600 maxHeight:600 fit:COVER cropFocus:NORTH) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      }`);


  return (
    <div>
      <div c id ="header" className ={styles.heroBottom} style={{paddingTop: '50px'}}>The Wedding Party</div>
      <div className={styles.weddingPartyContainer} id ="top level">

        <div id="Bride Container" style={{width: '49%', backgroundColor: 'white'}}>

          <div id ="megan" className={styles.weddingPartyContainer}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.megan.childImageSharp.fluid} /></div>
              <h2>Megan</h2>
              <p>Megan is Becca’s cousin, but she feels more like the sister she always wanted. Rebecca traveled to North Carolina with her parents often as a child, so she and Megan (and Megan’s brother David) practically grew up together. When Becca moved to Raleigh in 7th grade, the rest was history — they were thick as thieves, taking piano lessons together and going to school dances and youth group events and concerts together. They bonded while playing with the family dogs Brittany, Champ, and Molly, too! Megan has been Becca’s travel companion on many adventures, including a trip to Australia after college that shaped both of their worldviews (and named Becca’s cats!). It was on that trip that they were deemed the Twin Space Babes by their friend Lincoln, and the sentiment has stuck. Through thick and thin, and many life transitions, they have stayed close, and Becca is so grateful to have Megan by her side throughout this process and most unusual time!
              </p>
            </div></div>

          <div id ="laura" className={styles.weddingPartyContainer}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.laura.childImageSharp.fluid} /></div>
              <h2>Laura</h2>
              <p>Laura and Becca crossed paths during their first week of college at UNC-Chapel Hill in a fitness class, but quickly bonded a week later when they both turned out for tryouts on the UNC Women’s Rowing Crew and made the team. They spent many early mornings that year trekking out to University Lake or the weight room for training. Laura was there to kick Becca’s chair to wake her up when she fell asleep during an exam after pulling an all-nighter studying. They would go on many adventures in Laura’s little red VW Beetle and loved getting cupcakes from Sugarland bakery on Franklin Street. Laura was the first friend to inspire Becca to run, and they each completed major races within a year of each other. They reconnected while they were both living up north and have grown closer through various milestones of life, especially ever since Laura moved back to Becca’s hometown.</p>
            </div></div>

          <div id ="erin" className={styles.weddingPartyContainer}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.erin.childImageSharp.fluid} /></div>
              <h2>Erin</h2>
              <p>Becca met Erin in Chapel Hill after college, at a friend’s farewell party, and soon after met while helping another mutual friend move. In swapping stories, they quickly realized that they had so many friends in common that it was as if they were living parallel lives that were finally intersecting. They connected over our love of music, nightlife and culture, and were partners in crime for many nights out and many spontaneous adventures. They’d go to concerts, sing karaoke, go dancing, and drive in the rain with the convertible top down together — just feeling young and alive! Erin inspired Becca to get her cats, and has been there through some of Becca’s best and worst days, always ready to take on what comes next.</p>
            </div></div>

          <div id ="christine" className={styles.weddingPartyContainer}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.christine.childImageSharp.fluid} /></div>
              <h2>Christine</h2>
              <p>Christine and Becca met while working together at Carolina Performing Arts in Chapel Hill, where they both worked as students and after graduation. They bonded over late nights working behind the scenes at performances, and stayed in touch even after Becca moved away. Christine moved to NYC a year to the day after Becca did, and Becca has considered Christine a close member of her NYC family ever since. Christine has been Becca’s companion for many concerts, hikes, and nights out in the city, and Becca owes much of her sanity during quarantine to Christine.</p>
            </div></div>

          <div id ="katie" className={styles.weddingPartyContainer}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.katie.childImageSharp.fluid} /></div>
              <h2>Katie </h2>
              <p> Katie is Frank’s sister and a special member of the Malafronte family, and one of the first that Becca met — when Katie came to the city with her mom and Aunt Sue, Becca and Frank went to see them. She has such a calming, grounded presence and brings so much life to any party she’s at. Katie’s love of music and love for life is infectious, and Frank couldn’t have asked for a better sister. </p>
            </div></div>

        </div>

        <div id= "Groom Container" style={{width: '49%', backgroundColor: 'white'}}>

          <div id ="Joe"className={styles.weddingPartyContainer}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.joe.childImageSharp.fluid} /></div>
              <h2>Joe</h2>
              <p>Frank and Joe met in the early 90s (credit: Dylan Mal) Growing up in Madison, CT together with their sister Katie, they played baseball, rode their bikes around Bartlett Drive, and made up games in the backyard. They went to the beach, watched Derek Jeter, and played with their dog, Gryffindor. Frank is so blessed to have his brother to stand by his side on his wedding day.
              </p>
            </div></div>

          <div id ="Ankit"className={styles.weddingPartyContainer}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.ankit.childImageSharp.fluid} /></div>
              <h2>Ankit</h2>
              <p>Without Ankit, Frank would have never met Becca. When Frank was feeling down and somewhat “over” New Year’s, it was Ankit who convinced Frank to go to the party that changed his life. Frank and Ankit met during Kappa Sigma's rush at Emory University, where they became fast friends. After college, Ankit got Frank a job at Chimera Securities, where he tried to show Frank the ropes of trading. They shared many laughs over the market and on the many podcasts they produced together, all while making their way in New York City.
              </p>
            </div></div>

          <div id ="Nahom"className={styles.weddingPartyContainer}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.nahom.childImageSharp.fluid} /></div>
              <h2>Nahom</h2>
              <p>Frank and Nahom met at Chimera Securities, and have spent many hours talking about anything and everything in the parks, bars and restaurants of New York City. Nahom’s spiritual advice will be a boon to the couple, and they are inspired by his faith. Frank is thrilled that Nahom has agreed to be a part of this ceremony, and thankful for Nahom’s friendship.
              </p>
            </div></div>

          <div id ="David"className={styles.weddingPartyContainer}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.david.childImageSharp.fluid} /></div>
              <h2>David</h2>
              <p>David is Becca’s cousin and has been like an older brother to her throughout her life. With all the trips that Becca made with her parents to North Carolina from an early age, they practically grew up together. They would build forts together and play lots of games in the . Frank and David have bonded over history, literature, and strategy games, and he will make the board games played by this wedding party extremely competitive!
              </p></div>
          </div>

          <div id ="Kevin"className={styles.weddingPartyContainer}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.kevin.childImageSharp.fluid} /></div>
              <h2>Kevin</h2>
              <p>Kevin is Frank’s oldest friend. They met at the lunch table in 2004, and bonded over Magic: The Gathering, and on the freshman football field. Frank and Kevin spent most of high school together, and though they now live in different states, have remained close. Frank was honored to share best man duties at Kevin’s wedding, and will be grateful for Kevin’s kindness and steadfast presence always.
              </p></div>
          </div>
          <div id="Tim">Tim!!</div>
        </div>
      </div>
    </div>

  );
}

