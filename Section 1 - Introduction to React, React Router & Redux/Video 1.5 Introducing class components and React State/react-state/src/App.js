import React from 'react'

class App extends React.Component {
  state = {
    open: false
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return <div>
      <div onClick={this.handleClick} style={{ padding: '12px', border: '1px solid grey', cursor: 'pointer', width: '200px' }}>Hi, Frantz {this.state.open ? <span>&uarr;</span> : <span>&darr;</span>}</div>
      {this.state.open && <div style={{ padding: '12px', border: '1px solid grey', width: '200px' }}>
        <ul>
          <li>My Profile</li>
          <li>Logout</li>
        </ul>
      </div>}
    </div>
  }
}

export default App
