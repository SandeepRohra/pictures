import React from 'react'
class ImageCard extends React.Component {
  constructor(props) {
    //to create a ref we create a variable inside the cunstrouctor and in cassesthis. is used befor variable name
    super(props)
    this.state = { spans: 0 } //Step 1) apan ek state init kiye and uski span property ko 0 kardiye
    this.imageRef = React.createRef()
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans) // step 2) apan isme ek eventListner add kar diye jo jab component mount hoga
    //tab vo listner suega and then
  }
  setSpans = () => {
    //step 3- apan us event listner m jab component mount hga to ek function triger karvaye
    //step 4 -fir jab vo mount hone k baad vali client height milegi
    const height = this.imageRef.current.clientHeight //step5- usko  apan ek const height banaye jisme apan usko store kiye
    const spans = Math.ceil(height / 10) //step 6- usko apan MAth.ceil s height/150 kiye taki kitte sans chiye pata chale
    this.setState({ spans: spans })
  } //step 7 - fir utte spans ko apan set staekarke state m pass kar diye
  render() {
    const { description, urls } = this.props.image
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/* step 8 fir apan iski style m gridRowEnd m utna span rakh diye */}
        <img ref={this.imageRef} alt={description} src={urls.regular} />
        {/* then we pass this.imageRef as a prop ref = {this.imageRef} */}
      </div>
    )
  }
}
export default ImageCard
