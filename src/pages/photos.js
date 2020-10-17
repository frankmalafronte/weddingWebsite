import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout";
import Img from "gatsby-image"
import Links from '../components/links'


export default function Photos() {


const data =  useStaticQuery(graphql`
query {
  kissy: file(relativePath: { eq: "kissy.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  second: file(relativePath: { eq: "blah.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`)

return (
<div>
<Links/>
  <div>Hello Photos</div>
  <Img fluid = {data.kissy.childImageSharp.fluid}/>
  <Img fluid ={data.second.childImageSharp.fluid}/>
</div>
)
}

