import {useStaticQuery, graphql} from 'gatsby';

export const getusInLove = () =>{
  const data = useStaticQuery(graphql`
  query {
    amazon: file(relativePath: { eq: "usInLove/amazon.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
        angusBarn: file(relativePath: { eq: "usInLove/angusBarn.jpg" }) {
          childImageSharp {
            fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          }
          beccaKissCrop: file(relativePath: { eq: "usInLove/beccaKissCrop.png" }) {
            childImageSharp {
              fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
            boardGame: file(relativePath: { eq: "usInLove/boardGame.jpg" }) {
              childImageSharp {
                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
              catalog: file(relativePath: { eq: "usInLove/catalog.jpg" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
                chapelHill: file(relativePath: { eq: "usInLove/chapelHill.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                  }
                  drunkAndHot: file(relativePath: { eq: "usInLove/drunkAndHot.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                      }
                    }
                      usAndCats: file(relativePath: { eq: "usInLove/usAndCats.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                          }
                        }
                        flower: file(relativePath: { eq: "usInLove/flower.jpg" }) {
                        childImageSharp {
                          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                          }
                        }
                        niceHair: file(relativePath: { eq: "usInLove/niceHair.jpg" }) {
                          childImageSharp {
                            fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                              ...GatsbyImageSharpFluid_withWebp
                            }
                            }
                          }
                          packers: file(relativePath: { eq: "usInLove/packers.jpg" }) {
                            childImageSharp {
                              fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                ...GatsbyImageSharpFluid_withWebp
                              }
                              }
                            }
                            erinPaulWedding: file(relativePath: { eq: "usInLove/erinPaulWedding.JPG" }) {
                              childImageSharp {
                                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                  ...GatsbyImageSharpFluid_withWebp
                                }
                                }
                              }
                              wearWolf: file(relativePath: { eq: "usInLove/wearWolf.jpg" }) {
                                childImageSharp {
                                  fluid(maxWidth:1100 maxHeight:1200 fit:COVER) {
                                    ...GatsbyImageSharpFluid_withWebp
                                  }
                                  }
                                }
                                eifelTower: file(relativePath: { eq: "usInLove/eifelTower.jpg" }) {
                                  childImageSharp {
                                    fluid(maxWidth:1100 maxHeight:1200 fit:COVER) {
                                      ...GatsbyImageSharpFluid_withWebp
                                    }
                                    }
                                  }
                                      cuties: file(relativePath: { eq: "usInLove/cuties.jpg" }) {
                                        childImageSharp {
                                          fluid(maxWidth:1100 maxHeight:1200 fit:COVER) {
                                            ...GatsbyImageSharpFluid_withWebp
                                          }
                                          }
                                        }
                                        yankees: file(relativePath: { eq: "usInLove/yankees.jpg" }) {
                                          childImageSharp {
                                            fluid(maxWidth:1100 maxHeight:1200 fit:COVER) {
                                              ...GatsbyImageSharpFluid_withWebp
                                            }
                                            }
                                          }

    }`);

  return data;
};

