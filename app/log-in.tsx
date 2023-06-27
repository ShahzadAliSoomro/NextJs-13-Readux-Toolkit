import { useState } from 'react';
import { LogOut, toggleModerator } from "@/redux/features/auth-slice";
import { AppDispatch } from '@/redux/store';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { useDispatch } from 'react-redux';


export default function LogIn() { 
    const [username, setUsername] = useState('');

    type RootState = AppDispatch;
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    const dispatch = useDispatch<AppDispatch>();
    const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

    const onClickLogIn = () => {
        dispatch(LogIn(username));
    }

    const onClickToggle = () => {
        dispatch(toggleModerator());
    }

    const onClickLogOut = () => {
        dispatch(LogOut());
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
