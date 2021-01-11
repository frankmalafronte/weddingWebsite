import {useStaticQuery, graphql} from 'gatsby';

export const getWeddingDay = () =>{
  const data = useStaticQuery(graphql`
  query {
    blackboard: file(relativePath: { eq: "weddingDay/sue/prep/blackboard.jpg" }) {
      childImageSharp {
        fluid(maxWidth:600 maxHeight:600 fit:COVER cropFocus:CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
    stockings: file(relativePath: { eq: "weddingDay/sue/prep/stockings.jpg" }) {
      childImageSharp {
        fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }  
      cake: file(relativePath: { eq: "weddingDay/sue/prep/cake.JPG" }) {
        childImageSharp {
        fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
        ...GatsbyImageSharpFluid_withWebp              
       }
      }
  }
      flowers: file(relativePath: { eq: "weddingDay/sue/prep/flowers.JPG" }) {
      childImageSharp {
        fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      } 
      items2: file(relativePath: { eq: "weddingDay/sue/prep/items2.JPG" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        } 
        nails: file(relativePath: { eq: "weddingDay/sue/prep/nails.jpg" }) {
          childImageSharp {
            fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          } 
          
        beccaZoom: file(relativePath: { eq: "weddingDay/sue/prep/beccaZoom.jpg" }) {
          childImageSharp {
            fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          } 
      katieCurling: file(relativePath: { eq: "weddingDay/sue/prep/katieCurling.JPG" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:ENTROPY) {
            ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
      tie2: file(relativePath: { eq: "weddingDay/condo/tie2.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
          }
      tie5: file(relativePath: { eq: "weddingDay/condo/tie5.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
          }
      tie6: file(relativePath: { eq: "weddingDay/condo/tie6.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
          }
      timHelp1: file(relativePath: { eq: "weddingDay/condo/timHelp1.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
          }
      makeup: file(relativePath: { eq: "weddingDay/sue/prep/makeup.JPG" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:800 fit:COVER) {
        ...GatsbyImageSharpFluid_withWebp
        }
          }
      }
      beccaErin2: file(relativePath: { eq: "weddingDay/sue/prep/beccaErin2.JPG" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:EAST) {
            ...GatsbyImageSharpFluid_withWebp
        }
        }
      }  
      makeup2: file(relativePath: { eq: "weddingDay/sue/prep/makeup2.JPG" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:800 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      makeup3: file(relativePath: { eq: "weddingDay/sue/prep/makeup3.JPG" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        } 
      tie4: file(relativePath: { eq: "weddingDay/condo/tie4.jpg" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:800 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      timHelp2: file(relativePath: { eq: "weddingDay/condo/timHelp2.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
          }
      timHelp3: file(relativePath: { eq: "weddingDay/condo/timHelp3.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
          }
      timHelp4: file(relativePath: { eq: "weddingDay/condo/timHelp4.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
          }
          dressDisplay: file(relativePath: { eq: "weddingDay/sue/prep/dressDisplay.jpg" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          dressFitting: file(relativePath: { eq: "weddingDay/sue/prep/beccaSue1.JPG" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }

      necklace: file(relativePath: { eq: "weddingDay/sue/prep/beccaSue4.JPG" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      lipstick: file(relativePath: { eq: "weddingDay/sue/prep/lipstick2.JPG" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:800 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
        willow2: file(relativePath: { eq: "weddingDay/condo/willow2.jpg" }) {
          childImageSharp {
            fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
            }
        momFrank: file(relativePath: { eq: "weddingDay/condo/momFrank.jpg" }) {
          childImageSharp {
            fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
            }
        momFrank2: file(relativePath: { eq: "weddingDay/condo/momFrank2.jpg" }) {
          childImageSharp {
            fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
            }

      boutineer: file(relativePath: { eq: "weddingDay/sue/prep/boutineer.JPG" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }

      beccaSmile: file(relativePath: { eq: "weddingDay/sue/prep/lipstick.JPG" }) {
        childImageSharp {
        fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:WEST) {
        ...GatsbyImageSharpFluid_withWebp
        }
      }
      }
      joeRecording: file(relativePath: { eq: "weddingDay/sue/prep/joeRecording.jpg" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:800 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      mattDad: file(relativePath: { eq: "weddingDay/sue/ceremony/mattDad.JPG" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:800 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      support: file(relativePath: { eq: "weddingDay/sue/prep/support.JPG" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      frankTim2: file(relativePath: { eq: "weddingDay/sue/prep/frankTim2.JPG" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:600 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      ceremony2: file(relativePath: { eq: "weddingDay/sue/ceremony/ceremony2.JPG" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:600 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      ceremony3: file(relativePath: { eq: "weddingDay/sue/ceremony/ceremony3.JPG" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:600 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
      ceremony5: file(relativePath: { eq: "weddingDay/sue/ceremony/ceremony5.JPG" }) {
        childImageSharp {
          fluid(maxWidth:800 maxHeight:600 fit:COVER cropFocus:CENTER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
          cutCake2: file(relativePath: { eq: "weddingDay/sue/ceremony/cutCake2.JPG" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          dance: file(relativePath: { eq: "weddingDay/sue/post/dance.jpg" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          mrAndMrs: file(relativePath: { eq: "weddingDay/sue/post/mrAndMrsMal.jpg" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          stockingsFrankBecca: file(relativePath: { eq: "weddingDay/sue/post/stockingsFrankBecca.jpg" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          theGirls: file(relativePath: { eq: "weddingDay/sue/post/theGirls.JPG" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:500 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          theGuys: file(relativePath: { eq: "weddingDay/sue/post/theGuys.JPG" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:500 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          theFive: file(relativePath: { eq: "weddingDay/sue/post/theFive.JPG" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:500 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          girls3: file(relativePath: { eq: "weddingDay/sue/post/girls3.JPG" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:500 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          frankSue1: file(relativePath: { eq: "weddingDay/sue/post/frankSue1.JPG" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          beccaKatie1: file(relativePath: { eq: "weddingDay/sue/post/beccaKatie1.JPG" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          brothers: file(relativePath: { eq: "weddingDay/sue/post/brothers.JPG" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:WEST) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          momDad: file(relativePath: { eq: "weddingDay/sue/post/momDad.JPG" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          siblings: file(relativePath: { eq: "weddingDay/sue/post/siblings.JPG" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          beccaMarion4: file(relativePath: { eq: "weddingDay/sue/post/beccaMarion4.JPG" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          katieAdam2: file(relativePath: { eq: "weddingDay/sue/post/katieAdam2.JPG" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          sueMarion2: file(relativePath: { eq: "weddingDay/sue/post/sueMarion2.JPG" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }

            license2: file(relativePath: { eq: "weddingDay/sue/license/license2.JPG" }) {
              childImageSharp {
                fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
            blessing: file(relativePath: { eq: "weddingDay/sue/license/jesus.JPG" }) {
              childImageSharp {
                fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
          marion1: file(relativePath: { eq: "weddingDay/sue/post/marion1.JPG" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          mattsue1: file(relativePath: { eq: "weddingDay/sue/post/mattSue1.JPG" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
            mattMarion1: file(relativePath: { eq: "weddingDay/sue/post/mattMarion1.JPG" }) {
              childImageSharp {
                fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:CENTER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
          sillyMatt: file(relativePath: { eq: "weddingDay/sue/post/sillyMatt.JPG" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          katie: file(relativePath: { eq: "weddingDay/sue/post/katie.JPG" }) {
            childImageSharp {
              fluid(maxWidth:800 maxHeight:800 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
          
            tim1: file(relativePath: { eq: "weddingDay/sue/post/tim1.JPG" }) {
              childImageSharp {
                fluid(maxWidth:800 maxHeight:800 fit:COVER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }

                                
                              

    }`);
  return data;
};

