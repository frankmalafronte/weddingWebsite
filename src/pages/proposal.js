import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';


export default function Proposal() {
  const data = useStaticQuery(graphql`
  query {
    drBoom: file(relativePath: { eq: "Dr._Boom.jpg" }) {
      childImageSharp {
        fluid(maxWidth:300 maxHeight:300 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
    smooch: file(relativePath: { eq: "proposal/smooch.jpg" }) {
      childImageSharp {
        fluid(maxWidth:300 maxHeight:300 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
        handsClasp: file(relativePath: { eq: "proposal/handsClasp.jpg" }) {
          childImageSharp {
            fluid(maxWidth:300 maxHeight:300 fit:COVER) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          }
          usAndCats: file(relativePath: { eq: "usAndCats.jpg" }) {
            childImageSharp {
              fluid(maxWidth:200 maxHeight:200 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
            ahh: file(relativePath: { eq: "proposal/ah!!!.jpg" }) {
              childImageSharp {
                fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
              poloroids: file(relativePath: { eq: "proposal/poloroids.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
                handsSign: file(relativePath: { eq: "proposal/handsSign.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                  }
                  cuties: file(relativePath: { eq: "usInLove/cuties.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                      }
                    }
                    sign: file(relativePath: { eq: "proposal/sign.jpg" }) {
                      childImageSharp {
                        fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                        }
                      }
                        coolGuy: file(relativePath: { eq: "proposal/coolGuy.jpg" }) {
                          childImageSharp {
                            fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                              ...GatsbyImageSharpFluid_withWebp
                            }
                            }
                          }
                          blush: file(relativePath: { eq: "proposal/blush.jpg" }) {
                            childImageSharp {
                              fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                ...GatsbyImageSharpFluid_withWebp
                              }
                              }
                            }
                            happyBecca: file(relativePath: { eq: "proposal/happyBecca.jpg" }) {
                              childImageSharp {
                                fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                  ...GatsbyImageSharpFluid_withWebp
                                }
                                }
                              }
                              beccaSmiles: file(relativePath: { eq: "proposal/beccaSmiles.jpg" }) {
                                childImageSharp {
                                  fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                    ...GatsbyImageSharpFluid_withWebp
                                  }
                                  }
                                }
                                waterFeet: file(relativePath: { eq: "proposal/waterFeet.jpg" }) {
                                  childImageSharp {
                                    fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                      ...GatsbyImageSharpFluid_withWebp
                                    }
                                    }
                                  }
                                  shoulder: file(relativePath: { eq: "proposal/shoulder.jpg" }) {
                                    childImageSharp {
                                      fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                        ...GatsbyImageSharpFluid_withWebp
                                      }
                                      }
                                    }
                                    nature: file(relativePath: { eq: "proposal/nature.jpg" }) {
                                      childImageSharp {
                                        fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                          ...GatsbyImageSharpFluid_withWebp
                                        }
                                        }
                                      }
                                      scenery: file(relativePath: { eq: "proposal/scenery.jpg" }) {
                                        childImageSharp {
                                          fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                            ...GatsbyImageSharpFluid_withWebp
                                          }
                                          }
                                        }
                                        otherMountain: file(relativePath: { eq: "proposal/otherMountain.jpg" }) {
                                          childImageSharp {
                                            fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                              ...GatsbyImageSharpFluid_withWebp
                                            }
                                            }
                                          }
                                          lean: file(relativePath: { eq: "proposal/lean.jpg" }) {
                                            childImageSharp {
                                              fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                                ...GatsbyImageSharpFluid_withWebp
                                              }
                                              }
                                            }
    }`);


  return (
    <div>
      <Links>
        <div> </div>
        <div className ={styles.row}>
          <div id ="1" className={styles.column}>
            <Img fluid = {data.smooch.childImageSharp.fluid} />
            <Img fluid = {data.poloroids.childImageSharp.fluid} />
            <Img fluid = {data.sign.childImageSharp.fluid} />
            <Img fluid = {data.blush.childImageSharp.fluid} />
          </div>
          <div id="2" className={styles.column}>
            <Img fluid = {data.handsClasp.childImageSharp.fluid} />
            <Img fluid = {data.handsSign.childImageSharp.fluid} />
            <Img fluid = {data.lean.childImageSharp.fluid} />
            <Img fluid = {data.ahh.childImageSharp.fluid} />
          </div>
          <div id="3" className={styles.column}>
            <Img fluid = {data.coolGuy.childImageSharp.fluid} />
            <Img fluid = {data.happyBecca.childImageSharp.fluid} />
            <Img fluid = {data.otherMountain.childImageSharp.fluid} />
            <Img fluid = {data.beccaSmiles.childImageSharp.fluid} />
          </div>
          <div id="4" className={styles.column}>
            <Img fluid = {data.nature.childImageSharp.fluid} />
            <Img fluid = {data.waterFeet.childImageSharp.fluid} />
            <Img fluid = {data.shoulder.childImageSharp.fluid} />
            <Img fluid = {data.scenery.childImageSharp.fluid} />
          </div>
        </div>
      </Links>
    </div>

  );
}

