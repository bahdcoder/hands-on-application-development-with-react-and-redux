import React from 'react'
import ReactDOM from 'react-dom'

const Button = () => {
  const time = (new Date()).toLocaleTimeString()
  return <button>Click me - {time}</button>
}

const Footer = () => {
  const date = (new Date()).getFullYear()
  return <footer>Copyright {date}</footer>
}

const App = () => {
  return <div>
    <Button></Button>
    <Footer></Footer>
  </div>
}

const root = document.getElementById('root')

ReactDOM.render(<App></App>, root)
