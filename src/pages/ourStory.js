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
        fluid(maxWidth:20 maxHeight:20) {
          ...GatsbyImageSharpFluid
        }
        }
      }
    }`)

    

return (
  <Links>
  <div>
  <div id="container" style ={{display:"flex",backgroundColor:"blue"}}>
    <div style={{width:'50%'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ex massa. Nullam lobortis a quam eu efficitur. Sed in mauris turpis. Vestibulum quis sapien malesuada, congue mauris et, iaculis enim. Nam ipsum ligula, efficitur at consectetur a, dignissim lacinia urna. Nullam tempor, nisl et consectetur fermentum, urna orci faucibus erat, ac aliquet eros tellus non turpis. Sed auctor lectus non cursus pretium. Donec consequat lorem at ante consectetur sollicitudin. Vestibulum efficitur ac quam auctor faucibus. Nulla efficitur, nunc at gravida facilisis, ligula lacus congue ipsum, in condimentum ligula magna euismod quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vitae risus ac purus auctor accumsan. Etiam congue ante id mi efficitur imperdiet. Etiam consequat velit ullamcorper porttitor vestibulum. Pellentesque interdum turpis et luctus dignissim.

Phasellus tellus enim, elementum sit amet laoreet sit amet, pharetra eget est. Sed sit amet dolor a lacus pretium gravida ac non purus. Donec molestie urna consectetur nunc imperdiet, lobortis varius magna lacinia. Integer egestas ullamcorper lacus, sollicitudin feugiat mi fermentum eu. Nulla sed eleifend leo, aliquet euismod dolor. Morbi luctus quam et eros auctor, in varius enim elementum. Vivamus ut urna et sapien auctor aliquam nec in risus. Phasellus vel pretium nunc, ac porta purus. Integer sed eleifend ex, id facilisis nisi. Proin vel dolor blandit, imperdiet lectus congue, ultricies est. Mauris ultricies rhoncus turpis, eu maximus ex luctus in. Nunc pulvinar aliquet ullamcorper. Nulla sit amet velit at justo varius fringilla nec et massa.
</div>
   <Img fluid = {data.drBoom.childImageSharp.fluid}/>
    </div>
    <div>
      <div >Our Cats</div>
    <div><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ex massa. Nullam lobortis a quam eu efficitur. Sed in mauris turpis. Vestibulum quis sapien malesuada, congue mauris et, iaculis enim. Nam ipsum ligula, efficitur at consectetur a, dignissim lacinia urna. Nullam tempor, nisl et consectetur fermentum, urna orci faucibus erat, ac aliquet eros tellus non turpis. Sed auctor lectus non cursus pretium. Donec consequat lorem at ante consectetur sollicitudin. Vestibulum efficitur ac quam auctor faucibus. Nulla efficitur, nunc at gravida facilisis, ligula lacus congue ipsum, in condimentum ligula magna euismod quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi vitae risus ac purus auctor accumsan. Etiam congue ante id mi efficitur imperdiet. Etiam consequat velit ullamcorper porttitor vestibulum. Pellentesque interdum turpis et luctus dignissim.

Phasellus tellus enim, elementum sit amet laoreet sit amet, pharetra eget est. Sed sit amet dolor a lacus pretium gravida ac non purus. Donec molestie urna consectetur nunc imperdiet, lobortis varius magna lacinia. Integer egestas ullamcorper lacus, sollicitudin feugiat mi fermentum eu. Nulla sed eleifend leo, aliquet euismod dolor. Morbi luctus quam et eros auctor, in varius enim elementum. Vivamus ut urna et sapien auctor aliquam nec in risus. Phasellus vel pretium nunc, ac porta purus. Integer sed eleifend ex, id facilisis nisi. Proin vel dolor blandit, imperdiet lectus congue, ultricies est. Mauris ultricies rhoncus turpis, eu maximus ex luctus in. Nunc pulvinar aliquet ullamcorper. Nulla sit amet velit at justo varius fringilla nec et massa.

Suspendisse condimentum, elit sed lobortis sollicitudin, leo purus lacinia eros, quis tincidunt ante sem ac tellus. Nam malesuada neque nunc, eget tempus dui commodo in. Ut metus dui, malesuada id tortor sit amet, maximus scelerisque ex. Duis porta condimentum turpis, in feugiat orci consequat in. Aenean a fringilla turpis. Nunc efficitur eros vitae commodo egestas. Integer ut mi ut ante aliquam molestie vitae id leo. Mauris euismod at sapien vel dignissim. Morbi consectetur placerat arcu eget congue. Fusce ultrices dolor non orci egestas ornare. Proin at metus faucibus lorem sollicitudin elementum.

Maecenas feugiat mi a magna congue, sed lacinia risus rhoncus. Nunc volutpat aliquam purus quis tempus. Suspendisse arcu mauris, vestibulum eu turpis condimentum, ullamcorper mollis arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sollicitudin lectus eu eros consectetur eleifend. Sed fringilla sollicitudin purus, eget congue leo scelerisque sed. Vivamus lacinia finibus placerat. Pellentesque eu euismod mi, vel sagittis nibh. Phasellus a sem ac sem maximus maximus et eget purus. Proin sit amet lectus elementum, ultricies dui sit amet, maximus dolor. Mauris vulputate, augue et elementum euismod, eros augue sagittis neque, sed hendrerit nulla ante mollis enim.

Aliquam molestie ante felis, quis ullamcorper ligula cursus vel. Cras pharetra lectus ac nunc venenatis scelerisque. Nullam vitae rhoncus eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum magna lacus, tincidunt a varius sit amet, commodo non justo. Suspendisse euismod vel libero vel imperdiet. Phasellus sagittis consectetur dolor eget viverra. Nam pellentesque eros sapien. Cras vitae erat massa. Nunc aliquet turpis quis suscipit convallis. Proin placerat sodales pulvinar.</div>
    </div>
    </div>
    </div>
</Links>
)
}


