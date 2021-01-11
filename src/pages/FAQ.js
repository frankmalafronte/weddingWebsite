import React, {useState} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import Links from '../components/links';
import styles from '../components/styles.module.css';
import FAQComponent from '../components/FAQ';


export default function FAQ() {
  const [faqs, setFaqs] = useState([
    {
      question: 'Why a Zoom Wedding?',
      answer: <div>If there’s one thing that 2020 has taught us, it’s that life is full of the unexpected — twists and turns, ups and downs. The past many months have taught us a lot about ourselves and each other, and now more than ever, we are ready to start our lives together.
        <br />
        <br />We want to be able to celebrate with all of our loved ones, near and far. With no clear end in sight for the pandemic, we are not confident that we’ll be able to safely gather and celebrate the way we want to within the next year.
        <br />
        <br />We hope to have a massive, lively, joyful in-person celebration sometime in 2022, but we just couldn’t wait to tie the knot!
        <br />
        <br />SO, we were inspired by the creativity of other friends and family to instead consider hosting a Zoom wedding. We chose a date that holds special significance for us: December 31, 2020, which will mark five years since we first met at a New Year’s Eve party.
        <br />
        <br />We hope you’ll be able to join us before the ball drops (or doesn’t — who knows?) and close out 2020 on a happy note, despite all the challenges it has brought us.</div>,
      open: true,
    },
    {
      question: 'Will there be an in-person reception eventually?',
      answer: 'Yes! We’re not sure when it will be or what it will look like exactly, but our hope is to have an in-person, more traditional ceremony in North Carolina sometime in 2022.',
      open: false,
    },
    // {
    //   question: 'New to Zoom? These instructions should help you get set up.',
    //   answer: <div>To sign up for your own free account, visit <a href='https://zoom.us/signup' target='_blank'>zoom.us/signup</a> and enter your email address. You will receive an email from Zoom. In this email, click <b>Activate Account.</b>
    //     <br/><br/>You can login to your Zoom account on the web at any time, at <a href='https://zoom.us/signin' target='_blank'>zoom.us/signin</a>. Once you're logged in, use the panel on the left side to navigate the Zoom web portal.  You can update your profile, schedule a meeting, edit your settings, and more.
    //     <br/><br/>You can download Zoom for desktop (<b>Zoom Client for Meetings</b>) or mobile (<b>Zoom Mobile Apps</b>) from their <a href='https://zoom.us/download' target='_blank'>Downloads page.</a>
    //     <br/><br/>Learn more from their Zoom's <a href='https://zoom.us/signup' target='_blank'>Quick start guide for new users</a>.</div>,
    //   open: false,
    // },
    // {
    //   question: 'What should I wear?',
    //   answer: 'We’ll be wearing festive attire inspired by New Year’s Eve, but encourage you to wear whatever you would to a party! It can be an excuse to dress up, or an excuse to wear PJs to a wedding for the first time.',
    //   open: false,
    // },
    // {
    //   question: 'What if I’m home for the holidays and have other people in the room with me?',
    //   answer: 'Feel free to invite them to join you — the more the merrier this year! If you’ve got kids joining you, let us know and we can try to pair you together with other parents. And feel free to bring your pets, too. We hope to have Sydney and Melbourne tuning in from the next room if we can!',
    //   open: false,
    // },
    // {
    //   question: 'What will be the format of the event?',
    //   answer: 'We will post a more detailed schedule closer to the wedding date, but for now, we are planning for a slideshow and music to open the room, followed by the ceremony and exchanging of vows, and brief toasts at the end.',
    //   open: false,
    // },
    // {
    //   question: 'What if I’m running late?',
    //   answer: 'Don’t worry! You can join anytime. We’re grateful to have Frank’s sister Katie and her boyfriend Adam hosting our Zoom event, so they will let you in whenever you are able to arrive. If you miss the whole event, we are hoping to record it and can share a recording with you at a later date.',
    //   open: false,
    // },
    {
      question: 'What are your colors?',
      answer: 'Don’t worry too much about colors, but the colors we’ve chosen for this Zoom wedding are navy and rose gold.',
      open: false,
    },
    // {
    //   question: '',
    //   answer: '',
    //   open: true,
    // },
  ]);
  const toggleFAQ = (index) =>{
    setFaqs(faqs.map((faq, i)=>{
      if (i===index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };

  return (
    <div>
      <Links/>
      <div className={styles.title}>FAQ</div>
      <div className={styles.faqs}>
        {faqs.map((faq, i)=>
          <FAQComponent faq={faq} index={i} toggleFAQ ={toggleFAQ} />,
        )}
      </div>
    </div>
  );
}
