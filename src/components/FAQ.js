import React, {useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout";
import Img from "gatsby-image"
import Links from '../components/links'
import styles from '../components/styles.module.css'


export default function FAQComponent({faq, index, toggleFAQ}) {


return (
  <div className = {styles.faqContainer}>
  <div className={styles.faq} 
    key={index}
onClick={()=>toggleFAQ(index)}>
<div className ={ styles.faqQuestion}>
{faq.question}
</div>
<div className={ (faq.open ? styles.faqOpen : styles.faqClosed)}>
{faq.answer}
</div>
</div>
  </div>
)
}