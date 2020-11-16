import {useStaticQuery, graphql} from 'gatsby';

export const getProposal = () =>{
  const data = useStaticQuery(graphql`
  query {
    oneKnee: file(relativePath: { eq: "proposal/oneKnee.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
    ahh: file(relativePath: { eq: "proposal/ah!!!.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
      inTheClouds: file(relativePath: { eq: "proposal/inTheClouds.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
        handsClasp: file(relativePath: { eq: "proposal/handsClasp.jpg" }) {
          childImageSharp {
            fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          }
          beccaBeaming: file(relativePath: { eq: "proposal/beccaBeaming.jpg" }) {
            childImageSharp {
              fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:NORTH) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
            coolGuy: file(relativePath: { eq: "proposal/coolGuy.jpg" }) {
              childImageSharp {
                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
                    sign: file(relativePath: { eq: "proposal/sign.jpg" }) {
                      childImageSharp {
                        fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:NORTH) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                        }
                      }
                      smooch: file(relativePath: { eq: "proposal/smooch.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                          }
                        }
                          blush: file(relativePath: { eq: "proposal/blush.jpg" }) {
                            childImageSharp {
                              fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                ...GatsbyImageSharpFluid_withWebp
                              }
                              }
                            }
                            stillLife: file(relativePath: { eq: "proposal/stillLife.jpg" }) {
                                childImageSharp {
                                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:CENTER) {
                                    ...GatsbyImageSharpFluid_withWebp
                                  }
                                  }
                                }
                              handsSign: file(relativePath: { eq: "proposal/handsSign.jpg" }) {
                                childImageSharp {
                                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                    ...GatsbyImageSharpFluid_withWebp
                                  }
                                  }
                                }
                                  shoulder: file(relativePath: { eq: "proposal/shoulder.jpg" }) {
                                    childImageSharp {
                                      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                        ...GatsbyImageSharpFluid_withWebp
                                      }
                                      }
                                    }
                                    nature: file(relativePath: { eq: "proposal/nature.jpg" }) {
                                      childImageSharp {
                                        fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:NORTH) {
                                          ...GatsbyImageSharpFluid_withWebp
                                        }
                                        }
                                      }
                                      theRing: file(relativePath: { eq: "proposal/theRing.jpg" }) {
                                        childImageSharp {
                                          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                            ...GatsbyImageSharpFluid_withWebp
                                          }
                                          }
                                        }
                                        otherMountain: file(relativePath: { eq: "proposal/otherMountain.jpg" }) {
                                          childImageSharp {
                                            fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:SOUTH) {
                                              ...GatsbyImageSharpFluid_withWebp
                                            }
                                            }
                                          }
                                          lean: file(relativePath: { eq: "proposal/lean.jpg" }) {
                                            childImageSharp {
                                              fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                ...GatsbyImageSharpFluid_withWebp
                                              }
                                              }
                                            }
    }`);
  return data;
};

