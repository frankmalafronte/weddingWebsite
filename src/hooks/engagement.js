import {useStaticQuery, graphql} from 'gatsby';

export const getEngagement = () =>{
  const data = useStaticQuery(graphql`
  query {
    foreheads: file(relativePath: { eq: "engagement/foreheads.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
        ...GatsbyImageSharpFluid_withWebp
        }
       }
    }
            neck: file(relativePath: { eq: "engagement/neck.jpg" }) {
              childImageSharp {
                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
              masks: file(relativePath: { eq: "engagement/masks.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
                tunnel: file(relativePath: { eq: "engagement/tunnel.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                      ...GatsbyImageSharpFluid_withWebp
           }
          }
          }
              treeBothFacing: file(relativePath: { eq: "engagement/treeBothFacing.jpg" }) {
               childImageSharp {
              fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
                }
                 }
              }
          treefacing2: file(relativePath: { eq: "engagement/treefacing2.jpg" }) {
                      childImageSharp {
                        fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                        }
                      }
                      swing: file(relativePath: { eq: "engagement/swing.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                          }
                        }
                        runway: file(relativePath: { eq: "engagement/runway.jpg" }) {
                          childImageSharp {
                            fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                              ...GatsbyImageSharpFluid_withWebp
                            }
                            }
                          }
                          ohYeah: file(relativePath: { eq: "engagement/ohYeah.jpg" }) {
                            childImageSharp {
                              fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                ...GatsbyImageSharpFluid_withWebp
                              }
                              }
                            }
                            piggyBack: file(relativePath: { eq: "engagement/piggyBack.jpg" }) {
                              childImageSharp {
                                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                  ...GatsbyImageSharpFluid_withWebp
                                }
                                }
                              }
                              nuzzle: file(relativePath: { eq: "engagement/nuzzle.jpg" }) {
                                childImageSharp {
                                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                    ...GatsbyImageSharpFluid_withWebp
                                  }
                                  }
                                }
                                sass: file(relativePath: { eq: "engagement/sass.jpg" }) {
                                  childImageSharp {
                                    fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                      ...GatsbyImageSharpFluid_withWebp
                                    }
                                    }
                                  }
                                  runwayTunnel: file(relativePath: { eq: "engagement/runwayTunnel.jpg" }) {
                                    childImageSharp {
                                      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                        ...GatsbyImageSharpFluid_withWebp
                                      }
                                      }
                                    }
                                    handsTree: file(relativePath: { eq: "engagement/handsTree.jpg" }) {
                                      childImageSharp {
                                        fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                          ...GatsbyImageSharpFluid_withWebp
                                        }
                                        }
                                      }
                                      runwayTunnel: file(relativePath: { eq: "engagement/runwayTunnel.jpg" }) {
                                        childImageSharp {
                                          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                            ...GatsbyImageSharpFluid_withWebp
                                          }
                                          }
                                        }
                                        runwayTunnel: file(relativePath: { eq: "engagement/runwayTunnel.jpg" }) {
                                          childImageSharp {
                                            fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                              ...GatsbyImageSharpFluid_withWebp
                                            }
                                            }
                                          }
                                      GQ: file(relativePath: { eq: "engagement/GQ.jpg" }) {
                                            childImageSharp {
                                              fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                ...GatsbyImageSharpFluid_withWebp
                                              }
                                              }
                                            }
                                            boathouse: file(relativePath: { eq: "engagement/boathouse.jpg" }) {
                                              childImageSharp {
                                                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                  ...GatsbyImageSharpFluid_withWebp
                                                }
                                                }
                                              }
                                              greatKiss: file(relativePath: { eq: "engagement/greatKiss.jpg" }) {
                                                childImageSharp {
                                                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                    ...GatsbyImageSharpFluid_withWebp
                                                  }
                                                  }
                                                }
                                                awesome: file(relativePath: { eq: "engagement/awesome.jpg" }) {
                                                  childImageSharp {
                                                    fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                      ...GatsbyImageSharpFluid_withWebp
                                                    }
                                                    }
                                                  }
          prettyBecca: file(relativePath: { eq: "engagement/prettyBecca.jpg" }) {
          childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
         }
        }
        }         
        awesome2: file(relativePath: { eq: "engagement/awesome2.jpg" }) {
          childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
         }
        }
        }     
        shiningBecca: file(relativePath: { eq: "engagement/shiningBecca.jpg" }) {
          childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
         }
        }
        }                           
    }`);
  return data;
};

