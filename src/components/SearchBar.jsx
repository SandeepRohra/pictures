import React from 'react'

class Input extends React.Component {
  //y to state initalise karne k liye hota h
  state = { term: '' }

  // y apan form k defaut behaviour kostop karne k liye use kiye h
  //verna vo form submitkardeta h normally
  onSubmit(event) {
    event.preventDefault()
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
              //   yaha p apan controled behaviour of input k liye uski value ko state term kiye

              //   and then apan onChange m function deke state ki value change kiye setState karke taki y controled element rahe

              //   more precisely vo element k input ki value react p store rahe
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
