import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Links from '../components/links'
import styles from '../components/styles.module.css'


export default function RSVP() {


return (
  <Links>
  <div className={styles.center}>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdZfPxCR_BM9FCAxx6h4Evt4WRBnEjO3g1SYnFUU8h-nYAc6g/viewform?embedded=true" width="640" height="2000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</div>
</Links>
)
}