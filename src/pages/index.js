import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import TheWedding from '../components/theWedding'
import Header from '../components/header'
import Links from '../components/links'

const IndexPage = () => (
  <div>
    <Links/>
    {/* <h1>Hello! We're Getting Married!</h1>
    <p>There will be a website here, until then....</p>
    <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <TheWedding/>
  </div>
)

export default IndexPage
