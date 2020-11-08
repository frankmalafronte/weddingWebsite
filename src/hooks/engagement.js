import {useStaticQuery, graphql} from 'gatsby';

export const getEngagement = () =>{
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
    }`);
  return data;
};

