import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  console.log(props)
  return (
    <div>
      <button onClick={() => props.dispatch({ type: 'ADD_COUNT' })}>ADD COUNT</button>
      <button onClick={() => props.dispatch({ type: 'REDUCE_COUNT' })}>REDUCE COUNT</button>
      <h1>{props.count}</h1>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.count
})

const AppWithStore = connect(mapStateToProps)(App)

export default AppWithStore;
