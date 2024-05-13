import React, { useState } from 'react'

const FormSplitBills = ({ selectedFriend, onSplitBill }) => {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e){
    e.preventDefault();
    if (!amount || !myBill) return;
    onSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
  }

  return (
    <form action="" className='form-split-bill' onSubmit={handleSubmit}>
        <h2>Split Bills with {selectedFriend.name}</h2>
        <label htmlFor="">💵 Total Cost</label>
        <input type="text" placeholder='Enter Cost' value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <label htmlFor="">👨‍👩‍👧‍👦 Your Bill</label>
        <input type="text" placeholder='Enter Bill' value={myBill} onChange={(e) => setMyBill(e.target.value)}/>
        <label htmlFor="">👨‍👩‍👧‍👦 {selectedFriend.name} Bill</label>
        <input type="text" value={friendBill} disabled/>
        <label htmlFor="">👨‍👩‍👧‍👦 Paid By</label>
        <select name="" id="" value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>
        <button className='button'>Add</button>
    </form>
  )
}

export default FormSplitBills