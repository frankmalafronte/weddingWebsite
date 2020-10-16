import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../components/styles.css';

const Links = ()=>{
  return (
  <div style ={{display:'flex'}}>
  <Link to ="/#Home"><button>Our Wedding</button></Link>
  <Link to="/photos">
          <button
            type="button"
          >
          Photos
          </button>
          </Link>
          <Link to="/#Registry"><button>Registry</button></Link>
  </div>
  )
}

export default Links