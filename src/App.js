import React, { useState } from 'react'
import FriendList from './components/FriendList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBills from './components/FormSplitBills';
import InitialFriends from './components/InitialFriends';

const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(InitialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);  

  function handleShowAddFriend(){
    setShowAddFriend((showAddFriend) => !showAddFriend);
    setSelectedFriend(null);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend] );
  };

  function handleSelectedFriend(friend) {
    setSelectedFriend((selected) => selected?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} onSelected={handleSelectedFriend}/>
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
        <button className='button' onClick={handleShowAddFriend}>{showAddFriend ? "Close Friend's" : "Add Friend's"}</button>
      </div>
      {selectedFriend && <FormSplitBills />}
    </div>
  )
}

export default App;