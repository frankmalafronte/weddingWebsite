import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';


export default function OurStory() {
  const data = useStaticQuery(graphql`
  query {
    drBoom: file(relativePath: { eq: "Dr._Boom.jpg" }) {
      childImageSharp {
        fluid(maxWidth:300 maxHeight:300 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
        melbibi: file(relativePath: { eq: "cats/melbibi.jpg" }) {
          childImageSharp {
            fluid(maxWidth:300 maxHeight:300 fit:COVER) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          }
          melOnSuitcase: file(relativePath: { eq: "cats/melOnSuitcase.jpg" }) {
            childImageSharp {
              fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          sydneyBear: file(relativePath: { eq: "cats/sydneyBear.jpg" }) {
            childImageSharp {
              fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
            beccaBoth: file(relativePath: { eq: "cats/beccaBoth.jpg" }) {
              childImageSharp {
                fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
              bothGuys: file(relativePath: { eq: "cats/bothGuys.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
                sleepingBecca: file(relativePath: { eq: "cats/sleepingBecca.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                  }
                  melCute: file(relativePath: { eq: "cats/melCute.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                      }
                    }
                    snowDay: file(relativePath: { eq: "usInLove/snowDay.jpg" }) {
                      childImageSharp {
                        fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                        }
                      }
                      dudamel: file(relativePath: { eq: "usInLove/dudamel.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                          }
                        }
                        waist: file(relativePath: { eq: "usInLove/waist.jpg" }) {
                          childImageSharp {
                            fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                              ...GatsbyImageSharpFluid_withWebp
                            }
                            }
                          }
                          

                          nyeBecca: file(relativePath: { eq: "nyeBecca.JPG" }) {
                            childImageSharp {
                              fluid(maxWidth:1200 maxHeight:800 fit:COVER) {
                                ...GatsbyImageSharpFluid_withWebp
                              }
                              }
                            }
                          nyeFrank: file(relativePath: { eq: "nyeFrank.JPG" }) {
                            childImageSharp {
                              fluid(maxWidth:600 maxHeight:400 fit:COVER cropFocus:CENTER) {
                                ...GatsbyImageSharpFluid_withWebp
                              }
                              }
                            }
                          snowstorm: file(relativePath: { eq: "snowstormBeccaFrank.JPG" }) {
                            childImageSharp {
                              fluid(maxWidth:1200 maxHeight:800 fit:COVER) {
                                ...GatsbyImageSharpFluid_withWebp
                              }
                              }
                            } 
                          ahh: file(relativePath: { eq: "proposal/ah!!!.jpg" }) {
                            childImageSharp {
                              fluid(maxWidth:1200 maxHeight:1000 fit:COVER cropFocus:ENTROPY) {
                                ...GatsbyImageSharpFluid_withWebp
                              }
                              }
                            }            
                      
                          }`);


  return (
    <div>
      <title>Becca + Frank</title>
      <Links>
      </Links>

      <div c id ="header" className ={styles.heroBottom} style={{paddingTop: '50px'}}>Our Story</div>

      <div className={styles.weddingPartyContainer} id ="top level" >

        <div id="His Story" className={styles.weddingPartyColumn}>
          <div id ="nyeFrank" className={styles.weddingParty}>
            <div>
              <div><Img fluid = {data.nyeFrank.childImageSharp.fluid} /></div>
              <h2>How We Met</h2>
              <h2 style={{fontSize: '90%', marginTop: '-10px', fontStyle: 'italic'}}>(His perspective)</h2>
              <p>In the winter of 2015 I was in a rut. With New Year’s approaching, I told my friends I was “over” New Year’s Eve and would be skipping it this year. I’m very lucky to have such great friends, because Ankit called and convinced me to give a usually forgettable night another go. I’m so glad I did. I met Becca and we connected right away, and had an hour-long conversation in the kitchen. She told me she worked at the New York Philharmonic, which I found very interesting, so I hid my ignorance about classical music and asked her a lot of questions about it! When we gathered in the courtyard to light our sparklers and count down the year, I knew I had to find her again. We locked eyes while holding our sparklers and after shouting “Happy New Year!” we kissed for the first time.</p>
            </div>
          </div>
        </div>

        <div id="Her Story" className={styles.weddingPartyColumn}>
          <div id ="nyeBecca" className={styles.weddingParty}>
            <div>
              <div><Img fluid = {data.nyeBecca.childImageSharp.fluid} /></div>
              <h2>How We Met</h2>
              <h2 style={{fontSize: '90%', marginTop: '-10px', fontStyle: 'italic'}}>(Her perspective)</h2>
              <p>New Year’s Eve 2015, I was with my friends Reese and Christine, enjoying a party at my friend Lauren and Steven’s place when Reese told us his buddy Kevin was hosting a party not too far away. Christine and I made a pact to go in and meet new people, and the second person we walked up to was Frank.
                <br /><br />I remember his checked blazer and his stories of many different interests — the stock market, books he had read, politics, and past memorable jobs. Christine was an incredible wing-woman that night, slipping away casually when she saw that we were hitting it off. I remember him also asking a lot of questions, taking genuine interest in my career in the arts and my life in the city. We ended the conversation, but found each other shortly after midnight and started talking more and he asked for my number.
                <br /><br />A few days later, he texted and we had our first official date at a tea shop in Manhattan. (He insisted on tea because I was cleansing for January!) I knew immediately that he was a special guy and someone I’d be able to talk to openly about everything. It’s amazing to me that five years later to the day, we’re tying the knot!</p>
            </div>
          </div>
        </div>

      </div>

      <div id ="snowstorm" className={styles.weddingParty}>
        <div style={{backgroundColor: 'white', width: '100%'}}>
          <div style={{padding: '20px'}}>
            <div className={styles.center} ><Img className={styles.centerPic} fluid = {data.snowstorm.childImageSharp.fluid} /></div>
            <h2>January 2016<br />.<br />.<br />.<br /><br />September 2020</h2>

            <div className={styles.center} ><Img className={styles.centerPic} fluid = {data.ahh.childImageSharp.fluid} /></div>
            <h2>The Proposal</h2>
            <h2 style={{fontSize: '90%', marginTop: '-10px', fontStyle: 'italic'}}>(Our perspective)</h2>
            <p>We had always talked about getting married, but the timing never felt quite right. This August though we realized that all the pieces had finally come together, and we were ready for the next step.  With COVID, we hadn't traveled much at all, but with summer coming to a close and cases still relatively low, we decided to take a small weekend trip on Labor Day weekend. 
                <br/><br/>Frank planned out everything: the B&B where they stayed in the Berkshires, the hike on Alander Mountain, her Great-Grandma Appleby's ring that he had coordinated with Nancy pre-COVID, and even a tripod because he knew Becca would want photos. 
                <br/><br/>When they reached the peak on a beautiful sunny Saturday morning, Becca brought out the selfie stick and noticed that Frank was looking through his bag for something. When she realized what it was, she got so excited that everything else was a blur until he said "Rebecca Mary Kathryn Brenner, will you marry me?" And of course she said yes! 
                <br/><br/>The rest of the weekend was filled with hikes and phone calls to family and friends, and a visit with Frank's godfather Bill and his wife Susie who lived nearby. We're so grateful for everyone who has made the time since then so special, and can't wait to celebrate with you all again!</p>
          </div>
        </div>
      </div>

      {/* <div id="Our Story" style={{display: 'flex', justifyContent: 'center'}}>
        <div >How We Met</div>
      </div>
      <div>
        <div id="container" style ={{display: 'flex', backgroundColor: 'blue'}}>
          <div style={{width: '30%'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ex massa. Nullam lobortis a quam eu efficitur. Sed in mauris turpis. Vestibulum quis sapien malesuada, congue mauris et, iaculis enim. Nam ipsum ligula, efficitur at consectetur a, dignissim lacinia urna. Nullam tempor, nisl et consectetur fermentum, urna orci faucibus erat, ac aliquet eros tellus non turpis. Sed auctor lectus non cursus pretium. Donec consequat lorem at ante consectetur sollicitudin. Vestibulum efficitur ac quam auctor faucibus. Nulla efficitur, nunc at gravida facilisis, ligula lacus congue ipsum, in condimentum ligula magna euismod quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vitae risus ac purus auctor accumsan. Etiam congue ante id mi efficitur imperdiet. Etiam consequat velit ullamcorper porttitor vestibulum. Pellentesque interdum turpis et luctus dignissim.
Phasellus tellus enim, elementum sit amet laoreet sit amet, pharetra eget est. Sed sit amet dolor a lacus pretium gravida ac non purus. Donec molestie urna consectetur nunc imperdiet, lobortis varius magna lacinia. Integer egestas ullamcorper lacus, sollicitudin feugiat mi fermentum eu. Nulla sed eleifend leo, aliquet euismod dolor. Morbi luctus quam et eros auctor, in varius enim elementum. Vivamus ut urna et sapien auctor aliquam nec in risus. Phasellus vel pretium nunc, ac porta purus. Integer sed eleifend ex, id facilisis nisi. Proin vel dolor blandit, imperdiet lectus congue, ultricies est. Mauris ultricies rhoncus turpis, eu maximus ex luctus in. Nunc pulvinar aliquet ullamcorper. Nulla sit amet velit at justo varius fringilla nec et massa.
          </div>
          <div className ={styles.row} style ={{width: '70%', backgroundColor: 'yellow'}}>
            <div id = "imageContainer" className={styles.storyColumn} >
              <Img fluid = {data.drBoom.childImageSharp.fluid}/>
              <Img fluid = {data.drBoom.childImageSharp.fluid}/>
            </div>
            <div id = "imageContainer" className={styles.storyColumn} >
              <Img fluid = {data.drBoom.childImageSharp.fluid}/>
              <Img fluid = {data.drBoom.childImageSharp.fluid}/>
            </div>
          </div>
        </div>

        <div id ="Our Cats Header"style={{display: 'flex', justifyContent: 'center'}}>
          <div>Our Cats</div>
        </div>

        <div id= "melbourne" style={{display: 'flex', backgroundColor: 'green'}}>
          <div style={{width: '30%'}}>Melbourne</div>
          <div className ={styles.row} style ={{width: '70%', backgroundColor: 'yellow'}}>
            <div id = "imageContainer" className={styles.storyColumn} >
              <Img fluid = {data.melCute.childImageSharp.fluid}/>
              <Img fluid = {data.melbibi.childImageSharp.fluid}/>
            </div>
            <div id = "imageContainer" className={styles.storyColumn} >
              <Img fluid = {data.melOnSuitcase.childImageSharp.fluid}/>
              <Img fluid = {data.melbibi.childImageSharp.fluid}/>
            </div>
          </div>
          <div>
          </div>
        </div>

        <div id ="sydney" style={{display: 'flex', backgroundColor: 'purple'}}>
          <div style={{width: '30%'}}>Sydney</div>
          <div className ={styles.row} style ={{width: '70%', backgroundColor: 'yellow'}}>
            <div id = "imageContainer" className={styles.storyColumn} >
              <Img fluid = {data.sydneyBear.childImageSharp.fluid}/>
              <Img fluid = {data.sleepingBecca.childImageSharp.fluid}/>
            </div>
            <div id = "imageContainer" className={styles.storyColumn} >
              <Img fluid = {data.beccaBoth.childImageSharp.fluid}/>
              <Img fluid = {data.bothGuys.childImageSharp.fluid}/>
            </div>
          </div>
        </div>
      </div>*/}
    </div>
  );
}


