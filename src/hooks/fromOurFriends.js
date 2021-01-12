import {useStaticQuery, graphql} from 'gatsby';

export const getCrowdSource = () =>{
  const data = useStaticQuery(graphql`
  query {
    ayano: file(relativePath: { eq: "weddingDay/fromFriends/ayano.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }  
    
    baby1: file(relativePath: { eq: "weddingDay/fromFriends/baby1.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }     
    
    baby2: file(relativePath: { eq: "weddingDay/fromFriends/baby2.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }     
    
    brennerCake: file(relativePath: { eq: "weddingDay/fromFriends/brennerCake.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }     
    
    charlie: file(relativePath: { eq: "weddingDay/fromFriends/charlie.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }     
    
    christine: file(relativePath: { eq: "weddingDay/fromFriends/christine.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }     
    
    goodieBags: file(relativePath: { eq: "weddingDay/fromFriends/goodieBags.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }     
    
    laurenSteven: file(relativePath: { eq: "weddingDay/fromFriends/laurenSteven.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }     
    
    matt: file(relativePath: { eq: "weddingDay/fromFriends/matt.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }
    
    nancy: file(relativePath: { eq: "weddingDay/fromFriends/nancy.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }
    
    nabia: file(relativePath: { eq: "weddingDay/fromFriends/nabia.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }
  
  }`);
  return data;
};

