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
          fluid(maxWidth:600 maxHeight:700 fit:COVER cropFocus:CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      melbourne: file(relativePath: { eq: "cats/melbourne.jpg" }) {
        childImageSharp {
          fluid(maxWidth:600 maxHeight:600 fit:COVER cropFocus:NORTH) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      sydney: file(relativePath: { eq: "cats/sydney.jpg" }) {
        childImageSharp {
          fluid(maxWidth:600 maxHeight:600 fit:COVER cropFocus:CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      tim: file(relativePath: { eq: "weddingParty/timBeccaFrank.jpg" }) {
        childImageSharp {
          fluid(maxWidth:600 maxHeight:400 fit:COVER cropFocus:CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      }`);


  return (
    <div id ="parent">
      <div c id ="header" className ={styles.heroBottom} style={{paddingTop: '50px'}}>The Wedding Party</div>
      <div className={styles.weddingPartyContainer} id ="top level">

        <div id="Bride Container" className={styles.weddingPartyColumn}>

          <div id ="megan" className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.megan.childImageSharp.fluid} /></div>
              <h2>Megan (Maid of Honor)</h2>
              <p>Megan is Becca’s cousin, but she feels more like the sister she always wanted. Growing up, they were thick as thieves, playing dress-up, taking piano lessons, and playing with the family dogs Brittany, Champ, and Molly! Megan has been Becca’s companion on many adventures, including a trip to Australia after college that shaped their worldviews (and named Becca’s cats!). She is one of the most thoughtful people we know, as evidenced by the sweet treats she bakes and homemade cards! Through many life transitions, they have stayed close, and Becca is so grateful to have Megan by her side throughout this journey.</p>
            </div></div>

          <div id ="laura" className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.laura.childImageSharp.fluid} /></div>
              <h2>Laura</h2>
              <p>Laura and Becca met during their first weeks at UNC-Chapel Hill, when they both joined the UNC Women’s Rowing Crew freshman year. They spent many early mornings trekking out to the weight room, and many nights getting cupcakes from Sugarland or driving around in Laura’s little red VW Beetle. Laura was the first friend to get Becca to start running, and has a green thumb that has helped Becca through some plant emergencies! She always keeps Becca laughing and smiling, making the day a little sunnier where she is.</p>
            </div></div>

          <div id ="erin" className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.erin.childImageSharp.fluid} /></div>
              <h2>Erin</h2>
              <p>Becca met Erin in Chapel Hill after college, when they quickly realized that they had many mutual friends. They were partners in crime for many nights out and spontaneous adventures. Erin inspired Becca to adopt her cats after she adopted Jack (and later sweet Goldie!), and her knitting has kept Becca warm through NYC winters! Erin has been there through some of Becca’s best and worst days, always ready to take on what comes next.</p>
            </div></div>

          <div id ="christine" className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.christine.childImageSharp.fluid} /></div>
              <h2>Christine</h2>
              <p>Christine and Becca met while working together at Carolina Performing Arts during college and after. They grew close on a road trip to Dallas, and years later, when Christine moved to NYC exactly a year after Becca did, she made it feel more like home. Christine's adventurous spirit kept Becca in the know about arts and culture happening in the city, and Christine was by her side the moment she met Frank at that fateful New Year's party. :) Becca owes much of her sanity during quarantine (and throughout life) to Christine, and she's grateful to count Christine as a part of her NYC family.</p>
            </div></div>

          <div id ="katie" className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.katie.childImageSharp.fluid} /></div>
              <h2>Katie </h2>
              <p>Frank knows that it wasn’t always easy having two older brothers, but Katie always rolled with the punches (or golf balls). Today Frank believes his parents never gave him a greater gift. Frank and Katie love to cook together and go to the movies, especially double features! Becca and Katie have a shared love of music, and Frank is convinced they will one day work together at Spotify. Becca feels so lucky to have such a calming, grounded presence in her wedding party who also brings so much life to any party she’s at. </p>
            </div></div>

        </div>

        <div id= "Groom Container" className={styles.weddingPartyColumn}>

          <div id ="Joe"className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.joe.childImageSharp.fluid} /></div>
              <h2>Joe (Best Man)</h2>
              <p>Frank and Joe met in the early 90s. (credit: Dylan Mal) Growing up in Madison, CT, together with their sister Katie, they played baseball, rode their bikes around Bartlett Drive, and made up games in the backyard. They went to the beach, watched Derek Jeter, and played with their dog, Gryffindor. Whenever they talk, Frank always leaves inspired and energized. Frank is so blessed to have his brother to stand by his side on his wedding day. 
              </p>
            </div></div>

          <div id ="Ankit"className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.ankit.childImageSharp.fluid} /></div>
              <h2>Ankit</h2>
              <p>Without Ankit, Frank would have never met Becca. When Frank was feeling down and somewhat “over” New Year’s, it was Ankit who convinced Frank to go to the party that changed his life. Frank and Ankit met during Kappa Sigma's rush at Emory University, where they became fast friends. After college, Ankit got Frank a job at Chimera Securities, where he tried to show Frank the ropes of trading. They shared many laughs over the market and on the many podcasts they produced together, all while making their way in New York City.
              </p>
            </div></div>

          <div id ="Nahom"className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.nahom.childImageSharp.fluid} /></div>
              <h2>Nahom</h2>
              <p>Frank and Nahom met at Chimera Securities, and have spent many hours talking about anything and everything in the parks, bars and restaurants of New York City. Nahom’s spiritual advice will be a boon to the couple, and they are inspired by his faith. Frank is thrilled that Nahom has agreed to be a part of this ceremony, and thankful for Nahom’s friendship.
              </p>
            </div></div>

          <div id ="David"className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.david.childImageSharp.fluid} /></div>
              <h2>David</h2>
              <p>David is Becca’s cousin and has been like an older brother to her throughout her life. David sparked Becca’s imagination as a child. Growing up, they would build forts in the house and run around the yard pretending to go on epic adventures. He has been a mentor to Becca as she sought a life partner, and was thrilled when Frank entered the picture. Frank and David have bonded over history, literature, and strategy games, and he will make the board games played by this wedding party extremely competitive!
              </p></div>
          </div>

          <div id ="Kevin"className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.kevin.childImageSharp.fluid} /></div>
              <h2>Kevin</h2>
              <p>Kevin is Frank’s oldest friend. They met at the lunch table in 2004, and bonded over Magic: The Gathering, and on the freshman football field. Frank and Kevin spent most of high school together, and though they now live in different states, have remained close. Frank was honored to share best man duties at Kevin’s wedding, and will be grateful for Kevin’s kindness and steadfast presence always.
              </p></div>
          </div>

        </div>
      </div>

    <div id ="Tim"className={styles.weddingParty}>	
      <div style={{backgroundColor: 'white'}}>	
        <div style={{margin: '20px', paddingBottom:'20px'}}>	
          <div className={styles.center}><Img className ={styles.centerPic} fluid = {data.tim.childImageSharp.fluid}/></div>	
            <h2>Tim (Officiant)</h2>	
            <p>Frank and Becca are thrilled to be married by their dear friend Tim, who has played a significant role in their relationship. Tim and Becca met within weeks after joining the New York Philharmonic staff, and they grew close after realizing they both lived in Astoria. They would often commute home together after concerts, where they would trade stories about life and laugh endlessly. Tim shares the couple's appreciation of family, love of the arts, and passion for good books. Tim has been a great source of wisdom, joy, and empathy for the couple through the years, and we know he will be the perfect person to lead the celebrations this New Year's Eve!	
            </p>
        </div>
      </div>
    </div>

      <div className={styles.weddingPartyContainer} id ="top level" >

        <div id="Sydney Container" className={styles.weddingPartyColumn}>
          <div id ="sydney" className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.sydney.childImageSharp.fluid} /></div>
              <h2>Sydney</h2>
              <p>Sydney is definitely mama's cat, and is one of the best snugglers around! He's a bit more of a diva than Mel, and got away with a lot more as a kitten thanks to his big eyes. While Syd never wants to be picked up, he is one of the best ploppers and has one of the best purrs in town! He loves his cuddles from Frank and Becca, and is thrilled for this union to take place.</p>
            </div>
          </div>
        </div>

        <div id="Melbourne Container" className={styles.weddingPartyColumn}>
          <div id ="melbourne" className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.melbourne.childImageSharp.fluid} /></div>
              <h2>Melbourne</h2>
              <p>Melbourne was one of the first to welcome Frank into the family. When Frank and Becca met, he wasn't much of a cat person, but that didn't discourage Mel. Over time, he has melted Frank's heart and carved out space in Frank's lap, where he spends most nights getting a good brushing. He loves to sing morning greetings to Frank, and these days he helps Frank work while sitting next to him at his desk.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="Tim" style={{width: '50%', paddingTop: '30pt', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div>
          <Img fluid = {data.sydney.childImageSharp.fluid} />
        </div>
        <h2>Tim</h2>
        <p>Frank and Becca are thrilled to be married by their dear friend Tim, who has played a significant role in their relationship. Tim and Becca met within weeks after joining the New York Philharmonic staff, and they grew close after realizing they both lived in Astoria. They would often commute home together after concerts, where they would trade stores about life and laugh endlessly. Tim shares the couple's appreciation of family, love of the arts, and passion for good books. Tim has been a great source of wisdom, joy, and empathy for the couple through the years, and we know he will be the perfect person to lead the celebrations this New Year's Eve!
        </p>
      </div> */}
    </div>
  );
}

