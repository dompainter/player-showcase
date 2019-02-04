import React from 'react'
import Info from './Info'
import Heading from './Heading'
import classNames from 'classnames'
import Stats from './Stats'

const Item = ({ player, handleClick }) => {
  const { firstName, lastName, info, content, active } = player

  return (
    <div
      className={ classNames(
      'playerItem',
      { 'activePlayer' : active }
     )}>
      <button className="playerItemLink" onClick={handleClick} />
      <div className="playerDetails">
        <Info>{info}</Info>
        <div className="playerHeadings">
          <Heading>{firstName}</Heading>
          <Heading>{lastName}</Heading>
        </div>
        {active && <Stats className="playerStats" {...player} />}
        {active && <div className="playerContent" dangerouslySetInnerHTML={{ __html: content }} />}
      </div>
    </div>
  )
}

export default Item