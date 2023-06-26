"use client"
import { useState } from 'react';
import { LogIn, LogOut, toggleModerator } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from '@/redux/store';
import { useAppSelector } from '@/redux/store';

export default function LogIn() {
    const [username, setUsername] = useState('');

    const distpatch = useDispatch<AppDispatch>();
    const isAuth: useAppSelector((state) => state.authReducer.value.isAuth);

    const onClickLogIn = () => {
        distpatch(LogIn(username));
    }

    const onClickToggle = () => {
        distpatch(toggleModerator());
    }
    
    const onClickLogOut = () => {
        distpatch(LogOut());
    };

  return (
    <div>
        <input className='text-black' type="text" onChange={(e) => setUsername(e.target.value)} />
        <br></br>
        <button onClick={onClickLogIn}>Log In</button>
        <br></br>
        <button onClick={onClickLogOut}>Log Out</button>
        <br></br>
         
         {isAuth && <button onClick={onClickToggle}>Toggle Moderator Status</button>}
        
    </div>
  )
}
