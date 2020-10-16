import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TheWedding = () => {

const usAndCats = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "usAndCats.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!usAndCats.placeholderImage.childImageSharp.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <div>
    <div>Yep that's right you heard it here first</div>
  <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
<Img fluid={usAndCats.placeholderImage.childImageSharp.fluid} />
</div>
<div>
  <div>The Wedding</div>
  <div>December 31st, 2020</div>
  <div>5:30 PM</div>
  <div>On Zoom (zoom link here?)</div>
</div>
</div>
  )
}

export default TheWedding
