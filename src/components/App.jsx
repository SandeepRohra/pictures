import axios from 'axios' //axios install karte h npm i --save axios s apan
import React from 'react'
import Input from './SearchBar'
class App extends React.Component {
  state = {}
  async onSearchSubmit(term) {
    //yaha p apan axios use kiye y uska sntax h y
    const response = await axios //.get m apan vo link dale jaha s apan vo data search karte h
      .get('https://api.unsplash.com/search/photos', {
        params: { query: term }, //yaha p parameter yaha p quarry jo h vo is form m jo likhe h vo h
        headers: {
          //fir headers m apan apni authoraization key dale h jisme client id vaha login karke mili
          Authorization: `Client-ID PbaeH0pSj_5nwFWICa7UqhlsXlNSqFR5o_qVlOcZRCQ `,
        },
      })
    console.log(response.data.results)
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
