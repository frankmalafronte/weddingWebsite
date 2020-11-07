import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';


export default function Engagement() {
  const data = useStaticQuery(graphql`
  query {
    drBoom: file(relativePath: { eq: "Dr._Boom.jpg" }) {
      childImageSharp {
        fluid(maxWidth:300 maxHeight:300 fit:FILL) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
     melbibi: file(relativePath: { eq: "cats/melbibi.jpg" }) {
      childImageSharp {
      fluid(maxWidth:300 maxHeight:300 fit:FILL) {
        ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
    foreheads: file(relativePath: { eq: "engagement/foreheads.jpg" }) {
      childImageSharp {
      fluid(maxWidth:200 maxHeight:200 fit:COVER) {
        ...GatsbyImageSharpFluid_withWebp
        }
       }
    }
            neck: file(relativePath: { eq: "engagement/neck.jpg" }) {
              childImageSharp {
                fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
              masks: file(relativePath: { eq: "engagement/masks.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
                tunnel: file(relativePath: { eq: "engagement/tunnel.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                      ...GatsbyImageSharpFluid_withWebp
           }
          }
          }
              treeBothFacing: file(relativePath: { eq: "engagement/treeBothFacing.jpg" }) {
               childImageSharp {
              fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
                }
                 }
              }
          treeFacing2: file(relativePath: { eq: "engagement/treeFacing2.jpg" }) {
                      childImageSharp {
                        fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                        }
                      }
                      swing: file(relativePath: { eq: "engagement/swing.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                          }
                        }
                        runway: file(relativePath: { eq: "engagement/runway.jpg" }) {
                          childImageSharp {
                            fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                              ...GatsbyImageSharpFluid_withWebp
                            }
                            }
                          }
                          ohYeah: file(relativePath: { eq: "engagement/ohYeah.jpg" }) {
                            childImageSharp {
                              fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                ...GatsbyImageSharpFluid_withWebp
                              }
                              }
                            }
                            piggyBack: file(relativePath: { eq: "engagement/piggyBank.jpg" }) {
                              childImageSharp {
                                fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                  ...GatsbyImageSharpFluid_withWebp
                                }
                                }
                              }
                              nuzzle: file(relativePath: { eq: "engagement/nuzzle.jpg" }) {
                                childImageSharp {
                                  fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                    ...GatsbyImageSharpFluid_withWebp
                                  }
                                  }
                                }
                                sass: file(relativePath: { eq: "engagement/sass.jpg" }) {
                                  childImageSharp {
                                    fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                      ...GatsbyImageSharpFluid_withWebp
                                    }
                                    }
                                  }
                                  runwayTunnel: file(relativePath: { eq: "engagement/runwayTunnel.jpg" }) {
                                    childImageSharp {
                                      fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                        ...GatsbyImageSharpFluid_withWebp
                                      }
                                      }
                                    }
                                    handsTree: file(relativePath: { eq: "engagement/handsTree.jpg" }) {
                                      childImageSharp {
                                        fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                          ...GatsbyImageSharpFluid_withWebp
                                        }
                                        }
                                      }
                                      runwayTunnel: file(relativePath: { eq: "engagement/runwayTunnel.jpg" }) {
                                        childImageSharp {
                                          fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                            ...GatsbyImageSharpFluid_withWebp
                                          }
                                          }
                                        }
                                        runwayTunnel: file(relativePath: { eq: "engagement/runwayTunnel.jpg" }) {
                                          childImageSharp {
                                            fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                              ...GatsbyImageSharpFluid_withWebp
                                            }
                                            }
                                          }
                                      GQ: file(relativePath: { eq: "engagement/GQ.jpg" }) {
                                            childImageSharp {
                                              fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                                ...GatsbyImageSharpFluid_withWebp
                                              }
                                              }
                                            }
                                            boathouse: file(relativePath: { eq: "engagement/boathouse.jpg" }) {
                                              childImageSharp {
                                                fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                                  ...GatsbyImageSharpFluid_withWebp
                                                }
                                                }
                                              }
                                              greatKiss: file(relativePath: { eq: "engagement/greatKiss.jpg" }) {
                                                childImageSharp {
                                                  fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                                    ...GatsbyImageSharpFluid_withWebp
                                                  }
                                                  }
                                                }
                                                awesome: file(relativePath: { eq: "engagement/awesome.jpg" }) {
                                                  childImageSharp {
                                                    fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                                                      ...GatsbyImageSharpFluid_withWebp
                                                    }
                                                    }
                                                  }
          prettyBecca: file(relativePath: { eq: "engagement/prettyBecca.jpg" }) {
          childImageSharp {
          fluid(maxWidth:300 maxHeight:300 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
         }
        }
        }     
        prettyBecca2: file(relativePath: { eq: "engagement/prettyBecca2.jpg" }) {
          childImageSharp {
          fluid(maxWidth:300 maxHeight:300 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
         }
        }
        }        
        awesome2: file(relativePath: { eq: "engagement/awesome2.jpg" }) {
          childImageSharp {
          fluid(maxWidth:300 maxHeight:300 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
         }
        }
        }     
        shiningBecca: file(relativePath: { eq: "engagement/shiningBecca.jpg" }) {
          childImageSharp {
          fluid(maxWidth:300 maxHeight:300 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
         }
        }
        }     
        sass2: file(relativePath: { eq: "engagement/sass2.jpg" }) {
          childImageSharp {
          fluid(maxWidth:300 maxHeight:300 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
         }
        }
        }     
        bwKiss: file(relativePath: { eq: "engagement/bwKiss.jpg" }) {
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
        <title>Becca + Frank</title>
        <div className={styles.row}>
          <div id="1" className={styles.column}>
            <Img fluid={data.treeBothFacing.childImageSharp.fluid} />
            <Img fluid={data.neck.childImageSharp.fluid} />
            <Img fluid={data.GQ.childImageSharp.fluid} />
            <Img fluid={data.prettyBecca.childImageSharp.fluid} />
            <Img fluid={data.prettyBecca2.childImageSharp.fluid} />

          </div>
          <div id="2" className={styles.column}>
            <Img fluid={data.runwayTunnel.childImageSharp.fluid} />
            <Img fluid={data.awesome.childImageSharp.fluid} />
            <Img fluid={data.boathouse.childImageSharp.fluid} />
            <Img fluid={data.ohYeah.childImageSharp.fluid} />
            <Img fluid={data.shiningBecca.childImageSharp.fluid} />

          </div>
          <div id="3" className={styles.column}>
            <Img fluid={data.awesome.childImageSharp.fluid} />
            <Img fluid={data.swing.childImageSharp.fluid} />
            <Img fluid={data.sass.childImageSharp.fluid} />
            <Img fluid={data.nuzzle.childImageSharp.fluid} />
            <Img fluid={data.sass2.childImageSharp.fluid} />
          </div>
          <div id="4" className={styles.column}>
            <Img fluid={data.masks.childImageSharp.fluid} />
            <Img fluid={data.handsTree.childImageSharp.fluid} />
            <Img fluid={data.GQ.childImageSharp.fluid} />
            <Img fluid={data.greatKiss.childImageSharp.fluid} />
            <Img fluid={data.bwKiss.childImageSharp.fluid} />
          </div>
        </div>
      </Links>
    </div>

  );
}
