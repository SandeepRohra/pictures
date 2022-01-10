import unsplash from '../api/unsplash'
import React from 'react'
import Input from './SearchBar'
class App extends React.Component {
  state = { images: [] } //yaha p apan state ko array m isiliye set kiye taki baad m apan map kar paye images ko

  onSearchSubmit = async (term) => {
    //$ INP6 ab  upar (isme) jo term h vo searchbar k state k term k equal hua n to fir vo pass ho jayega isme

    //INP7 to vo isme term input vala query key k sath h to vohich search hoga jo input m type hoga

    ///-------------Finished IMP points which explained how the Search is Happening-----------///

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
        <Input onInputSubmit={this.onSearchSubmit} />
        {/* IMP1  yaha p onInputSubmit h vo ek prop banke SearchBar m gyii  ab searchBAr vale Component m jaa IMP2 m */}

        {/* @ IMP5 ab onInputSubmit ki value term k equal h jo ki onChange k karan change hoke jo type kiye h vo ho gyi h and vo ab isme paas hogi 
         ab sidha $ INP6 vale comment m jaa jo upar h */}
        <p>Found {this.state.images.length} images</p>
      </div>
    )
  }
}

export default App
