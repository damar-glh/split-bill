import React from 'react'

const Friend = ({ friend }) => {
    return (
        <li>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className='red'>
                    You owe Rp.{Math.abs(friend.balance)} to {friend.name}.
                </p>
            )}
            {friend.balance > 0 && (
                <p className='green'>
                    {friend.name} owes you Rp.{Math.abs(friend.balance)}.
                </p>
            )}
            {friend.balance === 0 && (<p>You and {friend.name} have no debt.</p>)}
            <button className='button'>Choose</button>
        </li>
    )
}

export default Friend