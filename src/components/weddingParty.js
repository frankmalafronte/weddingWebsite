import React, {useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Links from './links'
import styles from '../components/styles.module.css'


export default function WeddingParty() {

    const data =  useStaticQuery(graphql`
    query {
      drBoom: file(relativePath: { eq: "Dr._Boom.jpg" }) {
        childImageSharp {
          fluid(maxWidth:300 maxHeight:300 fit:FILL) {
            ...GatsbyImageSharpFluid_withWebp
          }
          }
        }
          melbibi: file(relativePath: { eq: "melbibi.jpg" }) {
            childImageSharp {
              fluid(maxWidth:300 maxHeight:300 fit:FILL) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
            sydneyBear: file(relativePath: { eq: "melbibi.jpg" }) {
              childImageSharp {
                fluid(maxWidth:300 maxHeight:300 fit:FILL) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
      }`)
  


return (
  <div>
    <div c id ="header">The Wedding Party</div>
<div className={styles.weddingPartyContainer} id ="top level">

<div id="Bride Container"  style={{width:"49%",backgroundColor:'pink'}}>

<div className={styles.weddingPartyContainer} id ="Megan">
<Img style={{width:'200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
<div>Megan Peters</div>
</div>

<div id ="Christine "className={styles.weddingPartyContainer}>
<Img style={{width:'200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
<div>Christine</div>
</div>

<div id ="katie"className={styles.weddingPartyContainer}>
<Img style={{width:'200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
<div>Katie</div>
</div>

<div id ="laura"className={styles.weddingPartyContainer}>
<Img style={{width:'200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
<div>Laura</div>
</div>

<div id ="Erin"className={styles.weddingPartyContainer}>
<Img style={{width:'200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
<div>Erin</div>
</div>

</div>

<div  style={{width:"49%", backgroundColor:'blue' }}id= "Groom Container">

<div id ="Joe"className={styles.weddingPartyContainer}>
<Img style={{width:'200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
<div>Joe</div>
</div>

<div id ="Ankit"className={styles.weddingPartyContainer}>
<Img style={{width:'200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
<div>Ankit</div>
</div>

<div id ="Nahom"className={styles.weddingPartyContainer}>
<Img style={{width:'200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
<div>Nahom</div>
</div>

<div id ="David"className={styles.weddingPartyContainer}>
<Img style={{width:'200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
<div>David</div>
</div>

<div id ="Kevin"className={styles.weddingPartyContainer}>
<Img style={{width:'200px'}} fluid = {data.drBoom.childImageSharp.fluid} />
<div>Kevin</div>
</div>
</div>
  </div>
  </div>

)
}

