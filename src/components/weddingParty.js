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
              <p>Megan is Becca’s cousin, but she feels more like the sister she always wanted. Growing up, they were thick as thieves, taking piano lessons together and playing with the family dogs Brittany, Champ, and Molly! Megan has been Becca’s travel companion on many adventures, including a trip to Australia after college that shaped both of their worldviews (and named Becca’s cats!). Through many life transitions, they have stayed close, and Becca is so grateful to have Megan by her side throughout this journey and most unusual time!</p>
            </div></div>

          <div id ="laura" className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.laura.childImageSharp.fluid} /></div>
              <h2>Laura</h2>
              <p>Laura and Becca met in a fitness class their first week at UNC-Chapel Hill, but became fast friends a few days later when they both showed up to tryouts for the UNC Women’s Rowing Crew and joined the team. They spent many early mornings that year trekking out to the weight room for training, and many nights either getting cupcakes from Sugarland bakery or going on adventures in Laura’s little red VW Beetle. Laura always keeps Becca laughing and smiling, and she’s grateful for her sunshine!</p>
            </div></div>

          <div id ="erin" className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.erin.childImageSharp.fluid} /></div>
              <h2>Erin</h2>
              <p>Becca met Erin in Chapel Hill after college, when they quickly realized that they had so many friends in common that they were practically living parallel lives. They were partners in crime for many nights out and spontaneous adventures. They’d go to concerts, sing karaoke, go dancing, and drive in the rain with the convertible top down together! Erin inspired Becca to get her cats, and has been there through some of Becca’s best and worst days, always ready to take on what comes next.
              </p>
            </div></div>

          <div id ="christine" className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.christine.childImageSharp.fluid} /></div>
              <h2>Christine</h2>
              <p>Christine and Becca met while working together at Carolina Performing Arts, where they both worked as students and after graduation. They stayed in touch even after Becca moved away, and Christine moved to NYC a year to the day after Becca did. Becca has counted Christine as a close member of Becca’s NYC family ever since, and she owes much of her sanity during quarantine to Christine.</p>
            </div></div>

          <div id ="katie" className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.katie.childImageSharp.fluid} /></div>
              <h2>Katie </h2>
              <p> Katie is Frank’s sister and a special member of the Malafronte family, and one of the first that Becca met — when Katie came to the city with her mom and Aunt Sue, Becca and Frank went to see them. She has such a calming, grounded presence and brings so much life to any party she’s at. Katie’s love of music and love for life is infectious, and Frank couldn’t have asked for a better sister. </p>
            </div></div>

        </div>

        <div id= "Groom Container" className={styles.weddingPartyColumn}>

          <div id ="Joe"className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.joe.childImageSharp.fluid} /></div>
              <h2>Joe (Best Man)</h2>
              <p>Frank and Joe met in the early 90s (credit: Dylan Mal) Growing up in Madison, CT together with their sister Katie, they played baseball, rode their bikes around Bartlett Drive, and made up games in the backyard. They went to the beach, watched Derek Jeter, and played with their dog, Gryffindor. Frank is so blessed to have his brother to stand by his side on his wedding day.
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
      <div style={{padding: '20px'}}>	
      <div className={styles.center}><Img style ={{width:"60%"}}fluid = {data.tim.childImageSharp.fluid}/></div>	
      <h2>Tim (Officiant)</h2>	
      <p>Frank and Becca are thrilled to be married by their dear friend Tim, who has played a significant role in their relationship. Tim and Becca met within weeks after joining the New York Philharmonic staff, and they grew close after realizing they both lived in Astoria. They would often commute home together after concerts, where they would trade stores about life and laugh endlessly. Tim shares the couple's appreciation of family, love of the arts, and passion for good books. Tim has been a great source of wisdom, joy, and empathy for the couple through the years, and we know he will be the perfect person to lead the celebrations this New Year's Eve!	
            </p></div>
            </div>	
            </div>	
     
      <div className={styles.weddingPartyContainer} id ="top level" >

        <div id="Bride Container" className={styles.weddingPartyColumn}>
          <div id ="sydney" className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.sydney.childImageSharp.fluid} /></div>
              <h2>Sydney</h2>
              <p>Sydney is definitely mama's cat, and is one of the best snugglers around! He's a bit more of a diva than Mel, and got away with a lot more as a kitten thanks to his big eyes. While Syd never wants to be picked up, he is one of the best ploppers and has one of the best purrs in town! He loves his cuddles from Frank and Becca, and is thrilled for this union to take place.</p>
            </div>
          </div>
        </div>

        <div id="Bride Container" className={styles.weddingPartyColumn}>
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

