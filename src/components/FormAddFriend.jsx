import React, { useState } from 'react'

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState(" ");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?${id}`,
      balance: 0,
    }
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form action="" className='form-add-friend' onSubmit={handleSubmit}>
        <label htmlFor="">👨‍👩‍👧‍👦 Name</label>
        <input type="text" name="" id="" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="">📸 Images</label>
        <input type="text" name="" id="" placeholder='Enter URL' value={image} onChange={(e) => setImage(e.target.value)}/>
        <button className='button'>Add</button>
    </form>
  )
}

export default FormAddFriend