import React, { Component, Fragment } from 'react';
import './App.css';
import getPlayers from './players'
import Item from './components/Item'
import classNames from 'classnames'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: getPlayers(),
      defaultBackgroundActive: true,
      previousActiveIndex: 0,
      currentActiveIndex: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(index, name) {
    const updatedPlayers = this.state.players.map(p => {
      if (p.active) {
        p.active = false
      } else if (p.heading === name) {
        p.active = true
      }
      return p
    })
    
    const previousIndex = this.state.currentActiveIndex
    if (index === previousIndex) index = 0

    this.setState({
      players: updatedPlayers,
      currentActiveIndex: index,
      previousActiveIndex: previousIndex
    })
  }

  render() {
    return (
      <Fragment>
        <div className="playerTitle">
          Chelsea Players 2019
        </div>
        <div className="playerContainer">
          {this.state.players.map((player, i) => {
            const playerIndex = i + 1
            return (
              <Item key={i} player={player} handleClick={() => this.handleClick(playerIndex, player.heading)} />
            )
          })}
          <div className="playersBackgrounds">
            {this.state.players.map((player, i) => {
              const index = i + 1
              return (
                <div key={i}
                  className={classNames("playerBackgroundImage",
                    { activeBackground: index === this.state.currentActiveIndex },
                    { previousBackground: index === this.state.previousActiveIndex }
                  )}
                  style={{ backgroundImage: `url(${player.img})`}}
                />
              )
            })}
            <div className={classNames("playerBackgroundImage",
              { activeBackground: this.state.currentActiveIndex === 0 },
              { previousBackground: this.state.previousActiveIndex === 0 }
            )}
                style={{ backgroundImage: `url('https://footballnews92.files.wordpress.com/2013/10/chelsea-cl-2012.jpg')`}}
              />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App;
