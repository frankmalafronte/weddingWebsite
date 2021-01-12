import React, {Component} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';
import Gallery from '../components/Gallery';
import {getCrowdSource} from '../hooks/fromOurFriends';


export default function fromOurFriends() {
  const data = getCrowdSource()
  const array = Object.values(data);
  return (
    <Links>
      <Gallery photos = {data} array ={array}/>
    </Links>
  );
}
