import React, { Component, Fragment } from 'react';
import './App.css';
import getPlayers from './players'
import Item from './components/Item'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: getPlayers()
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(name) {
    const updatedPlayers = this.state.players.map(p => {
      if (p.active) {
        p.active = false
      } else if (p.heading === name) {
        p.active = true
      }
      return p
    })
    this.setState({
      players: updatedPlayers
    })
  }

  render() {
    console.log(this.state.players)
    return (
      <Fragment>
        <div className="playerTitle">
          Chelsea Players 2019
        </div>
        <div className="playerContainer">
          {this.state.players.map((player, i) => (
            <Item player={player} handleClick={this.handleClick} />
          ))}
        </div>
        <Fragment className="playersBackground" />
      </Fragment>
    )
  }
}

export default App;
