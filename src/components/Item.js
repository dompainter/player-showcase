import React from 'react'
import Info from './Info'
import Heading from './Heading'
import classNames from 'classnames'

const Item = ({ player, handleClick }) => {
  const { heading, info, content, active } = player

  return (
    <div
      className={ classNames(
      'playerItem',
      { 'activePlayer' : active }
     )}
      onClick={handleClick}>
      <div className="playerDetails">
        <Info>{info}</Info>
        <Heading>{heading}</Heading>
        {active && <div className="playerContent" dangerouslySetInnerHTML={{ __html: content }} />}
      </div>
    </div>
  )
}

export default Item