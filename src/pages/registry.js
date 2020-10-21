import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';
import {Link} from 'gatsby';


export default function Photos() {
  return (
    <div>
      <title>Becca + Frank</title>
      <Links/>
      <div className={styles.title}>Registry </div>
      <div>We are registered at the following:</div>
      <Link/>
    </div>
  );
}
