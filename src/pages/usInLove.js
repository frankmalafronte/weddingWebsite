import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';


export default function UsInLove() {
  const data = useStaticQuery(graphql`
  query {
    amazon: file(relativePath: { eq: "usInLove/amazon.jpg" }) {
      childImageSharp {
        fluid(maxWidth:300 maxHeight:300 fit:FILL) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
        angusBarn: file(relativePath: { eq: "usInLove/angusBarn.jpg" }) {
          childImageSharp {
            fluid(maxWidth:300 maxHeight:300 fit:FILL) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          }
          beccaKiss: file(relativePath: { eq: "usInLove/beccaKiss.jpg" }) {
            childImageSharp {
              fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
            boardGame: file(relativePath: { eq: "usInLove/boardGame.jpg" }) {
              childImageSharp {
                fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
              catalog: file(relativePath: { eq: "usInLove/catalog.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
                chapelHill: file(relativePath: { eq: "usInLove/chapelHill.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                  }
                  drunkAndHot: file(relativePath: { eq: "usInLove/drunkAndHot.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                      }
                    }
                    eifelTower: file(relativePath: { eq: "usInLove/eifelTower.jpg" }) {
                      childImageSharp {
                        fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                        }
                      }
                      flower: file(relativePath: { eq: "usInLove/flower.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                          }
                        }
                        niceHair: file(relativePath: { eq: "usInLove/niceHair.jpg" }) {
                          childImageSharp {
                            fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                              ...GatsbyImageSharpFluid_withWebp
                            }
                            }
                          }
                          packers: file(relativePath: { eq: "usInLove/packers.jpg" }) {
                            childImageSharp {
                              fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                ...GatsbyImageSharpFluid_withWebp
                              }
                              }
                            }
                            SC: file(relativePath: { eq: "usInLove/SC.jpg" }) {
                              childImageSharp {
                                fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                  ...GatsbyImageSharpFluid_withWebp
                                }
                                }
                              }
                              wearWolf: file(relativePath: { eq: "usInLove/wearWolf.jpg" }) {
                                childImageSharp {
                                  fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                    ...GatsbyImageSharpFluid_withWebp
                                  }
                                  }
                                }
                                weddingDance: file(relativePath: { eq: "usInLove/weddingDance.jpg" }) {
                                  childImageSharp {
                                    fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                      ...GatsbyImageSharpFluid_withWebp
                                    }
                                    }
                                  }
                                  usAndCats: file(relativePath: { eq: "usInLove/usAndCats.jpg" }) {
                                    childImageSharp {
                                      fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                        ...GatsbyImageSharpFluid_withWebp
                                      }
                                      }
                                    }
                                    drBoom: file(relativePath: { eq: "Dr._Boom.jpg" }) {
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
                                        yankees: file(relativePath: { eq: "usInLove/yankees.jpg" }) {
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
        <div>Hello Photos</div>
        <div className ={styles.row}>
          <div id ="1" className={styles.column}>
            <Img fluid = {data.chapelHill.childImageSharp.fluid} />
            <Img fluid = {data.cuties.childImageSharp.fluid} />
            <Img fluid = {data.boardGame.childImageSharp.fluid} />
            <Img fluid = {data.beccaKiss.childImageSharp.fluid} />
          </div>
          <div id="2" className={styles.column}>
            <Img fluid = {data.drunkAndHot.childImageSharp.fluid} />
            <Img fluid = {data.flower.childImageSharp.fluid} />
            <Img fluid = {data.SC.childImageSharp.fluid} />
            <Img fluid = {data.usAndCats.childImageSharp.fluid} />
          </div>
          <div id="3" className={styles.column}>
            <Img fluid = {data.catalog.childImageSharp.fluid} />
            <Img fluid = {data.eifelTower.childImageSharp.fluid} />
            <Img fluid = {data.packers.childImageSharp.fluid} />
            <Img fluid = {data.yankees.childImageSharp.fluid} />
          </div>
          <div id="4" className={styles.column}>
            <Img fluid = {data.niceHair.childImageSharp.fluid} />
            <Img fluid = {data.wearWolf.childImageSharp.fluid} />
            <Img fluid = {data.amazon.childImageSharp.fluid} />
            <Img fluid = {data.angusBarn.childImageSharp.fluid} />
          </div>
        </div>
      </Links>
    </div>

  );
}

