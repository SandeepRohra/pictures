import React from 'react'
import './images-list.css'
import ImageCard from './image-cars'
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} /> //yaha p apan vo use state s image liye usko ek prop m dale andusko map kardiye
  })
  return <div className="image-list">{images}</div>
}

export default ImageList
