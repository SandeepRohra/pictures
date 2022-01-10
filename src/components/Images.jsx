import React from 'react'
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.urls.regular} /> //yaha p apan vo use state s image liye usko ek prop m dale andusko map kardiye
  })
  return (
    <div>
      <h1>Image list:-</h1>
      {images}
    </div>
  )
}

export default ImageList
