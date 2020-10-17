import React, {useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout";
import Img from "gatsby-image"
import Links from '../components/links'
import styles from '../components/styles.module.css'
import FAQComponent from '../components/FAQ'


export default function FAQ() {
  const [faqs, setFaqs] = useState([
    {
    question: 'Why a Zoom Wedding?',
    answer: `If there’s one thing that 2020 has taught us, it’s that life is full of the unexpected — twists and turns, ups and downs. The past many months have taught us a lot about ourselves and each other, and now more than ever, we are ready to start our lives together.
    We want to be able to celebrate with all of our loved ones, near and far. With no clear end in sight for the pandemic, we are not confident that we’ll be able to safely gather and celebrate the way we want to within the next year.
    We hope to have a massive, lively, joyful in-person celebration sometime in 2022, but we just couldn’t wait to tie the knot!
    SO, we were inspired by the creativity of other friends and family to instead consider an hosting a Zoom wedding. We chose a date that holds special significance for us: December 31, 2020, which will mark five years since we first met at a New Year’s Eve party.
    We hope you’ll be able to join us before the ball drops (or doesn’t — who knows?) and close out 2020 on a happy note, despite all the challenges it has brought us.
    To RSVP to our Zoom wedding and receive an invitation, click here.`,
    open:false
  },
  {
    question: `Will there be a reception?`,
    answer: `Yes! We’re not sure when it will be or what it will look like exactly, but our hope is to have an in-person, more traditional ceremony in North Carolina sometime in 2022.`,
    open:false
  },
  {
    question:`What is a Zoom Wedding exactly?`,
    answer:`It’s just what it sounds like! A wedding but over Zoom.`,
    open: false
  }
  ])
  const toggleFAQ = index =>{
    setFaqs(faqs.map((faq,i)=>{
      if(i===index){
        faq.open = !faq.open
      } else {
        faq.open = false
      }
      return faq
    }))
  }
  
return (
  <div>
<Links/>
<div className={styles.title}>FAQ</div>
<div className={styles.faqs}>
{faqs.map((faq,i)=>
<FAQComponent faq={faq} index={i} toggleFAQ ={toggleFAQ} />
)}
</div>
</div>
)
}