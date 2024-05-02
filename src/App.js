import React from 'react'
import FriendList from './components/FriendList';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBills from './components/FormSplitBills';
const InitialFriends = [
  {
    id: 118836,
    name: "Diamond Star",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Alton Zone",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Alice Smith",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

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