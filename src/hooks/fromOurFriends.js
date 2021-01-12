import {useStaticQuery, graphql} from 'gatsby';

export const getFromOurFriends = () =>{
  const data = useStaticQuery(graphql`
  query {
      
    nancy: file(relativePath: { eq: "weddingDay/fromFriends/nancy.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }
     
    ayano: file(relativePath: { eq: "weddingDay/fromFriends/ayano.jpg" }) {
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
    
    laurenSteven: file(relativePath: { eq: "weddingDay/fromFriends/laurenSteven.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }
    blomberg: file(relativePath: { eq: "weddingDay/fromFriends/blomberg.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }
     
    kari: file(relativePath: { eq: "weddingDay/fromFriends/kari.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }  
    
    lisaJake: file(relativePath: { eq: "weddingDay/fromFriends/lisaJake.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }     
    
    laurenSteven2: file(relativePath: { eq: "weddingDay/fromFriends/laurenSteven2.jpg" }) {
      childImageSharp {
      fluid(maxWidth:1200 maxHeight:1200 fit:COVER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }
     
    fisher: file(relativePath: { eq: "weddingDay/fromFriends/fisher.jpg" }) {
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
    
    kaiserGerber1: file(relativePath: { eq: "weddingDay/fromFriends/kaiserGerber1.png" }) {
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
    
    katie: file(relativePath: { eq: "weddingDay/fromFriends/katie.jpg" }) {
      childImageSharp {
      fluid(maxWidth:900 maxHeight:1600 fit:COVER cropFocus:CENTER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }

    louisa: file(relativePath: { eq: "weddingDay/fromFriends/louisa.jpg" }) {
      childImageSharp {
      fluid(maxWidth:900 maxHeight:1600 fit:COVER cropFocus:CENTER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }  
        
    lisa: file(relativePath: { eq: "weddingDay/fromFriends/lisa.jpg" }) {
      childImageSharp {
      fluid(maxWidth:900 maxHeight:1600 fit:COVER cropFocus:NORTH) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }  

    janai: file(relativePath: { eq: "weddingDay/fromFriends/janai.jpg" }) {
      childImageSharp {
      fluid(maxWidth:900 maxHeight:1600 fit:COVER cropFocus:CENTER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }
         
    chuck2: file(relativePath: { eq: "weddingDay/fromFriends/chuck2.jpg" }) {
      childImageSharp {
      fluid(maxWidth:900 maxHeight:1600 fit:COVER cropFocus:CENTER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }  
                
    karen: file(relativePath: { eq: "weddingDay/fromFriends/karen.jpg" }) {
      childImageSharp {
      fluid(maxWidth:900 maxHeight:1600 fit:COVER cropFocus:CENTER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }  

    christine: file(relativePath: { eq: "weddingDay/fromFriends/christine.jpg" }) {
      childImageSharp {
      fluid(maxWidth:900 maxHeight:1600 fit:COVER cropFocus:CENTER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }  

    nabia: file(relativePath: { eq: "weddingDay/fromFriends/nabia.jpg" }) {
      childImageSharp {
      fluid(maxWidth:900 maxHeight:1600 fit:COVER cropFocus:CENTER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    } 

    emily: file(relativePath: { eq: "weddingDay/fromFriends/emily.jpg" }) {
      childImageSharp {
      fluid(maxWidth:900 maxHeight:1600 fit:COVER cropFocus:CENTER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }  

    jacqui: file(relativePath: { eq: "weddingDay/fromFriends/jacqui.jpg" }) {
      childImageSharp {
      fluid(maxWidth:900 maxHeight:1600 fit:COVER cropFocus:CENTER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }

    chuck1: file(relativePath: { eq: "weddingDay/fromFriends/chuck1.jpg" }) {
      childImageSharp {
      fluid(maxWidth:900 maxHeight:1600 fit:COVER cropFocus:CENTER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }

    karen2: file(relativePath: { eq: "weddingDay/fromFriends/karen2.jpg" }) {
      childImageSharp {
      fluid(maxWidth:900 maxHeight:1600 fit:COVER cropFocus:CENTER) {
      ...GatsbyImageSharpFluid_withWebp              
     }
    }
    }

  }`);
  return data;
};

