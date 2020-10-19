import React from 'react';
import {Link} from 'gatsby';
import Image from '../components/image';
import TheWedding from '../components/theWedding';
import Links from '../components/links';
import styles from '../components/styles.module.css';

const IndexPage = () => (
  <div>
    <Links>
      <TheWedding/>
    </Links>
  </div>
);

export default IndexPage;
