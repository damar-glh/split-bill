import React from 'react'
import Friend from './Friend'

const FriendList = ({friends}) => {
  return (
    <ul>
        {friends.map((friend, index) => (
            <Friend friend={friend} key={index} />
        ))}
    </ul>
  )
}

export default FriendList