import React from 'react'

const FormSplitBills = ({ selectedFriend }) => {
  return (
    <form action="" className='form-split-bill'>
        <h2>Split Bills with {selectedFriend.name}</h2>
        <label htmlFor="">💵 Total Cost</label>
        <input type="text" placeholder='Enter Cost'/>
        <label htmlFor="">👨‍👩‍👧‍👦 Your Bill</label>
        <input type="text" placeholder='Enter Bill'/>
        <label htmlFor="">👨‍👩‍👧‍👦 {selectedFriend.name} Bill</label>
        <input type="text" disabled/>
        <label htmlFor="">👨‍👩‍👧‍👦 Paid By</label>
        <select name="" id="">
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>
        <button className='button'>Add</button>
    </form>
  )
}

export default FormSplitBills