import {useStaticQuery, graphql} from 'gatsby';

export const getEngagement = () =>{
  const data = useStaticQuery(graphql`
  query {
    treeBothFacing: file(relativePath: { eq: "engagement/treeBothFacing.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }  
    awww2: file(relativePath: { eq: "engagement/awww2.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
      boathouse: file(relativePath: { eq: "engagement/boathouse.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:ENTROPY) {
            ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
      bridge: file(relativePath: { eq: "engagement/bridge.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
        ...GatsbyImageSharpFluid_withWebp
        }
          }
      }
          foreheads: file(relativePath: { eq: "engagement/foreheads.jpg" }) {
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
              shiningBecca: file(relativePath: { eq: "engagement/shiningBecca.jpg" }) {
                childImageSharp {
                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
               }
              }
              }
          handOnChest: file(relativePath: { eq: "engagement/handOnChest.jpg" }) {
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
          meLooking: file(relativePath: { eq: "engagement/meLooking.jpg" }) {
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
            handsTree: file(relativePath: { eq: "engagement/handsTree.jpg" }) {
              childImageSharp {
                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
          ohYeah: file(relativePath: { eq: "engagement/ohYeah.jpg" }) {
            childImageSharp {
              fluid(maxWidth:1100 maxHeight:1200 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            } 
            runway: file(relativePath: { eq: "engagement/runway.jpg" }) {
              childImageSharp {
              fluid(maxWidth:1100 maxHeight:1200 fit:COVER cropFocus:SOUTH) {
              ...GatsbyImageSharpFluid_withWebp
             }
            }
            }   
          piggyBack: file(relativePath: { eq: "engagement/piggyBack.jpg" }) {
            childImageSharp {
              fluid(maxWidth:1100 maxHeight:1200 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
        runwayTunnel: file(relativePath: { eq: "engagement/runwayTunnel.jpg" }) {
          childImageSharp {
          fluid(maxWidth:1100 maxHeight:1200 fit:COVER) {
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
        sass2: file(relativePath: { eq: "engagement/sass2.jpg" }) {
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
        GQ: file(relativePath: { eq: "engagement/GQ.jpg" }) {
          childImageSharp {
            fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          }
    }`);
  return data;
};

