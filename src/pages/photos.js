import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Links from '../components/links'
import styles from '../components/styles.module.css'
import styled from "styled-components"


const data =  useStaticQuery(graphql`
query {
  kissy: file(relativePath: { eq: "kissy.jpg" }) {
    childImageSharp {
      fluid(maxWidth:800 maxHeight:800) {
        ...GatsbyImageSharpFluid
      }
      }
    }
  second: file(relativePath: { eq: "blah.jpg" }) {
    childImageSharp {
      fluid(maxWidth:600 maxHeight:600 quality:100) {
        ...GatsbyImageSharpFluid_withWebp
      }
      }
    }
}
`)
  
const imageWrapper = styled.div`
display:grid

`

export default function Photos() {






return (
<div>
<Links/>
<div className>
   <div>Hello Photos</div>
   <imageWrapper>  
     <Img fluid = {data.kissy.childImageSharp.fluid}/>
    <Img fluid ={data.second.childImageSharp.fluid}/> </imageWrapper>

  </div>
</div>
)
}

