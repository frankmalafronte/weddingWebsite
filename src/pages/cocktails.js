import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';


export default function Cocktails() {
  const data = useStaticQuery(graphql`
  query {
    french75: file(relativePath: { eq: "cocktails/french75.jpg" }) {
      childImageSharp {
        fluid(maxWidth:600 maxHeight:600 fit:COVER cropFocus:WEST) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
        negroni: file(relativePath: { eq: "cocktails/negroni.jpg" }) {
          childImageSharp {
            fluid(maxWidth:600 maxHeight:700 fit:COVER) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          }
            ginger: file(relativePath: { eq: "cocktails/crownGinger.jpg" }) {
              childImageSharp {
                fluid(maxWidth:800 maxHeight:800 fit:COVER cropFocus:NORTH) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
                mocktail: file(relativePath: { eq: "cocktails/mocktail.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth:600 maxHeight:700 fit:COVER) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                    }
                  }
      }`)
  
  return (
    <div>
      <Links>
      </Links>
      <div className ={styles.heroBottom} style={{paddingTop: '50px'}}>Cocktails</div>
      <div className={styles.weddingPartyContainer} id ="top level" >
      <div id="Drinks Container" className={styles.weddingPartyColumn}>
      <div className ={styles.weddingParty}>  
      <div className="wrapper"> 
        <div className="image"><Img fluid = {data.ginger.childImageSharp.fluid} /></div>
        <h2>King James</h2>
        <div className ={styles.center}>
        <div>1 oz Crown Royal</div>
        <div>1 oz Jameson</div>
        <div>Top with ginger ale</div>
        <div>Spritz with lime juice</div>
        <div>Garnish with a lime wedge</div>
        </div>
      </div>
      </div>
  <div className ={styles.weddingParty}>  
      <div className="wrapper"> 
        <div className="image"><Img fluid = {data.negroni.childImageSharp.fluid} /></div>
        <h2>Negroni</h2>
        <div className ={styles.center}>
        <div>2 oz gin (or mezcal for Becca)</div>
        <div>1 oz sweet vermouth</div>
        <div>1 oz Campari</div>
        <div>Garnish with an orange twist</div>
        <div>Twist the orange peel and drop </div>
        </div>
      </div>
  </div>
  </div>
  
  <div id="Drinks Container" className={styles.weddingPartyColumn}>
  <div className ={styles.weddingParty}>  
      <div className="wrapper"> 
        <div className="image"><Img fluid = {data.french75.childImageSharp.fluid} /></div>
        <h2>French 75</h2>
        <div className ={styles.center}>
        <div>1 oz gin (or cognac)</div>
        <div>1/2 oz fresh lemon juice</div>
        <div>1/2 oz simple syrup</div>
        <div>Top with champagne</div>
        <div>Garnish with a lemon twist</div>
        </div>      
        </div>
  </div>
  <div className ={styles.weddingParty}>  
      <div className="wrapper"> 
        <div className="image"><Img fluid = {data.mocktail.childImageSharp.fluid} /></div>
        <h2>Virgin Strawberry Daiquiri</h2>
        <div className ={styles.center}>
        <div>4 fresh strawberries</div>
        <div>6 oz frozen strawberries </div>
        <div>2 oz simple syrup</div>
        <div>The juice of one lime</div>
        <div>Combine in blender and blend until smooth</div>
        </div>      
        </div>
  </div>
  </div>
    </div>
    </div>
  )
}
