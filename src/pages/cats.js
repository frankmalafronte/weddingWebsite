import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';


export default function Cats() {
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
        <div>Hello Cats</div>
        <div className ={styles.row}>
          <div id ="1" className={styles.column}>
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
