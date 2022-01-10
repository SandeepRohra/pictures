import axios from 'axios' //axios install karte h npm i --save axios s apan
import React from 'react'
import Input from './SearchBar'
class App extends React.Component {
  state = {}
  //isme apan async await use kiye
  async onSearchSubmit(term) {
    //sabse phale apan async likhte hai
    //yaha m arrow function ko normal function m covert kiya pata nii kyu kaam ni kar raa tha async usme
    //yaha p apan axios use kiye y uska sntax h y
    const response = await axios //fir yaha p await isiliye karte h taki jabtak response aye tab tak vo wait kare
      .get('https://api.unsplash.com/search/photos', {
        //.get m apan vo link dale jaha s apan vo data search karte h
        params: { query: term }, //yaha p parameter yaha p quarry jo h vo is form m jo likhe h vo h
        headers: {
          //fir headers m apan apni authoraization key dale h jisme client id vaha login karke mili
          Authorization: `Client-ID PbaeH0pSj_5nwFWICa7UqhlsXlNSqFR5o_qVlOcZRCQ `,
        },
      })
    console.log(response.data.results) //aur fir apan directly console.log karsakte h bina kisi .then k
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
