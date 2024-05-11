import React, { useState } from 'react'
import FriendList from './components/FriendList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBills from './components/FormSplitBills';
import InitialFriends from './components/InitialFriends';

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  function handleShowAddFriend(){
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={InitialFriends} />
        {showAddFriend && <FormAddFriend/>}
        <button className='button' onClick={handleShowAddFriend}>{showAddFriend ? "Close Friend's" : "Add Friend's"}</button>
      </div>
      <FormSplitBills />
    </div>
  )
}

export default App;