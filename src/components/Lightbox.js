import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
export default class Lightbox extends Component {
  static propTypes = {
    engagementPhotos: PropTypes.array.isRequired,
  }
  render() {
    const { engagementPhotos } = this.props
    return (
      <div>
                  <div>hello</div>

        {engagementPhotos.map(image => (
          <Img
            key={image.node.childImageSharp.fluid.src}
            fluid={image.node.childImageSharp.fluid}
          />
        ))}
      </div>
    )
  }
}