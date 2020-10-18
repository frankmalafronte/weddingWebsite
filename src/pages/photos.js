import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Links from '../components/links'
import GridItem from '../components/gridItem'
import styles from '../components/styles.module.css'
import styled from "styled-components"



  


export default function Photos() {
  const data =  useStaticQuery(graphql`
query {
  kissy: file(relativePath: { eq: "kissy.jpg" }) {
    childImageSharp {
      fluid(maxWidth:50 maxHeight:50 fit:FILL) {
        ...GatsbyImageSharpFluid
      }
      }
    }
  second: file(relativePath: { eq: "blah.jpg" }) {
    childImageSharp {
      fluid(maxWidth:50 maxHeight:50 ) {
        ...GatsbyImageSharpFluid_withWebp
      }
      }
    }
}
`)

const Area = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 50vw;
`



return (
<Links>
  <Area>
  <GridItem>
  <div>Hello Photos</div>
  <div>Lorem Ipsum</div>
  <div>Lorem Ipsum</div>
  <div>Lorem Ipsum</div>
  <div>Lorem Ipsum</div>
  </GridItem>
 </Area>
</Links>
)
}

