import React from 'react'
import Info from './Info'
import Heading from './Heading'
import classNames from 'classnames'

const Item = ({ player, handleClick }) => {
  const { heading, info, content, img, active } = player

  return (
    <div
      className={ classNames(
      'playerItem',
      { 'activePlayer' : active }
     )}
      style={{ backgroundImage: `url(${img})` }}
      onClick={e => handleClick(heading)}>
      <div className="playerDetails">
        <Info>{info}</Info>
        <Heading>{heading}</Heading>
        {active && <div className="playerContent" dangerouslySetInnerHTML={{ __html: content }} />}
      </div>
    </div>
  )
}

export default Item