import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout";
import Img from "gatsby-image"
import Links from '../components/links'
import styles from '../components/styles.module.css'


export default function ourStory() {


return (
  <Links>
  <div className ={styles.center}>How We Met</div>
  <div className ={styles.center}>Our Cats</div>
</Links>
)
}