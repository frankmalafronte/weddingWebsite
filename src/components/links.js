import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from '../components/styles.module.css';

export default function Links ({children}){
  return (
    <header className="app-wrapper">
  <div className={styles.header} >
  <Link to ="/"><button>Our Wedding</button></Link>
  <Link to ="/RSVP"><button>RSVP</button></Link>
  <Link to ="/ourStory"><button>Our Story</button></Link>
  <Link to="/photos"><button>Photos</button></Link>
  <Link to="/FAQ"><button>FAQ</button></Link>
  <Link to ="/guestBook"><button>Guest Book</button> </Link>
  <Link to ="/registry"><button>Registry</button> </Link>
  </div>
  <div>  
    {children}
</div>
  </header>
  )
}

