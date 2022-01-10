import unsplash from '../api/unsplash'
import React from 'react'
import Input from './SearchBar'
import ImageList from './Images'
class App extends React.Component {
  state = { images: [] }
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    })
    this.setState({ images: response.data.results })
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        <Input onInputSubmit={this.onSearchSubmit} />

        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App
