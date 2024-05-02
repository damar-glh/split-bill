import React from 'react'
import FriendList from './components/FriendList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBills from './components/FormSplitBills';
import InitialFriends from './components/InitialFriends';

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={InitialFriends} />
        <FormAddFriend />
        <button className='button'>Add Friend's</button>
      </div>
      <FormSplitBills />
    </div>
  )
}

export default App;