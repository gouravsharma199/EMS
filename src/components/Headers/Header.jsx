import React from 'react';

export const Header = (props) => {
        console.log(props.data);
    const handleLogout =() =>{
        // localStorage.clear();
        localStorage.setItem("logedInUser",'')
        props.changeUser('');
    }
    return (
        <header className='flex item-end justify-between p-5'>
            <h1 className='text-2xl font-medium'>Hello <br></br> <span className='text-3xl font-semibold'>{props.data?.firstName}</span></h1>
           <button className='bg-red-600 text-white px-4 py-2 rounded text-lg font-medium' onClick={handleLogout}>Log Out</button>
        </header>
    );
};
