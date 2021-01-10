import {useStaticQuery, graphql} from 'gatsby';

export const getWeddingDay = () =>{
  const data = useStaticQuery(graphql`
  query {
    cakeTopper: file(relativePath: { eq: "weddingDay/sue/prep/cakeTopper.JPG" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }
    stockings: file(relativePath: { eq: "weddingDay/sue/prep/stockings.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }  
      blackboard: file(relativePath: { eq: "weddingDay/sue/prep/blackboard.jpg" }) {
        childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
        items: file(relativePath: { eq: "weddingDay/sue/prep/items.JPG" }) {
          childImageSharp {
            fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          } 
          items2: file(relativePath: { eq: "weddingDay/sue/prep/items2.JPG" }) {
            childImageSharp {
              fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            } 
            items3: file(relativePath: { eq: "weddingDay/sue/prep/items3.JPG" }) {
              childImageSharp {
                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }  
    beccaErin1: file(relativePath: { eq: "weddingDay/sue/prep/beccaErin.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
      beccaErin2: file(relativePath: { eq: "weddingDay/sue/prep/beccaErin2.JPG" }) {
        childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:ENTROPY) {
            ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
      katieCurling: file(relativePath: { eq: "weddingDay/sue/prep/katieCurling.JPG" }) {
        childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:ENTROPY) {
            ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
      katieCurling2: file(relativePath: { eq: "weddingDay/sue/prep/katieCurling2.JPG" }) {
        childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:ENTROPY) {
            ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
      makeup: file(relativePath: { eq: "weddingDay/sue/prep/makeup.JPG" }) {
        childImageSharp {
          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
        ...GatsbyImageSharpFluid_withWebp
        }
          }
      }
          makeup2: file(relativePath: { eq: "weddingDay/sue/prep/makeup2.JPG" }) {
            childImageSharp {
              fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
            makeup3: file(relativePath: { eq: "weddingDay/sue/prep/makeup3.JPG" }) {
              childImageSharp {
                fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:CENTER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }             
              lipstick: file(relativePath: { eq: "weddingDay/sue/prep/lipstick.JPG" }) {
                childImageSharp {
                fluid(maxWidth:1200 maxHeight:1200 fit:COVER cropFocus:CENTER) {
                ...GatsbyImageSharpFluid_withWebp
               }
              }
              }
          lipstick2: file(relativePath: { eq: "weddingDay/sue/prep/lipstick2.JPG" }) {
            childImageSharp {
              fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
            beccaSue1: file(relativePath: { eq: "weddingDay/sue/prep/beccaSue1.JPG" }) {
              childImageSharp {
                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
              beccaSue4: file(relativePath: { eq: "weddingDay/sue/prep/beccaSue4.JPG" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
                beccaSue5: file(relativePath: { eq: "weddingDay/sue/prep/beccaSue5.JPG" }) {
                  childImageSharp {
                    fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                  }
            joeRecording: file(relativePath: { eq: "weddingDay/sue/prep/joeRecording.jpg" }) {
              childImageSharp {
                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
              boutineer: file(relativePath: { eq: "weddingDay/sue/prep/boutineer.JPG" }) {
                childImageSharp {
                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
                support: file(relativePath: { eq: "weddingDay/sue/prep/support.JPG" }) {
                  childImageSharp {
                    fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                  }
                  mattDad: file(relativePath: { eq: "weddingDay/sue/ceremony/mattDad.JPG" }) {
                    childImageSharp {
                      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                      }
                    }
                  frankTim3: file(relativePath: { eq: "weddingDay/sue/ceremony/frankTim3.JPG" }) {
                    childImageSharp {
                      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                      }
                    }
                    ceremony1: file(relativePath: { eq: "weddingDay/sue/ceremony/ceremony1.JPG" }) {
                      childImageSharp {
                        fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                        }
                      }
                        ceremony2: file(relativePath: { eq: "weddingDay/sue/ceremony/ceremony2.JPG" }) {
                          childImageSharp {
                            fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                              ...GatsbyImageSharpFluid_withWebp
                            }
                            }
                          }
                          ceremony3: file(relativePath: { eq: "weddingDay/sue/ceremony/ceremony3.JPG" }) {
                            childImageSharp {
                              fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                ...GatsbyImageSharpFluid_withWebp
                              }
                              }
                            }
                            ceremony5: file(relativePath: { eq: "weddingDay/sue/ceremony/ceremony5.JPG" }) {
                              childImageSharp {
                                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                  ...GatsbyImageSharpFluid_withWebp
                                }
                                }
                              }
                              ceremony6: file(relativePath: { eq: "weddingDay/sue/ceremony/ceremony5.JPG" }) {
                                childImageSharp {
                                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                    ...GatsbyImageSharpFluid_withWebp
                                  }
                                  }
                                }
                             
                              ceremony8: file(relativePath: { eq: "weddingDay/sue/ceremony/ceremony6.JPG" }) {
                                childImageSharp {
                                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                    ...GatsbyImageSharpFluid_withWebp
                                  }
                                  }
                                }
                                ceremony9: file(relativePath: { eq: "weddingDay/sue/ceremony/ceremony6.JPG" }) {
                                  childImageSharp {
                                    fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                      ...GatsbyImageSharpFluid_withWebp
                                    }
                                    }
                                  }
                                cutCake: file(relativePath: { eq: "weddingDay/sue/ceremony/cutCake.JPG" }) {
                                  childImageSharp {
                                    fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                      ...GatsbyImageSharpFluid_withWebp
                                    }
                                    }
                                  }
                                  cutCake2: file(relativePath: { eq: "weddingDay/sue/ceremony/cutCake2.JPG" }) {
                                    childImageSharp {
                                      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                        ...GatsbyImageSharpFluid_withWebp
                                      }
                                      }
                                    }
                                    theGirls: file(relativePath: { eq: "weddingDay/sue/post/theGirls.JPG" }) {
                                      childImageSharp {
                                        fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                          ...GatsbyImageSharpFluid_withWebp
                                        }
                                        }
                                      }
                                      theGuys: file(relativePath: { eq: "weddingDay/sue/post/theGirls.JPG" }) {
                                        childImageSharp {
                                          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                            ...GatsbyImageSharpFluid_withWebp
                                          }
                                          }
                                        }
                                        theGuysSilly: file(relativePath: { eq: "weddingDay/sue/post/theGuysSilly.JPG" }) {
                                          childImageSharp {
                                            fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                              ...GatsbyImageSharpFluid_withWebp
                                            }
                                            }
                                          }
                                          theFive: file(relativePath: { eq: "weddingDay/sue/post/theFive.JPG" }) {
                                            childImageSharp {
                                              fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                ...GatsbyImageSharpFluid_withWebp
                                              }
                                              }
                                            }
                                            nonDad: file(relativePath: { eq: "weddingDay/sue/post/nonDad.JPG" }) {
                                              childImageSharp {
                                                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                  ...GatsbyImageSharpFluid_withWebp
                                                }
                                                }
                                              }
                                              frankSue1: file(relativePath: { eq: "weddingDay/sue/post/frankSue1.JPG" }) {
                                                childImageSharp {
                                                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                    ...GatsbyImageSharpFluid_withWebp
                                                  }
                                                  }
                                                }
                                                beccaKatie1: file(relativePath: { eq: "weddingDay/sue/post/beccaKatie1.JPG" }) {
                                                  childImageSharp {
                                                    fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                      ...GatsbyImageSharpFluid_withWebp
                                                    }
                                                    }
                                                  }
                                                  brothers: file(relativePath: { eq: "weddingDay/sue/post/nonDad.JPG" }) {
                                                    childImageSharp {
                                                      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                        ...GatsbyImageSharpFluid_withWebp
                                                      }
                                                      }
                                                    }
                                                    momDad: file(relativePath: { eq: "weddingDay/sue/post/momDad.JPG" }) {
                                                      childImageSharp {
                                                        fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                          ...GatsbyImageSharpFluid_withWebp
                                                        }
                                                        }
                                                      }
                                                      siblings: file(relativePath: { eq: "weddingDay/sue/post/siblings.JPG" }) {
                                                        childImageSharp {
                                                          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                            ...GatsbyImageSharpFluid_withWebp
                                                          }
                                                          }
                                                        }
                                                        katieAdam2: file(relativePath: { eq: "weddingDay/sue/post/katieAdam2.JPG" }) {
                                                          childImageSharp {
                                                            fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                              ...GatsbyImageSharpFluid_withWebp
                                                            }
                                                            }
                                                          }
                                                        sueMarion1: file(relativePath: { eq: "weddingDay/sue/post/sueMarion1.JPG" }) {
                                                          childImageSharp {
                                                            fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                              ...GatsbyImageSharpFluid_withWebp
                                                            }
                                                            }
                                                          }
                                                          sueMarion2: file(relativePath: { eq: "weddingDay/sue/post/sueMarion2.JPG" }) {
                                                            childImageSharp {
                                                              fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                                ...GatsbyImageSharpFluid_withWebp
                                                              }
                                                              }
                                                            }
                                                            tim1: file(relativePath: { eq: "weddingDay/sue/post/tim1.JPG" }) {
                                                              childImageSharp {
                                                                fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                                  ...GatsbyImageSharpFluid_withWebp
                                                                }
                                                                }
                                                              }
                                                              girls3: file(relativePath: { eq: "weddingDay/sue/post/girls3.JPG" }) {
                                                                childImageSharp {
                                                                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                                    ...GatsbyImageSharpFluid_withWebp
                                                                  }
                                                                  }
                                                                }
                                                                beccaMarion4: file(relativePath: { eq: "weddingDay/sue/post/beccaMarion4.JPG" }) {
                                                                  childImageSharp {
                                                                    fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                                      ...GatsbyImageSharpFluid_withWebp
                                                                    }
                                                                    }
                                                                  }
                                                                  marion1: file(relativePath: { eq: "weddingDay/sue/post/beccaMarion4.JPG" }) {
                                                                    childImageSharp {
                                                                      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                                        ...GatsbyImageSharpFluid_withWebp
                                                                      }
                                                                      }
                                                                    }
                                                                    mattMarion1: file(relativePath: { eq: "weddingDay/sue/post/beccaMarion4.JPG" }) {
                                                                      childImageSharp {
                                                                        fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                                          ...GatsbyImageSharpFluid_withWebp
                                                                        }
                                                                        }
                                                                      }
                                                                      mattsue1: file(relativePath: { eq: "weddingDay/sue/post/mattSue1.JPG" }) {
                                                                        childImageSharp {
                                                                          fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                                            ...GatsbyImageSharpFluid_withWebp
                                                                          }
                                                                          }
                                                                        }
                                                                        sillyMatt: file(relativePath: { eq: "weddingDay/sue/post/sillyMatt.JPG" }) {
                                                                          childImageSharp {
                                                                            fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                                              ...GatsbyImageSharpFluid_withWebp
                                                                            }
                                                                            }
                                                                          }
                                                                          katie: file(relativePath: { eq: "weddingDay/sue/post/katie.JPG" }) {
                                                                            childImageSharp {
                                                                              fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                                                ...GatsbyImageSharpFluid_withWebp
                                                                              }
                                                                              }
                                                                            }
                                                                          
                                                                              mattsue1: file(relativePath: { eq: "weddingDay/sue/post/mattSue1.JPG" }) {
                                                                                childImageSharp {
                                                                                  fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                                                    ...GatsbyImageSharpFluid_withWebp
                                                                                  }
                                                                                  }
                                                                                }
                                                                                mattsue1: file(relativePath: { eq: "weddingDay/sue/post/mattSue1.JPG" }) {
                                                                                  childImageSharp {
                                                                                    fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                                                      ...GatsbyImageSharpFluid_withWebp
                                                                                    }
                                                                                    }
                                                                                  }
                                                                                  beccaTim: file(relativePath: { eq: "weddingDay/sue/post/beccaTim.JPG" }) {
                                                                                    childImageSharp {
                                                                                      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
                                                                                        ...GatsbyImageSharpFluid_withWebp
                                                                                      }
                                                                                      }
                                                                                    }

                                    
                              
                

    }`);
  return data;
};

