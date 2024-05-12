import React from 'react'
import Friend from './Friend'

const FriendList = ({friends, onSelected}) => {
  return (
    <ul>
        {friends.map((friend, index) => (
            <Friend friend={friend} key={index} onSelected={onSelected}/>
        ))}
    </ul>
  )
}

export default FriendList