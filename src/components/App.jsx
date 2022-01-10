import React from 'react'
import Input from './SearchBar'
class App extends React.Component {
  onSearchSubmit = (term) => {
    console.log(term)
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '15px' }}>
        {/* yaha p apan ek prop pass kiye onSubmit aur usko apan onSearchSubmit k equal kiye to ek propbana on onSubmit */}
        <Input onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App
