import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';


export default function Engagement() {
  const data = useStaticQuery(graphql`
  query {
    drBoom: file(relativePath: { eq: "Dr._Boom.jpg" }) {
      childImageSharp {
        fluid(maxWidth:300 maxHeight:300 fit:FILL) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
        melbibi: file(relativePath: { eq: "cats/melbibi.jpg" }) {
          childImageSharp {
            fluid(maxWidth:300 maxHeight:300 fit:FILL) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          }
          usAndCats: file(relativePath: { eq: "usInLove/usAndCats.jpg" }) {
            childImageSharp {
              fluid(maxWidth:200 maxHeight:200 fit:COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
            twoFranks: file(relativePath: { eq: "twoFranks.jpg" }) {
              childImageSharp {
                fluid(maxWidth:300 maxHeight:300 fit:COVER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                }
              }
    }`);


  return (
    <div>
      <Links>
        <title>Becca + Frank</title>
        <div>Hello Engagement</div>
        <div className ={styles.row}>
          <div id ="1" className={styles.column}>
            {/* <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nunc ac vestibulum rutrum. In et eros euismod, lobortis diam dictum, rutrum ipsum. Maecenas sed molestie augue. Proin placerat tellus non lorem porttitor, quis pulvinar lorem tincidunt. Aliquam vel turpis sit amet ligula egestas efficitur et eu leo. Nullam euismod metus ut odio blandit, ac posuere risus auctor. Morbi ac nibh eros. Mauris tincidunt nunc quis velit ultricies aliquam. Nunc vitae libero neque. Quisque lobortis iaculis condimentum. Suspendisse commodo lobortis est, vitae finibus urna porta a. Aliquam eu elit efficitur sapien consequat sollicitudin. Morbi viverra erat non semper fermentum. Proin nisl lacus, malesuada vitae mauris a, iaculis auctor est. Nam tempor erat quis congue tristique.</div> */}
            {/* <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia nunc ac vestibulum rutrum. In et eros euismod, lobortis diam dictum, rutrum ipsum. Maecenas sed molestie augue. Proin placerat tellus non lorem porttitor, quis pulvinar lorem tincidunt. Aliquam vel turpis sit amet ligula egestas efficitur et eu leo. Nullam euismod metus ut odio blandit, ac posuere risus auctor. Morbi ac nibh eros. Mauris tincidunt nunc quis velit ultricies aliquam. Nunc vitae libero neque. Quisque lobortis iaculis condimentum. Suspendisse commodo lobortis est, vitae finibus urna porta a. Aliquam eu elit efficitur sapien consequat sollicitudin. Morbi viverra erat non semper fermentum. Proin nisl lacus, malesuada vitae mauris a, iaculis auctor est. Nam tempor erat quis congue tristique.</div> */}
            <Img fluid = {data.usAndCats.childImageSharp.fluid} />
            <Img fluid = {data.twoFranks.childImageSharp.fluid} />
            <Img fluid = {data.drBoom.childImageSharp.fluid} />
            <Img fluid = {data.drBoom.childImageSharp.fluid} />
          </div>
          <div id="2" className={styles.column}>
            <Img fluid = {data.drBoom.childImageSharp.fluid} />
            <Img fluid = {data.drBoom.childImageSharp.fluid} />
            <Img fluid = {data.drBoom.childImageSharp.fluid} />
            <Img fluid = {data.drBoom.childImageSharp.fluid} />
          </div>
          <div id="3" className={styles.column}>
            <Img fluid = {data.drBoom.childImageSharp.fluid} />
            <Img fluid = {data.drBoom.childImageSharp.fluid} />
            <Img fluid = {data.drBoom.childImageSharp.fluid} />
            <Img fluid = {data.drBoom.childImageSharp.fluid} />
          </div>
          <div id="4" className={styles.column}>
            <Img fluid = {data.drBoom.childImageSharp.fluid} />
            <Img fluid = {data.drBoom.childImageSharp.fluid} />
            <Img fluid = {data.drBoom.childImageSharp.fluid} />
            <Img fluid = {data.drBoom.childImageSharp.fluid} />
          </div>
        </div>
      </Links>
    </div>

  );
}
