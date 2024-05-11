import React, { useState } from 'react'
import FriendList from './components/FriendList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBills from './components/FormSplitBills';
import InitialFriends from './components/InitialFriends';

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(InitialFriends);

  function handleShowAddFriend(){
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend] );
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
        <button className='button' onClick={handleShowAddFriend}>{showAddFriend ? "Close Friend's" : "Add Friend's"}</button>
      </div>
      <FormSplitBills />
    </div>
  )
}

export default App;