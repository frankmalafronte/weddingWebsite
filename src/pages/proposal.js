import React, {Component} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';
import Gallery from '../components/Gallery';
import {getProposal} from '../hooks/proposal';


export default function Proposal() {
  const data = getProposal();
  const array = Object.values(data);
  console.log(array)

  return (
    <Links>
    <Gallery photos = {data} array ={array}/>
    </Links>
  );
}

