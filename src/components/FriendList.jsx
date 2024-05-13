import React from 'react'
import Friend from './Friend'

const FriendList = ({ friends, onSelected, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend friend={friend} key={index} onSelected={onSelected} selectedFriend={selectedFriend} />
      ))}
    </ul>
  )
}

export default FriendList