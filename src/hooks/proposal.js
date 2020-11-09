import {useStaticQuery, graphql} from 'gatsby';

export const getProposal = () =>{
  const data = useStaticQuery(graphql`
  query {
    smooch: file(relativePath: { eq: "proposal/smooch.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
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
            ahh: file(relativePath: { eq: "proposal/ah!!!.jpg" }) {
              childImageSharp {
                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
              poloroids: file(relativePath: { eq: "proposal/poloroids.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
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
                  cuties: file(relativePath: { eq: "usInLove/cuties.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                      }
                    }
                    sign: file(relativePath: { eq: "proposal/sign.jpg" }) {
                      childImageSharp {
                        fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
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
                          blush: file(relativePath: { eq: "proposal/blush.jpg" }) {
                            childImageSharp {
                              fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                ...GatsbyImageSharpFluid_withWebp
                              }
                              }
                            }
                            happyBecca: file(relativePath: { eq: "proposal/happyBecca.jpg" }) {
                              childImageSharp {
                                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                  ...GatsbyImageSharpFluid_withWebp
                                }
                                }
                              }
                              beccaSmiles: file(relativePath: { eq: "proposal/beccaSmiles.jpg" }) {
                                childImageSharp {
                                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                    ...GatsbyImageSharpFluid_withWebp
                                  }
                                  }
                                }
                                waterFeet: file(relativePath: { eq: "proposal/waterFeet.jpg" }) {
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
                                        fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                          ...GatsbyImageSharpFluid_withWebp
                                        }
                                        }
                                      }
                                      scenery: file(relativePath: { eq: "proposal/scenery.jpg" }) {
                                        childImageSharp {
                                          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                            ...GatsbyImageSharpFluid_withWebp
                                          }
                                          }
                                        }
                                        otherMountain: file(relativePath: { eq: "proposal/otherMountain.jpg" }) {
                                          childImageSharp {
                                            fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
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

