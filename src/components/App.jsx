import unsplash from '../api/unsplash'
import React from 'react'
import Input from './SearchBar'
class App extends React.Component {
  state = { images: [] } //yaha p apan state ko array m isiliye set kiye taki baad m apan map kar paye images ko

  onSearchSubmit = async (term) => {
    //isliye kaam nii kiya tha arrow fuction  kyuki async = k adar ayega
    const response = await unsplash //apan y refector kiye iske contents ko api k unsplash.js m daaldiye
      .get('/search/photos', {
        params: { query: term },
      })
    this.setState({ images: response.data.results })
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        <Input onSubmit={this.onSearchSubmit} />
        <p>Found {this.state.images.length} images</p>
      </div>
    )
  }
}

export default App
