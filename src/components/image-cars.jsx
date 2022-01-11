import React from 'react'
class ImageCard extends React.Component {
  constructor(props) {
    //to create a ref we create a variable inside the cunstrouctor and in cassesthis. is used befor variable name
    super(props)
    this.imageRef = React.createRef()
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans) //apan isme ek eventListner add kar diye jo jab component mount hoga
    //tab vo listner suega and then
  }
  setSpans = () => {
    console.log(this.imageRef.current.clientHeight)
  } //tab uske paas current height hogi vo log kardega
  render() {
    const { description, urls } = this.props.image
    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
        {/* then we pass this.imageRef as a prop ref = {this.imageRef} */}
      </div>
    )
  }
}
export default ImageCard
