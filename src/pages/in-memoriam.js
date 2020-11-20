import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';


export default function InMemoriam() {


  const data = useStaticQuery(graphql`
  query {
            brennerJimNancy: file(relativePath: { eq: "inMemoriam/appleby-brenner-wedding-1983.jpg" }) {
              childImageSharp {
                fluid(maxWidth:800 maxHeight:1200 fit:COVER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
              brennerRobertRuth: file(relativePath: { eq: "inMemoriam/robert-howard-brenner-ruth-mary-williams_02.18.1950.png" }) {
                childImageSharp {
                  fluid(maxWidth:800 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
                applebyJoyceHoward: file(relativePath: { eq: "inMemoriam/joyce-arlene-brown-howard-samuel-appleby_10.27.1945.png" }) {
                  childImageSharp {
                    fluid(maxWidth:800 maxHeight:1200 fit:COVER) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                  }
                  jimBrenner: file(relativePath: { eq: "inMemoriam/jb-rb-christmas.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth:1200 maxHeight:600 fit:COVER cropFocus:CENTER) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                      }
                    }
                  ziccardiFrankEileen: file(relativePath: { eq: "inMemoriam/frank-eileen-ziccardi_07.15.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth:800 maxHeight:1200 fit:COVER) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                      }
                    }
                  malafronteTonyDolores: file(relativePath: { eq: "inMemoriam/tony-dee-malafronte-highres.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth:800 maxHeight:1200 fit:COVER) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                      }
                    }
                  garyAppleby: file(relativePath: { eq: "inMemoriam/gary-appleby-edit.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                      }
                    } 
                  chipMalafronte: file(relativePath: { eq: "inMemoriam/chip-malafronte.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                      }
                    }            
              
                  }`);




  return (
    <Links>
    <div id="parent">

    <div className ={styles.heroBottom} style={{paddingTop: '50px', paddingBottom: '10px'}}>In Memoriam</div>
    <h3 style={{textAlign:"center"}}><i>Remembering those who we wish could be with us today</i></h3>

      <div id ="jb" className={styles.weddingParty}>
          <div className={styles.centerWrapper}>
            <div className={styles.center} ><Img className={styles.centerPic} fluid = {data.jimBrenner.childImageSharp.fluid} /></div>
            <h2>Jim Brenner</h2>
            <h2 className={styles.h2a}>Becca’s father</h2>
            <p><b><i>Laissez les bons temps rouler.</i> Let the good times roll.</b> It’s a phrase that my dad loved to live by, probably even before he knew it. Jim Brenner loved life, and he lived it to the fullest. He knew each day was a gift to be cherished, and each friendship was one to be treasured. 
            <br/><br/>In the Hamilton musical, there is a song titled “Non-Stop” in which they ask Hamilton, “Why do you write like you're running out of time?” And it resonates so much with me because I felt like my father wrote with the same fervor — letters, poems, cards, and emails, ohhh the emails. We found a poem shortly before his funeral, titled “With More Like You,” which closed with this:
            <br/><br/></p>
            <p style={{textAlign:"center"}}><i>With more like you, the world would be
            <br/>More wonderful, from sea to sea
            <br/>And, life for all might be so great
            <br/>That all might say, “Heaven can wait!”</i></p>
            <p><br/>He wrote this for his friends, but it was absolutely true of him. But the thing is, Heaven couldn’t wait any longer for my father, who passed away in November 2017. Through the pain of losing him, I am grateful for the years he had, and that he was able to live out his goals. 
            <br/><br/>Since his passing, I’ve watched many home movies and looked through so many photos, grateful that I have a window into his past. In each recording, it’s clear that Jim Brenner always shone with youthful exuberance, from the age of one through his very last photo. 
            <br/><br/>My dad loved his family, and would visit them as often as possible from wherever he was living. He loved my mom. She was his anchor, and he the wind in her sails, taking her places she would never have gone without him. He loved God, and made a point to pause every week to reflect on his faith at church. He marveled at the world, and told me not to lose my sense of childlike wonder, even when I knew the explanation, because it is truly a wonder how it all fits together. 
            <br/><br/>And I know he would have loved to be here even now, even in the face of all the challenges brought on by COVID. He would have reached out to family, friends, neighbors, and even those he didn’t know well, because he never met a stranger. 
            <br/><br/>His zest for life was infectious—he invited anyone and everyone who was willing to come along for his grand adventures. He always had an idea for what could come next, always leaving an open door for what could be. And he honored the lives of all those who went before him, understanding that their stories are worth celebrating. 
            <br/><br/>With him gone, my world has had a gaping hole where he used to fill it. It’s especially poignant as I imagine the father daughter dance we could have had, or the jokes he would have cracked in his speech, or the tears in his eyes as he would have given me away. But as memories continue to bubble up, I have seen that my dad, even after passing on from this world, has continued to inspire us to live life to the fullest and to value each day we have here. His spirit will live on in each person who remembers him, and I’m grateful for that. </p>
            <div className={styles.center} ><Img className={styles.centerPic} fluid = {data.brennerJimNancy.childImageSharp.fluid} /></div>
         </div>
      </div>


      <div className={styles.weddingPartyContainer} id ="top level" >

        <div id="Bride Container" className={styles.weddingPartyColumn}>
          <div id ="appleby" className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.applebyJoyceHoward.childImageSharp.fluid} /></div>
                <h2>Joyce and Howard Appleby</h2>
                <h2 className={styles.h2a}><br/>{/* Becca’s grandparents*/}</h2>
                <p>{/* Howard and Joyce would have taken an interest in meeting you; Howard asking questions and Joyce smiling and relating to you. Howard would’ve had a camera in hand documenting everything.*/}</p>
            </div>
          </div>


          <div id ="brenner" className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.brennerRobertRuth.childImageSharp.fluid} /></div>
              <h2>Ruth and Robert Brenner</h2>
              <h2 className={styles.h2a}><br/>{/* Becca’s grandparents*/}</h2> 
              <p>{/* Robert would have kept us smiling, taking photographs of everything going on, while Ruth would have been the first on the dance floor.*/}</p> 
            </div>
          </div>
        </div>


        <div id="Groom Container" className={styles.weddingPartyColumn}>
          <div id ="ziccardi" className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.ziccardiFrankEileen.childImageSharp.fluid} /></div>
                <h2>Frank and Eileen Ziccardi</h2>
                <h2 className={styles.h2a}><br/>{/* Frank’s grandparents*/}</h2>
                <p> </p>
            </div>
          </div>


          <div id ="malafronte" className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.malafronteTonyDolores.childImageSharp.fluid} /></div>
              <h2>Anthony and Dolores Malafronte</h2>
              <h2 className={styles.h2a}><br/>{/* Frank’s grandparents*/}</h2>
              <p> </p>
            </div>
          </div>

        </div>
      </div>


      <div className={styles.weddingPartyContainer} id ="top level" >

        <div id="Bride Container" className={styles.weddingPartyColumn}>
            <div id ="gary" className={styles.weddingParty}>
              <div className="wrapper">
                <div className="image"><Img fluid = {data.garyAppleby.childImageSharp.fluid} /></div>
                <h2>Gary Appleby</h2>
              </div>
            </div>
        </div>

        <div id="Groom Container" className={styles.weddingPartyColumn}>
          <div id ="chip" className={styles.weddingParty}>
            <div className="wrapper">
              <div className="image"><Img fluid = {data.chipMalafronte.childImageSharp.fluid} /></div>
              <h2>Chip Malafronte</h2>
            </div>
          </div>
        </div>
      </div>





    </div>


  </Links>
  );
}
