import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styles from '../components/styles.module.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state ={
      isOpen: false,
      photoIndex: 0,
    };
  }

  gotoPrevLightboxImage() {
    const {photo} = this.state;
    this.setState({photo: photo - 1});
  }

  gotoNextLightboxImage() {
    const {photo} = this.state;
    this.setState({photo: photo + 1});
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({isOpen: true, photoIndex: index});
    console.log('hello', this.state);
  }

  closeLightbox() {
    this.setState({lightbox: false});
  }

  render() {
    const {photos, array} = this.props;
<<<<<<< HEAD
    const {photoIndex, isOpen} = this.state;
    console.log(array);
=======
    const {photoIndex,isOpen} = this.state
>>>>>>> 1c1c4c7556997d595d82b249369caed451986b74
    return (
      <div>
        <div className={styles.row}>
          {array.map((photo, i)=>{
            return (
              <a className ={styles.column} onClick={(e)=>this.openLightbox(i, e)} >
                <Img fluid ={photo.childImageSharp.fluid}/>
              </a>
            );
          })}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={array[photoIndex].childImageSharp.fluid.src}
            nextSrc={array[(photoIndex + 1) % array.length]}
            prevSrc={array[(photoIndex + array.length - 1) % array.length]}
            onCloseRequest={() => this.setState({isOpen: false})}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + array.length - 1) % array.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % array.length,
              })
            }
          />
        )}
      </div>
    );
  }
}