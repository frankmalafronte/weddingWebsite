import React, {Component} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';
import Lightbox from '../components/Lightbox';
import {getEngagement} from '../hooks/engagement';


export default function Engagement() {
  const data = getEngagement();
  return (
    <Links>
      <title>Becca + Frank</title>
      <div className={styles.row}>
        <div id="1" className={styles.column}>
          <Img fluid={data.treeBothFacing.childImageSharp.fluid} />
          <Img fluid={data.neck.childImageSharp.fluid} />
          <Img fluid={data.GQ.childImageSharp.fluid} />
          <Img fluid={data.prettyBecca.childImageSharp.fluid} />
        </div>
        <div id="2" className={styles.column}>
          <Img fluid={data.runwayTunnel.childImageSharp.fluid} />
          <Img fluid={data.awesome.childImageSharp.fluid} />
          <Img fluid={data.boathouse.childImageSharp.fluid} />
          <Img fluid={data.ohYeah.childImageSharp.fluid} />
        </div>
        <div id="3" className={styles.column}>
          <Img fluid={data.awesome.childImageSharp.fluid} />
          <Img fluid={data.swing.childImageSharp.fluid} />
          <Img fluid={data.sass.childImageSharp.fluid} />
          <Img fluid={data.nuzzle.childImageSharp.fluid} />
        </div>
        <div id="4" className={styles.column}>
          <Img fluid={data.masks.childImageSharp.fluid} />
          <Img fluid={data.handsTree.childImageSharp.fluid} />
          <Img fluid={data.GQ.childImageSharp.fluid} />
          <Img fluid={data.greatKiss.childImageSharp.fluid} />
        </div>
      </div>
    </Links>
  );
}

