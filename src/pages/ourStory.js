import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Links from '../components/links'
import styles from '../components/styles.module.css'


export default function OurStory() {
  const data =  useStaticQuery(graphql`
  query {
    drBoom: file(relativePath: { eq: "Dr._Boom.jpg" }) {
      childImageSharp {
        fluid(maxWidth:300 maxHeight:300 fit:FILL) {
          ...GatsbyImageSharpFluid_withWebp
        }
        }
      }
        melbibi: file(relativePath: { eq: "melbibi.jpg" }) {
          childImageSharp {
            fluid(maxWidth:300 maxHeight:300 fit:FILL) {
              ...GatsbyImageSharpFluid_withWebp
            }
            }
          }
          sydneyBear: file(relativePath: { eq: "melbibi.jpg" }) {
            childImageSharp {
              fluid(maxWidth:300 maxHeight:300 fit:FILL) {
                ...GatsbyImageSharpFluid_withWebp
              }
              }
            }
    }`)

    

return (
  <div>
  <Links>
  </Links>
  <div id="Our Story" style={{display:'flex', justifyContent:'center'}}> 
    <div >How We Met</div>
    </div>
  <div>
  <div id="container" style ={{display:"flex",backgroundColor:"blue"}}>
    <div style={{width:'30%'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ex massa. Nullam lobortis a quam eu efficitur. Sed in mauris turpis. Vestibulum quis sapien malesuada, congue mauris et, iaculis enim. Nam ipsum ligula, efficitur at consectetur a, dignissim lacinia urna. Nullam tempor, nisl et consectetur fermentum, urna orci faucibus erat, ac aliquet eros tellus non turpis. Sed auctor lectus non cursus pretium. Donec consequat lorem at ante consectetur sollicitudin. Vestibulum efficitur ac quam auctor faucibus. Nulla efficitur, nunc at gravida facilisis, ligula lacus congue ipsum, in condimentum ligula magna euismod quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vitae risus ac purus auctor accumsan. Etiam congue ante id mi efficitur imperdiet. Etiam consequat velit ullamcorper porttitor vestibulum. Pellentesque interdum turpis et luctus dignissim.
Phasellus tellus enim, elementum sit amet laoreet sit amet, pharetra eget est. Sed sit amet dolor a lacus pretium gravida ac non purus. Donec molestie urna consectetur nunc imperdiet, lobortis varius magna lacinia. Integer egestas ullamcorper lacus, sollicitudin feugiat mi fermentum eu. Nulla sed eleifend leo, aliquet euismod dolor. Morbi luctus quam et eros auctor, in varius enim elementum. Vivamus ut urna et sapien auctor aliquam nec in risus. Phasellus vel pretium nunc, ac porta purus. Integer sed eleifend ex, id facilisis nisi. Proin vel dolor blandit, imperdiet lectus congue, ultricies est. Mauris ultricies rhoncus turpis, eu maximus ex luctus in. Nunc pulvinar aliquet ullamcorper. Nulla sit amet velit at justo varius fringilla nec et massa.
</div>
<div className ={styles.row} style ={{width:"70%",backgroundColor:'yellow'}}>
<div id = "imageContainer" className={styles.storyColumn}  >
   <Img fluid = {data.drBoom.childImageSharp.fluid}/>
   <Img  fluid = {data.drBoom.childImageSharp.fluid}/>
</div>
<div id = "imageContainer" className={styles.storyColumn}  >
   <Img  fluid = {data.drBoom.childImageSharp.fluid}/>
   <Img fluid = {data.drBoom.childImageSharp.fluid}/>
</div>
</div>
    </div>

    <div id ="Our Cats Header"style={{display:'flex', justifyContent:'center'}}>
    <div>Our Cats</div>
    </div>

    <div id= "melbourne" style={{display:'flex', backgroundColor:"green"}}>
    <div style={{width:'30%'}}>Melbourne</div>
<div className ={styles.row} style ={{width:"70%",backgroundColor:'yellow'}}>
<div id = "imageContainer" className={styles.storyColumn}  >
   <Img fluid = {data.melbibi.childImageSharp.fluid}/>
   <Img  fluid = {data.melbibi.childImageSharp.fluid}/>
</div>
<div id = "imageContainer" className={styles.storyColumn}  >
   <Img  fluid = {data.melbibi.childImageSharp.fluid}/>
   <Img fluid = {data.melbibi.childImageSharp.fluid}/>
</div>
</div>
<div>
    </div>
    </div>

    <div id ="sydney" style={{display:'flex',backgroundColor:'purple'}}>
    <div style={{width:'30%'}}>Sydney</div>
    <div className ={styles.row} style ={{width:"70%",backgroundColor:'yellow'}}>
<div id = "imageContainer" className={styles.storyColumn}  >
   <Img fluid = {data.melbibi.childImageSharp.fluid}/>
   <Img  fluid = {data.melbibi.childImageSharp.fluid}/>
</div>
<div id = "imageContainer" className={styles.storyColumn}  >
   <Img  fluid = {data.melbibi.childImageSharp.fluid}/>
   <Img fluid = {data.melbibi.childImageSharp.fluid}/>
</div>
</div>
    </div>
    </div>
    </div>
)
}


