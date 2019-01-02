import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Home = () => <div>THE HOME PAGE</div>
const About = () => <div>THE ABOUT PAGE</div>
const Profile = () => <div>THE PROFILE PAGE</div>

const Nav = () => {
  return (
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Nav></Nav>
      <Route path="/home" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/profile" component={Profile}></Route>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
