import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const Button = (props) => {
  console.log(props)
  const time = (new Date()).toLocaleTimeString()
  let classNames = ""

  if (props.type === 'success') {
    classNames += 'btn-success'
  }

  if (props.type === 'danger') {
    classNames += ' btn-danger'
  }

  if (props.size === 'big') {
    classNames += ' btn-large'
  }
  console.log(classNames)
  return <button className={classNames}>Click me - {time}</button>
}

const App = () => {
  const type = 'success'

  return <div>
    <Button type={type}></Button>
    <Button type="danger"></Button>
  </div>
}

const root = document.getElementById('root')

ReactDOM.render(<App></App>, root)
