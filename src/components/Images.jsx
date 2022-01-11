import React from 'react'
import './images-list.css'
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.urls.regular} /> //yaha p apan vo use state s image liye usko ek prop m dale andusko map kardiye
  })
  return <div className="image-list">{images}</div>
}

export default ImageList
