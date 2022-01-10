import React from 'react'

class Input extends React.Component {
  //y to state initalise karne k liye hota h
  state = { term: '' }

  // y apan form k defaut behaviour kostop karne k liye use kiye h
  //verna vo form submitkardeta h normally
  onSubmit = (event) => {
    event.preventDefault()
    //#IMP2 Yaha p kyuki vo input ka prop h to to usko apan is function m use kiye

    //#IMP3 yaha pas us onInputSubmit ki value ko apan this.state.term k equal kar diye abhi this.state.term kuch nii h
    // ab sidha niche onChange() m jaa #IMP4
    this.props.onInputSubmit(this.state.term)
  }
  render() {
    return (
      <div className="ui segment">
        {/* yaha apan onSubmmit m vo function diye h  */}
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              //#IMP4 ab vo state ki value yaha s change ho jaygi or term ki value b isiliye  change hojaygi n vo ho jaygi jo input m type hoga

              //yaha s sidha app.js m @ VALA comment padhna IMP5
              onChange={(e) => {
                this.setState({ term: e.target.value })
              }}
              value={this.state.term}
            />
            <button className="ui inverted primary button">Search</button>
          </div>
        </form>
      </div>
    )
  }
}
export default Input
