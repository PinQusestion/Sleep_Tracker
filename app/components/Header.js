'use client'
import Link from 'next/link'
import React from 'react'
import Profile from './Profile';

import { useAuth } from '../../lib/authContext';
import { logOut } from '../../lib/authService';

function Header() {
  const {user, loading} = useAuth();

  const clickHandler = async () => {
    try {
      await logOut();
      window.location.href = "/";
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className='w-full bg-[#0a0e18] flex justify-between items-center p-3 pt-4 pb-4 border-b-1 border-white'>
      <h1 className='text-xl font-bold ml-20'>Sleep Tracker</h1>
      <div className="flex gap-10 items-center mr-5 font-semibold">
        {user ? <Link href="/home">Home</Link> : <Link href="/">Home</Link>}
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/tips">Tips</Link>
        {user ? <Profile /> : <Link href="/Login"><div className='w-fit rounded-xl bg-[#00bcd4] px-4 py-2'>LogIn</div></Link>}
      </div>
    </div>
  )
}

export default Header

// <button onClick={clickHandler} className='w-fit py-2 px-4 bg-[#00bcd4] text-white rounded-xl hover:cursor-pointer'>LogOut</button>