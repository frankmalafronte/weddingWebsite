import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';


export default function guestBook() {
  return (
    <Links>
      <title>Becca + Frank</title>
      <div>guest book</div>
    </Links>
  );
}
