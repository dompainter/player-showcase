import React from 'react'

const Stats = ({ goals, appearances, position }) => (
  <div className="playerStats">
    <span><i className="fas fa-male" /> {position}</span>
    <span><i className="far fa-futbol" /> {goals}</span>
    <span><i className="fas fa-users" /> {appearances}</span>
  </div>
)

export default Stats
